import { IResourceCommand } from "./IResourceCommand";
import { ListingAssetCommand, ListingCommand, CommercialMarketplaceSetupCommand, CustomerLeadsCommand, Microsoft365IntegrationCommand, PlanCommand, PlanListingCommand, PropertyCommand, TechnicalConfigurationCommand, ProductCommand, ResellerCommand, SubmissionCommand, PriceAvailabilityCustomMeterCommand, PriceAvailabilityPlanCommand, PriceAvailabilityOfferCommand } from "./HandlerCommands";

export class ResourceManager {
    private resourceHandlers: IResourceCommand[] = [];

    constructor() {
        this.resourceHandlers.push(new CommercialMarketplaceSetupCommand());
        this.resourceHandlers.push(new CustomerLeadsCommand());
        this.resourceHandlers.push(new ListingAssetCommand());
        this.resourceHandlers.push(new ListingCommand());
        this.resourceHandlers.push(new Microsoft365IntegrationCommand());
        this.resourceHandlers.push(new PlanCommand());
        this.resourceHandlers.push(new PlanListingCommand());
        this.resourceHandlers.push(new PriceAvailabilityCustomMeterCommand());
        this.resourceHandlers.push(new PriceAvailabilityOfferCommand());
        this.resourceHandlers.push(new PriceAvailabilityPlanCommand());
        this.resourceHandlers.push(new ProductCommand());
        this.resourceHandlers.push(new PropertyCommand());
        this.resourceHandlers.push(new ResellerCommand());
        this.resourceHandlers.push(new SubmissionCommand());
        this.resourceHandlers.push(new TechnicalConfigurationCommand());
    }

    public getResourceHandler(schema: string): IResourceCommand {
        return this.resourceHandlers.find(handler => handler.schema === schema) as IResourceCommand;
    }
}