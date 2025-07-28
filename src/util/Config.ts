import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

/**
 * Configuration class that validates all required environment variables
 * and provides access to them as const fields.
 */
export class Config {
  // Required environment variables
  public static readonly CLIENT_ID: string = Config.getRequiredEnvVar('CLIENT_ID');
  public static readonly CLIENT_SECRET: string = Config.getRequiredEnvVar('CLIENT_SECRET');
  public static readonly TENANT_ID: string = Config.getRequiredEnvVar('TENANT_ID');
  public static readonly LOGIN_URL: string = Config.getRequiredEnvVar('LOGIN_URL');
  public static readonly PARTNER_CENTER_API_URL: string = Config.getRequiredEnvVar('PARTNER_CENTER_API_URL');
  public static readonly SCOPE: string = Config.getRequiredEnvVar('SCOPE');
  public static readonly NODE_ENV: string = Config.getOptionalEnvVar('NODE_ENV', 'development');

  /**
   * Gets a required environment variable and throws an error if it's missing.
   */
  private static getRequiredEnvVar(name: string): string {
    const value = process.env[name];
    if (!value) {
      console.log(`Missing required environment variable: ${name}`);
      process.exit(1);
    }
    return value;
  }

  /**
   * Gets an optional environment variable with a default value.
   */
  private static getOptionalEnvVar(name: string, defaultValue: string): string {
    return process.env[name] || defaultValue;
  }

  /**
   * Returns all configuration values as a plain object for debugging/logging.
   */
  public static toObject(): Record<string, any> {
    return {
      CLIENT_ID: this.CLIENT_ID,
      CLIENT_SECRET: this.CLIENT_SECRET ? '[HIDDEN]' : undefined,
      TENANT_ID: this.TENANT_ID,
      LOGIN_URL: this.LOGIN_URL,
      PARTNER_CENTER_API_URL: this.PARTNER_CENTER_API_URL,
      SCOPE: this.SCOPE,
      NODE_ENV: this.NODE_ENV,
    };
  }
}
