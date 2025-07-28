# Azure Partner Center SaaS Offers Lister

This script authenticates with Azure Partner Center and lists all SaaS offers in your Partner Center account.

It then prints details of each SaaS offer. 

Seems simple, right? Not so fast.

## Features

- Azure AD authentication using client credentials flow
- Lists all SaaS offers with detailed information
- Well-structured TypeScript code with clear separation of concerns

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

1. Create a `.env` file in the project root.
2. Copy and paste the environmental variables defined in `.env.sample`.
3. Provide values for each variable.

### 3. Run the script

```bash
npm run dev
```
