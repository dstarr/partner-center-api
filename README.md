# Azure Partner Center SaaS Offers Lister

This script authenticates with Azure Partner Center and lists all SaaS offers in your Partner Center account.

## Features

- 🔐 Azure AD authentication using client credentials flow
- 📋 Lists all SaaS offers with detailed information
- 📊 Provides summary statistics and insights
- 🎨 Beautiful console output with emojis and formatting
- 🏗️ Well-structured TypeScript code with clear separation of concerns

## Prerequisites

1. **Azure Partner Center Account**: You need access to Azure Partner Center
2. **Azure AD Application**: A registered application with appropriate permissions
3. **Node.js**: Version 16 or higher

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the project root with the following variables:

```env
# Required Environment Variables
CLIENT_ID=your_client_id_here
CLIENT_SECRET=your_client_secret_here
TENANT_ID=your_tenant_id_here
LOGIN_URL=https://login.microsoftonline.com
PARTNER_CENTER_API_URL=https://api.partner.microsoft.com
REDIRECT_URI=http://localhost:3000/auth/callback
SCOPE=https://api.partner.microsoft.com/user_impersonation

# Optional Environment Variables (with defaults)
LOG_LEVEL=info
PORT=3000
NODE_ENV=development
```

### 3. Azure AD Application Setup

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to "Azure Active Directory" > "App registrations"
3. Create a new registration or use an existing one
4. Add the following API permissions:
   - `Partner Center API` > `SaaS.Read.All`
   - `Partner Center API` > `Product.Read.All`
5. Create a client secret and note it down
6. Copy the Application (client) ID and Tenant ID

## Usage

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── util/
│   └── Config.ts                 # Environment variable management and validation
├── services/
│   ├── AuthenticationService.ts  # Azure AD authentication
│   └── PartnerCenterApiService.ts # Partner Center API calls
├── types/
│   └── PartnerCenterTypes.ts     # TypeScript interfaces
├── utils/
│   └── OfferDisplayFormatter.ts  # Console output formatting
├── SaasOffersManager.ts          # Main orchestration class
└── index.ts                      # Entry point
```

## Output Example

```
🎯 Azure Partner Center SaaS Offers Lister
==========================================

🚀 Initializing Partner Center SaaS Offers Manager...
✅ Authentication successful
✅ Initialization complete

📋 Retrieving all SaaS offers...

🔍 Fetching SaaS offers from Partner Center...
📦 Found 5 SaaS offers in this batch
✅ Total SaaS offers found: 5

📊 SaaS Offers Summary
=====================
Total Offers: 5

📈 Status Breakdown:
   ✅ Active: 3
   📝 Draft: 2

🏢 Publisher Breakdown:
   📋 publisher-123: 3 offers
   📋 publisher-456: 2 offers

📋 SaaS Offers List (5 total)
==================================================

1. 
📦 My Awesome SaaS App
   ID: offer-123
   Status: ✅ Active
   Publisher: publisher-123
   Type: SaaS
   Pricing: PerUser
   Created: 1/15/2024
   Modified: 2/20/2024
   ────────────────────────────────────────────────

🔍 Additional Insights:
=====================
📅 Most recently modified: My Awesome SaaS App (2/20/2024)
✅ Active/Published offers: 3
📝 Draft/Unpublished offers: 2

🎉 Script completed successfully!
```

## Error Handling

The script includes comprehensive error handling for:
- Missing environment variables
- Authentication failures
- API request errors
- Network connectivity issues

## Contributing

The code is structured with clear separation of concerns:
- **AuthenticationService**: Handles Azure AD authentication
- **PartnerCenterApiService**: Manages API calls to Partner Center
- **OfferDisplayFormatter**: Formats output for console display
- **SaasOffersManager**: Orchestrates the entire process
- **Config**: Manages configuration and validates environment variables

## Troubleshooting

### Common Issues

1. **Authentication Failed**: Check your tenant ID, client ID, and client secret
2. **Permission Denied**: Ensure your Azure AD app has the required API permissions
3. **No Offers Found**: Verify you have SaaS offers in your Partner Center account

### Debug Mode

For debugging, you can add more verbose logging by modifying the console.log statements in the services. 