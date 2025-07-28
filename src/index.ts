import { AuthManager } from './ApiServices/AuthManager';
import { OffersManager } from './ApiServices/OffersManager';
import { IResourceCommand } from './ApiServices/ResourceHandlers/IResourceCommand';
import { ResourceManager } from './ApiServices/ResourceHandlers/ResourceManager';

// Example usage of the AuthManager class
async function getOffers() {
    try {
        const offersManager = new OffersManager();
        const offers = await offersManager.getAllOffers();
        const resourceManager = new ResourceManager();

        // Iterate over the SaaS offers and get the value of each offer
        for (const offer of offers) {
            // NOTE: Retrieving offerData for Managed Application offers throws error
            // sticking to SaaS offers to avoid errors
            if(offer.type == 'softwareAsAService'){
                console.log('--------------------------------');
                const offerData = await offersManager.getOfferDetails(offer.id);
                for (const resource of offerData.resources) {
                    const resourceHandler: IResourceCommand = resourceManager.getResourceHandler(resource['$schema']);
                    if (resourceHandler) {
                        resourceHandler.execute(resource);
                    }
                }
            }
        }
    } catch (error) {
        console.error('[getOffers] Error:', error);
    }
}

async function authentivateAndGetToken() {
    const authManager = new AuthManager();
    // authToken = await authManager.authenticate();

}

// Run the main function
getOffers()
    .then(() => {
        console.log('Done');
    });

