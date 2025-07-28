const SCHEMAS = {
  // Product Ingestion Schemas
  LISTING_ASSET: 'https://product-ingestion.azureedge.net/schema/listing-asset/2022-03-01-preview3',
  LISTING: 'https://product-ingestion.azureedge.net/schema/listing/2022-03-01-preview3',
  PLAN_LISTING: 'https://product-ingestion.azureedge.net/schema/plan-listing/2022-03-01-preview3',
  PROPERTY: 'https://product-ingestion.azureedge.net/schema/property/2022-03-01-preview3',
  
  // Commercial Marketplace Schemas
  COMMERCIAL_MARKETPLACE_SETUP: 'https://schema.mp.microsoft.com/schema/commercial-marketplace-setup/2022-03-01-preview2',
  CUSTOMER_LEADS: 'https://schema.mp.microsoft.com/schema/customer-leads/2022-03-01-preview3',
  MICROSOFT365_INTEGRATION: 'https://schema.mp.microsoft.com/schema/microsoft365-integration/2022-03-01-preview2',
  PLAN: 'https://schema.mp.microsoft.com/schema/plan/2022-03-01-preview3',
  PRODUCT: 'https://schema.mp.microsoft.com/schema/product/2022-03-01-preview3',
  RESELLER: 'https://schema.mp.microsoft.com/schema/reseller/2022-03-01-preview2',
  SUBMISSION: 'https://schema.mp.microsoft.com/schema/submission/2022-03-01-preview2',
  
  // Price and Availability Schemas
  PRICE_AVAILABILITY_CUSTOM_METER: 'https://schema.mp.microsoft.com/schema/price-and-availability-custom-meter/2022-03-01-preview3',
  PRICE_AVAILABILITY_OFFER: 'https://schema.mp.microsoft.com/schema/price-and-availability-offer/2022-03-01-preview3',
  PRICE_AVAILABILITY_PLAN: 'https://schema.mp.microsoft.com/schema/price-and-availability-plan/2022-03-01-preview4',
  
  // Technical Configuration Schemas
  SAAS_TECHNICAL_CONFIGURATION: 'https://schema.mp.microsoft.com/schema/software-as-a-service-technical-configuration/2022-03-01-preview3'
}

export default SCHEMAS;