import { request, APIResponse } from "@playwright/test";
import Env from "../../../utils/env";
import { components, paths } from "../types";

export default class StoresController {
  private env = new Env();

  private request = request.newContext({
    baseURL: `${this.env.API_URL}`,
  });

  async postMyPos360StoresCreateStore(
    CreateStoreCommand: components["schemas"]["CreateStoreCommand"],
    CreateStoreHeaders: paths["/myPOS360/Stores/create_store"]["post"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).post(`/myPOS360/Stores/create_store${this.env.API_VERSION}`, {
      data: CreateStoreCommand,
      headers: CreateStoreHeaders,
    });
    return response;
  }

  //TODO: Fix the object
  // async postMyPos360StoresCreateSettings(
  //   CreateStoreSettingsCommand: components["schemas"]["CreateStoreSettingsCommand"],
  //   CreateStoreSettingsHeaders: paths["/myPOS360/Stores/create_settings"]["post"]["parameters"]["header"]
  // ): Promise<APIResponse> {
  //   const response = await (
  //     await this.request
  //   ).post(`/myPOS360/Stores/create_settings${this.env.API_VERSION}`, {
  //     data: CreateStoreSettingsCommand,
  //     headers: CreateStoreSettingsHeaders,
  //   });
  //   return response;
  // }

  async postMyPos360CreateDesignSettings(
    CreateStoreDesignSettingsCommand: components["schemas"]["CreateStoreDesignSettingsCommand"],
    CreateStoreDesignSettingsHeaders: paths["/myPOS360/Stores/create_design_settings"]["post"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).post(`/myPOS360/Stores/create_design_settings${this.env.API_VERSION}`, {
      data: CreateStoreDesignSettingsCommand,
      headers: CreateStoreDesignSettingsHeaders,
    });
    return response;
  }

  async postMyPos360StoresGetStoresDesignTemplates(
    GetStoresDesignTemplatesPostQuery: components["schemas"]["GetStoresDesignTemplatesPostQuery"],
    GetStoresDesignTemplatesPostHeaders: paths["/myPOS360/Stores/get_stores_design_templates"]["post"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).post(
      `/myPOS360/Stores/get_stores_design_templates${this.env.API_VERSION}`,
      {
        data: GetStoresDesignTemplatesPostQuery,
        headers: GetStoresDesignTemplatesPostHeaders,
      }
    );
    return response;
  }

  async postMyPos360StoresGetStorePagesSelectedColumns(
    GetStorePagesSelectedColumnsPostQuery: components["schemas"]["GetStorePagesSelectedColumnsPostQuery"],
    GetStorePagesSelectedColumnsPostHeaders: paths["/myPOS360/Stores/get_store_pages_selected_columns"]["post"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).post(
      `/myPOS360/Stores/get_store_pages_selected_columns${this.env.API_VERSION}`,
      {
        data: GetStorePagesSelectedColumnsPostQuery,
        headers: GetStorePagesSelectedColumnsPostHeaders,
      }
    );
    return response;
  }

  async postMyPos360StoresGetStoreTypes(
    GetStoreTypesByIdsPostQuery: components["schemas"]["GetStoreTypesByIdsPostQuery"],
    GetStoreTypesByIdsPostHeaders: paths["/myPOS360/Stores/get_store_types"]["post"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).post(`/myPOS360/Stores/get_store_types${this.env.API_VERSION}`, {
      data: GetStoreTypesByIdsPostQuery,
      headers: GetStoreTypesByIdsPostHeaders,
    });
    return response;
  }

  async putMyPos360StoresUpdateSettings(
    UpdateStoreSettingsCommand: components["schemas"]["UpdateStoreSettingsCommand"],
    UpdateStoreSettingsHeaders: paths["/myPOS360/Stores/update_settings"]["put"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).put(`/myPOS360/Stores/update_settings${this.env.API_VERSION}`, {
      data: UpdateStoreSettingsCommand,
      headers: UpdateStoreSettingsHeaders,
    });
    return response;
  }

  async putMyPos360StoresUpdateDesignSettings(
    UpdateStoreDesignSettingsCommand: components["schemas"]["UpdateStoreDesignSettingsCommand"],
    UpdateStoreDesignSettingsHeaders: paths["/myPOS360/Stores/update_design_settings"]["put"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).put(`/myPOS360/Stores/update_design_settings${this.env.API_VERSION}`, {
      data: UpdateStoreDesignSettingsCommand,
      headers: UpdateStoreDesignSettingsHeaders,
    });
    return response;
  }

  async putMyPos360StoresNotificationSettings(
    UpdateStoreNotificationSettingsCommand: components["schemas"]["UpdateStoreNotificationSettingsCommand"],
    UpdateStoreNotificationSettingsHeaders: paths["/myPOS360/Stores/notification_settings"]["put"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).put(`/myPOS360/Stores/notification_settings${this.env.API_VERSION}`, {
      data: UpdateStoreNotificationSettingsCommand,
      headers: UpdateStoreNotificationSettingsHeaders,
    });
    return response;
  }

  async getMyPos360StoresStoreById(
    store_id: number,
    GetStoreDetailsStoreDtoHeaders: paths["/myPOS360/Stores/{store_id}"]["get"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).get(`/myPOS360/Stores/${store_id}${this.env.API_VERSION}`, {
      headers: GetStoreDetailsStoreDtoHeaders,
    });
    return response;
  }

  async getMyPos360StoresGetsIfStoreIsLinkedToEmailAutomationById(
    store_id: number,
    BoolResponseModelHeaders: paths["/myPOS360/Stores/is_linked_to_email_automations/{store_id}"]["get"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).get(
      `/myPOS360/Stores/is_linked_to_email_automations/${store_id}${this.env.API_VERSION}`,
      {
        headers: BoolResponseModelHeaders,
      }
    );
    return response;
  }

  async getMyPos360StoresLogoGuidsByWalletId(
    StoresGuidResponseDtoHeaders: paths["/myPOS360/Stores/logo_guids"]["get"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).get(`/myPOS360/Stores/logo_guids${this.env.API_VERSION}`, {
      headers: StoresGuidResponseDtoHeaders,
    });
    return response;
  }

  // async getMyPos360StoresGetsStoreIdsByWalletId(
  //   storeType: number,
  //   StoresGuidResponseDtoHeaders: paths["/myPOS360/Stores/store_ids"]["get"]["parameters"]["header"]
  // ): Promise<APIResponse> {
  //   const response = await (
  //     await this.request
  //   ).get(`/myPOS360/Stores/store_ids${storeType}${this.env.API_VERSION}`, {
  //     headers: StoresGuidResponseDtoHeaders,
  //   });
  //   return response;
  // }

  async getMyPos360StoresChecksIfUrlIsFree(
    url: string,
    BoolResponseModelHeaders: paths["/myPOS360/Stores/check_existing_url"]["get"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).get(
      `/myPOS360/Stores/check_existing_url${this.env.API_VERSION}&url=${url}`,
      {
        headers: BoolResponseModelHeaders,
      }
    );
    return response;
  }
}
