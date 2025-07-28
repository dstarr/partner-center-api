import axios, { AxiosResponse } from 'axios';
import { Config } from '../util/Config';

/**
 * Interface for the authentication response from the login URL
 */
interface AuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope?: string;
}

/**
 * Interface for the authentication request payload
 */
interface AuthRequest extends Record<string, string> {
  client_id: string;
  client_secret: string;
  scope: string;
  grant_type: string;
}

/**
 * Class to manage API authentication and JWT token handling
 */
export class AuthManager {
  private accessToken: string | null = null;
  private tokenExpiry: number | null = null;

  /**
   * Authenticates with the API and returns a JWT access token
   * @returns Promise<string> - The JWT access token
   */
  public async authenticate(): Promise<string> {
    // Check if we have a valid cached token
    if (this.isTokenValid()) {
      return this.accessToken!;
    }

    try {
      const token = await this.requestNewToken();
      this.accessToken = token;
      this.tokenExpiry = Date.now() + (3600 * 1000); // Token expires in 1 hour (3600 seconds)
      return token;
    } catch (error) {
      console.error('Authentication failed:', error);
      throw new Error('Failed to authenticate with the API');
    }
  }

  /**
   * Requests a new access token from the login URL
   * @returns Promise<string> - The new access token
   */
  private async requestNewToken(): Promise<string> {
    const authUrl = `${Config.LOGIN_URL}/${Config.TENANT_ID}/oauth2/v2.0/token`;
    
    const authData: AuthRequest = {
      client_id: Config.CLIENT_ID,
      client_secret: Config.CLIENT_SECRET,
      scope: Config.SCOPE,
      grant_type: 'client_credentials'
    };

    const response: AxiosResponse<AuthResponse> = await axios.post(
      authUrl,
      new URLSearchParams(authData),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    if (!response.data.access_token) {
      throw new Error('No access token received in response');
    }

    return response.data.access_token;
  }

  /**
   * Checks if the current cached token is still valid
   * @returns boolean - True if token is valid, false otherwise
   */
  private isTokenValid(): boolean {
    if (!this.accessToken || !this.tokenExpiry) {
      return false;
    }

    // Add a 5-minute buffer before expiry
    const bufferTime = 5 * 60 * 1000; // 5 minutes in milliseconds
    return Date.now() < (this.tokenExpiry - bufferTime);
  }

  /**
   * Clears the cached token, forcing a new authentication on next request
   */
  public clearToken(): void {
    this.accessToken = null;
    this.tokenExpiry = null;
    console.debug('Cached token cleared');
  }

  /**
   * Gets the current access token (without authentication if not cached)
   * @returns string | null - The current access token or null if not available
   */
  public getCurrentToken(): string | null {
    return this.accessToken;
  }

  /**
   * Checks if the authentication manager has a valid token
   * @returns boolean - True if a valid token is available
   */
  public hasValidToken(): boolean {
    return this.isTokenValid();
  }
} 