import SCHEMAS from "../../util/pcApiSchemas";
import { IResourceCommand } from "./IResourceCommand";

export class PlanCommand implements IResourceCommand {
    schema: string = SCHEMAS.PLAN;
    execute(resource: any): void {
        console.log(`\t${this.schema}`);
    }
}

export class PlanListingCommand implements IResourceCommand {
    schema: string = SCHEMAS.PLAN_LISTING;
    execute(resource: any): void {
        console.log(`PLAN: ${resource.name} - ${resource.description}`);
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
        console.log(`\t${this.schema}`);
    }
}

export class ListingCommand implements IResourceCommand {
    schema: string = SCHEMAS.LISTING;
    execute(resource: any): void {
        console.log("TITLE: ", resource.title);
        console.log("DESCRIPTION: ", resource.description);
        console.log("SEARCH RESULT SUMMARY: ", resource.searchResultSummary);
        console.log("GETTING STARTED INSTRUCTIONS: ", resource.gettingStartedInstructions);
        if (resource.searchKeywords && Array.isArray(resource.searchKeywords)) {
            console.log("Search Keywords:");
            resource.searchKeywords.forEach((keyword: string, index: number) => {
                console.log(`\t-${keyword}`);
            });
        }
        console.log("PRIVACY POLICY LINK: ", resource.privacyPolicyLink);
        console.log("SUPPORT CONTACT: ", resource.supportContact.name);
        console.log("ENGINEERING CONTACT: ", resource.engineeringContact.name);
        console.log("LANGUAGE ID: ", resource.languageId);
    }
}

export class PropertyCommand implements IResourceCommand {
    schema: string = SCHEMAS.PROPERTY;
    execute(resource: any): void {
        console.log(`\t${this.schema}`);
        if (resource.categories) {
            console.log("CATEGORIES:");
            Object.entries(resource.categories).forEach(([category, elements]) => {
                console.log(`\t${category}:`);
                if (Array.isArray(elements)) {
                    elements.forEach(element => {
                        console.log(`\t- ${element}`);
                    });
                }
            });
        }
    }
}

// Commercial Marketplace Schema Commands
export class CommercialMarketplaceSetupCommand implements IResourceCommand {
    schema: string = SCHEMAS.COMMERCIAL_MARKETPLACE_SETUP;
    execute(resource: any): void {
        console.log(`\t${this.schema}`);
    }
}

export class CustomerLeadsCommand implements IResourceCommand {
    schema: string = SCHEMAS.CUSTOMER_LEADS;
    execute(resource: any): void {
        console.log(`\t${this.schema}`);
        // console.log("CUSTOMER LEADS: ", JSON.stringify(resource.customerLeads));
    }
}

export class Microsoft365IntegrationCommand implements IResourceCommand {
    schema: string = SCHEMAS.MICROSOFT365_INTEGRATION;
    execute(resource: any): void {
        console.log(`\t${this.schema}`);
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
        console.log(`\t${this.schema}`);
    }
}

export class SubmissionCommand implements IResourceCommand {
    schema: string = SCHEMAS.SUBMISSION;
    execute(resource: any): void {
        // console.log(`\t${this.schema}`);
        console.log(`Submission: ${resource.target.targetType}`);
    }
}

interface ICustomMeter {
    displayName: string;
    unitOfMeasure: string;
}

// Price and Availability Schema Commands
export class PriceAvailabilityCustomMeterCommand implements IResourceCommand {
    schema: string = SCHEMAS.PRICE_AVAILABILITY_CUSTOM_METER;
    execute(resource: any): void {
        console.log("CUSTOM METERS:");
        // console.log(`\t${JSON.stringify(resource)}`);
        Object.entries(resource.customMeters).forEach(([key, value]) => {
            const meter = value as ICustomMeter;
            console.log(`\t${key}: ${meter.displayName} - ${meter.unitOfMeasure}`);
        });
    }
}

export class PriceAvailabilityOfferCommand implements IResourceCommand {
    schema: string = SCHEMAS.PRICE_AVAILABILITY_OFFER;
    execute(resource: any): void {
        console.log(`\t${this.schema}`);
    }
}

export class PriceAvailabilityPlanCommand implements IResourceCommand {
    schema: string = SCHEMAS.PRICE_AVAILABILITY_PLAN;
    execute(resource: any): void {
        console.log(`\t${this.schema}`);
    }
}