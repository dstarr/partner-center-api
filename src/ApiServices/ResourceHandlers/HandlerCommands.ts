import SCHEMAS from "../../util/pcApiSchemas";
import { IResourceCommand } from "./IResourceCommand";

export class PlanCommand implements IResourceCommand {
    schema: string = SCHEMAS.PLAN;
    execute(resource: any): void {
        console.log("PLAN:", resource.alias);
    }
}

export class PlanListingCommand implements IResourceCommand {
    schema: string = SCHEMAS.PLAN_LISTING;
    execute(resource: any): void {
        // just  the schema name
        console.log(this.schema);
    }
}

export class TechnicalConfigurationCommand implements IResourceCommand {
    schema: string = SCHEMAS.SAAS_TECHNICAL_CONFIGURATION;
    execute(resource: any): void {
        console.log("TECHNICAL CONFIGURATION:");
        console.log("\tLANDING PAGE URL:", resource.landingPageUrl);
        console.log("\tCONNECTION WEBHOOK:", resource.connectionWebhook);
        console.log("\tAZURE AD TENANT ID:", resource.azureAdTenantId);
        console.log("\tAZURE AD APP ID:", resource.azureAdAppId);
    }
}

// Product Ingestion Schema Commands
export class ListingAssetCommand implements IResourceCommand {
    schema: string = SCHEMAS.LISTING_ASSET;
    execute(resource: any): void {
        console.log(this.schema);
    }
}

export class ListingCommand implements IResourceCommand {
    schema: string = SCHEMAS.LISTING;
    execute(resource: any): void {
        console.log(this.schema);
    }
}

export class PropertyCommand implements IResourceCommand {
    schema: string = SCHEMAS.PROPERTY;
    execute(resource: any): void {
        console.log(this.schema);
    }
}

// Commercial Marketplace Schema Commands
export class CommercialMarketplaceSetupCommand implements IResourceCommand {
    schema: string = SCHEMAS.COMMERCIAL_MARKETPLACE_SETUP;
    execute(resource: any): void {
        console.log(this.schema);
    }
}

export class CustomerLeadsCommand implements IResourceCommand {
    schema: string = SCHEMAS.CUSTOMER_LEADS;
    execute(resource: any): void {
        console.log(this.schema);
    }
}

export class Microsoft365IntegrationCommand implements IResourceCommand {
    schema: string = SCHEMAS.MICROSOFT365_INTEGRATION;
    execute(resource: any): void {
        console.log(this.schema);
    }
}

export class ProductCommand implements IResourceCommand {
    schema: string = SCHEMAS.PRODUCT;
    execute(resource: any): void {
        console.log("PRODUCT:", resource.alias);
    }
}

export class ResellerCommand implements IResourceCommand {
    schema: string = SCHEMAS.RESELLER;
    execute(resource: any): void {
        console.log(this.schema);
    }
}

export class SubmissionCommand implements IResourceCommand {
    schema: string = SCHEMAS.SUBMISSION;
    execute(resource: any): void {
        console.log(this.schema);
    }
}

// Price and Availability Schema Commands
export class PriceAvailabilityCustomMeterCommand implements IResourceCommand {
    schema: string = SCHEMAS.PRICE_AVAILABILITY_CUSTOM_METER;
    execute(resource: any): void {
        console.log(this.schema);
    }
}

export class PriceAvailabilityOfferCommand implements IResourceCommand {
    schema: string = SCHEMAS.PRICE_AVAILABILITY_OFFER;
    execute(resource: any): void {
        console.log(this.schema);
    }
}

export class PriceAvailabilityPlanCommand implements IResourceCommand {
    schema: string = SCHEMAS.PRICE_AVAILABILITY_PLAN;
    execute(resource: any): void {
        console.log(this.schema);
    }
}