import axios, { AxiosResponse } from 'axios';
import { Config } from '../util/Config';
import { AuthManager } from './AuthManager';

/**
 * Interface for a product offer
 */
export interface ProductOfferResponse {
  id: string;
  alias: string;
  type: string;
  identity: Object;
}

/**
 * Class to manage product offers and interact with the Partner Center API
 */
export class OffersManager {
  private authManager: AuthManager;

  constructor(authManager?: AuthManager) {
    this.authManager = authManager || new AuthManager();
  }

  /**
   * Retrieves all product offers from the Partner Center API
   * @returns Promise<ProductOffer[]> - Array of all product offers
   */
  public async getAllOffers(): Promise<ProductOfferResponse[]> {
    try {
      // Ensure we have a valid access token
      const accessToken = await this.authManager.authenticate();
      
      const allOffers: ProductOfferResponse[] = [];
      let nextLink: string | undefined = `${Config.PARTNER_CENTER_API_URL}/product?$maxpagesize=5&$version=2022-03-01-preview5`;
      let pageCount = 0;

      const headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      };

      while (nextLink) {
        const response: AxiosResponse<any> = await axios.get(nextLink, { headers });
        allOffers.push(...response.data.value);
        nextLink = response.data['@nextLink'];
        pageCount++;
      }

      return allOffers;

    } catch (error) {
      console.error('Failed to retrieve offers:', error);
      throw new Error('Failed to retrieve product offers from the API');
    }
  }

  /**
   * Retrieves a specific offer by ID
   * @param offerId - The ID of the offer to retrieve
   * @returns Promise<ProductOffer> - The specific product offer
   */
  public async getOfferById(offerDurableId: string): Promise<ProductOfferResponse> {
    try {
      const accessToken = await this.authManager.authenticate();
      const headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      };
      
      const response: AxiosResponse<any> = await axios.get(
        `${Config.PARTNER_CENTER_API_URL}/${offerDurableId}`, 
        { headers }
      );

      console.log(response.data);

      return response.data;

    } catch (error) {
      console.error(`Failed to retrieve offer ${offerDurableId}:`, error);
      throw new Error(`Failed to retrieve offer with ID: ${offerDurableId}`);
    }
  }

  public async getOfferDetails(offerDurableId: string): Promise<any> {
    try {
      const accessToken = await this.authManager.authenticate();
      const headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      };

      const response: AxiosResponse<any> = await axios.get(
        `${Config.PARTNER_CENTER_API_URL}/resource-tree/${offerDurableId}?$version=2022-03-01-preview5`,
        { headers }
      );

      return response.data;

    } catch (error: any) {
      console.error(`Failed to retrieve data for offer ${offerDurableId}`, error.message);
      throw new Error(`Failed to retrieve plans for offer with ID: ${offerDurableId}`);
    }
  }
} 