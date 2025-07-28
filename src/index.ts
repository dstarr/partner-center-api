import { Config } from './util/Config';
import { AuthManager } from './ApiServices/AuthManager';
import { OffersManager } from './ApiServices/OffersManager';

// console.debug('API URL:', Config.PARTNER_CENTER_API_URL);
// console.debug('Client ID:', Config.CLIENT_ID);
// console.debug('Environment:', Config.NODE_ENV);
// console.debug('Login URL:', Config.LOGIN_URL);
// console.debug('Scope:', Config.SCOPE);
// console.debug('Tenant ID:', Config.TENANT_ID);

let authToken: string;


// Example usage of the AuthManager class
async function getOffers() {
    try {
        const offersManager = new OffersManager();
        const offers = await offersManager.getAllOffers();

        // Iterate over the SaaS offers and get the value of each offer
        for (const offer of offers) {
            // NOTE: Retrieving offerData for Managed Application offers throws error
            // sticking to SaaS offers to avoid errors
            if(offer.type == 'softwareAsAService'){
                console.log('ALIAS', offer.alias);
                const offerData = await offersManager.getResourcesByOfferId(offer.id);
                for (const resource of offerData.resources) {
                    if(resource['$schema'] == 'https://schema.mp.microsoft.com/schema/plan/2022-03-01-preview3'){
                        console.log("\tPLAN:",resource.alias);
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
    authToken = await authManager.authenticate();

}

// Run the main function
authentivateAndGetToken()
    .then(() => {
        getOffers();
    });

