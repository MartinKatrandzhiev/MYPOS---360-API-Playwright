import { request, APIResponse } from "@playwright/test";
import Env from "../../../utils/env";
import { components, paths } from "../types";

export default class ItemsController {
  private env = new Env();

  private request = request.newContext({
    baseURL: `${this.env.API_URL}`,
  });

  async postApiItemsCreateNew(
    CreateItemCommand: components["schemas"]["CreateItemCommand"],
    headers: paths["/api/Items"]["post"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).post(`/api/Items${this.env.API_VERSION}`, {
      data: CreateItemCommand,
      headers: headers,
    });
    return response;
  }

  async getApiItemsGetsItemsList(
    page_number?: paths["/api/Items"]["get"]["parameters"]["query"]["page_number"],
    page_size?: paths["/api/Items"]["get"]["parameters"]["query"]["page_size"],
    outlet_id?: paths["/api/Items"]["get"]["parameters"]["query"]["outlet_id"],
    category_guid?: paths["/api/Items"]["get"]["parameters"]["query"]["category_guid"],
    category_id?: paths["/api/Items"]["get"]["parameters"]["query"]["category_id"],
    discount_id?: paths["/api/Items"]["get"]["parameters"]["query"]["discount_id"],
    name?: paths["/api/Items"]["get"]["parameters"]["query"]["name"],
    category_name?: paths["/api/Items"]["get"]["parameters"]["query"]["category_name"],
    unit_type?: paths["/api/Items"]["get"]["parameters"]["query"]["unit_type"],
    date_from?: paths["/api/Items"]["get"]["parameters"]["query"]["date_from"],
    date_to?: paths["/api/Items"]["get"]["parameters"]["query"]["date_to"],
    platform_id?: paths["/api/Items"]["get"]["parameters"]["query"]["platform_id"],
    platform_type?: paths["/api/Items"]["get"]["parameters"]["query"]["platform_type"],
    language?: paths["/api/Items"]["get"]["parameters"]["query"]["language"],
    is_in_stock?: paths["/api/Items"]["get"]["parameters"]["query"]["is_in_stock"],
    risk_status?: paths["/api/Items"]["get"]["parameters"]["query"]["risk_status"],
    is_checked?: paths["/api/Items"]["get"]["parameters"]["query"]["is_checked"],
    last_edit_from?: paths["/api/Items"]["get"]["parameters"]["query"]["last_edit_from"],
    last_edit_to?: paths["/api/Items"]["get"]["parameters"]["query"]["last_edit_to"],
    type?: paths["/api/Items"]["get"]["parameters"]["query"]["type"],
    headers?: paths["/api/Items"]["get"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).get(
      `/api/Items${this.env.API_VERSION}&page_number=${page_number}&page_size=${page_size}
      &outlet_id=${outlet_id}
      &category_guid=${category_guid}
      &category_id=${category_id}
       &discount_id=${discount_id}
       &name=${name}
       &category_name=${category_name}
       &unit_type=${unit_type}
       &date_from=${date_from}
       &date_to=${date_to}
       &platform_id=${platform_id}
       &platform_type=${platform_type}
       &language=${language}
       &is_in_stock=${is_in_stock}
       &risk_status=${risk_status}
       &is_checked=${is_checked}
       &last_edit_from=${last_edit_from}
       &last_edit_to=${last_edit_to}
       &type=${type}
      `,
      {
        headers: headers,
      }
    );
    return response;
  }

  async getApiItemsGetsItemsListForExport(
    page_number?: paths["/api/Items/export"]["get"]["parameters"]["query"]["page_number"],
    page_size?: paths["/api/Items/export"]["get"]["parameters"]["query"]["page_size"],
    category_id?: paths["/api/Items/export"]["get"]["parameters"]["query"]["category_id"],
    discount_id?: paths["/api/Items/export"]["get"]["parameters"]["query"]["discount_id"],
    keywords?: paths["/api/Items/export"]["get"]["parameters"]["query"]["keywords"],
    outlet_id?: paths["/api/Items/export"]["get"]["parameters"]["query"]["outlet_id"],
    type?: paths["/api/Items/export"]["get"]["parameters"]["query"]["type"],
    headers?: paths["/api/Items/export"]["get"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).get(
      `/api/Items${this.env.API_VERSION}&page_number=${page_number}
      &page_size=${page_size}
      &category_id=${category_id}
      &discount_id=${discount_id}
       &keywords=${keywords}
       &outlet_id=${outlet_id}
       &type=${type}
      `,
      {
        headers: headers,
      }
    );
    return response;
  }

  async getApiItemsGetsLinkedUpsellsAndPromocodesToItem(
    id?: paths["/api/Items/{id}/linked-upsells-and-promocodes"]["get"]["parameters"]["path"]["id"],
    headers?: paths["/api/Items/{id}/linked-upsells-and-promocodes"]["get"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).get(
      `/api/Items/${id}/linked-upsells-and-promocodes${this.env.API_VERSION}`,
      {
        headers: headers,
      }
    );
    return response;
  }

  async getApiItemsGetsLinkedUpsellsAndPromocodesAndBundlesToItem(
    id?: paths["/api/Items/{id}/linked/objects"]["get"]["parameters"]["path"]["id"],
    headers?: paths["/api/Items/{id}/linked/objects"]["get"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).get(`/api/Items/${id}/linked/objects${this.env.API_VERSION}`, {
      headers: headers,
    });
    return response;
  }

  async getApiItemsGetsItemsFilteredByParentCategory(
    order_by?: paths["/api/Items/by-parrent-category"]["get"]["parameters"]["query"]["order_by"],
    page_number?: paths["/api/Items/by-parrent-category"]["get"]["parameters"]["query"]["page_number"],
    page_size?: paths["/api/Items/by-parrent-category"]["get"]["parameters"]["query"]["page_size"],
    category_id?: paths["/api/Items/by-parrent-category"]["get"]["parameters"]["query"]["category_id"],
    discount_id?: paths["/api/Items/by-parrent-category"]["get"]["parameters"]["query"]["discount_id"],
    currency?: paths["/api/Items/by-parrent-category"]["get"]["parameters"]["query"]["currency"],
    platform_id?: paths["/api/Items/by-parrent-category"]["get"]["parameters"]["query"]["platform_id"],
    platform_type?: paths["/api/Items/by-parrent-category"]["get"]["parameters"]["query"]["platform_type"],
    outlet_id?: paths["/api/Items/by-parrent-category"]["get"]["parameters"]["query"]["outlet_id"],
    type?: paths["/api/Items/by-parrent-category"]["get"]["parameters"]["query"]["type"],
    headers?: paths["/api/Items/by-parrent-category"]["get"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).get(
      `/api/Items/by-parrent-category${this.env.API_VERSION}&order_by=${order_by}
      &page_number=${page_number}
      &page_size=${page_size}
      &category_id=${category_id}
      &discount_id=${discount_id}
      &currency=${currency}
      &platform_id=${platform_id}
      &platform_type=${platform_type}
      &outlet_id=${outlet_id}
      &type=${type}`,
      {
        headers: headers,
      }
    );
    return response;
  }

  async getApiItemsGetsItemsForAccount(
    page_number?: paths["/api/Items/account"]["get"]["parameters"]["query"]["page_number"],
    page_size?: paths["/api/Items/account"]["get"]["parameters"]["query"]["page_size"],
    category_id?: paths["/api/Items/account"]["get"]["parameters"]["query"]["category_id"],
    discount_id?: paths["/api/Items/account"]["get"]["parameters"]["query"]["discount_id"],
    platform_id?: paths["/api/Items/account"]["get"]["parameters"]["query"]["platform_id"],
    platform_type?: paths["/api/Items/account"]["get"]["parameters"]["query"]["platform_type"],
    types?: paths["/api/Items/account"]["get"]["parameters"]["query"]["types"],
    keywords?: paths["/api/Items/account"]["get"]["parameters"]["query"]["keywords"],
    keywords_language?: paths["/api/Items/account"]["get"]["parameters"]["query"]["keywords_language"],
    headers?: paths["/api/Items/account"]["get"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).get(
      `/api/Items/by-parrent-category${this.env.API_VERSION}&page_number=${page_number}
      &page_size=${page_size}
      &category_id=${category_id}
      &discount_id=${discount_id}
      &platform_id=${platform_id}
      &platform_type=${platform_type}
      &types=${types}
      &keywords=${keywords}
      &keywords_language=${keywords_language}`,
      {
        headers: headers,
      }
    );
    return response;
  }

  async getApiItemsGetsItemsCountByParentCategory(
    query?: paths["/api/Items/count-by-parrent-category"]["get"]["parameters"]["query"],
    headers?: paths["/api/Items/count-by-parrent-category"]["get"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).get(`/api/Items/count-by-parrent-category`, {
      headers: headers,
      params: query,
    });
    return response;
  }
}
