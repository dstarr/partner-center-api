import { Config } from './util/Config';
import { AuthManager } from './util/AuthManager';

// Example usage of the Config class
console.debug('API URL:', Config.PARTNER_CENTER_API_URL);
console.debug('Client ID:', Config.CLIENT_ID);
console.debug('Environment:', Config.NODE_ENV);
console.debug('Login URL:', Config.LOGIN_URL);
console.debug('Scope:', Config.SCOPE);
console.debug('Tenant ID:', Config.TENANT_ID);

// Example usage of the AuthManager class
async function main() {
  try {
    const authManager = new AuthManager();
    
    // Authenticate and get the JWT access token
    const accessToken = await authManager.authenticate();
    console.debug('Access Token obtained:', accessToken.substring(0, 20) + '...');
    
    // Check if we have a valid token
    console.debug('Has valid token:', authManager.hasValidToken());
    
    // Get the current token (should be the same as above)
    const currentToken = authManager.getCurrentToken();
    console.debug('Current token available:', !!currentToken);
    
  } catch (error) {
    console.error('Authentication error:', error);
  }
}

// Run the main function
main();