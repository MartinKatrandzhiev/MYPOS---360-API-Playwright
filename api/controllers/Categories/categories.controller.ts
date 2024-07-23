import { request, APIResponse } from "@playwright/test";
import Env from "../../../utils/env";
import { components, paths } from "../types";

export default class CategoriesController {
  private env = new Env();

  private request = request.newContext({
    baseURL: `${this.env.API_URL}`,
  });

  async postApiCategoriesCreatesANewCategory(
    CreateCategoryCommand: components["schemas"]["CreateCategoryCommand"],
    query: paths["/api/Categories"]["post"]["parameters"]["query"],
    headers: paths["/api/Categories"]["post"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).post(`/api/Categories`, {
      data: CreateCategoryCommand,
      headers: headers,
      params: query,
    });
    return response;
  }

  async getApiCategoriesGetsCategoriesList(
    GetCategoriesListCategoryDtoPaginatedList: components["schemas"]["GetCategoriesListCategoryDtoPaginatedList"],
    query: paths["/api/Categories"]["get"]["parameters"]["query"],
    headers: paths["/api/Categories"]["get"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).get(`/api/Categories`, {
      data: GetCategoriesListCategoryDtoPaginatedList,
      headers: headers,
      params: query,
    });
    return response;
  }

  async getApiCategoriesGetsListOfCategoriesWebOnly(
    query: paths["/api/Categories/web"]["get"]["parameters"]["query"],
    headers: paths["/api/Categories/web"]["get"]["parameters"]["header"]
  ): Promise<APIResponse> {
    const response = await (
      await this.request
    ).get(`/api/Categories/web`, {
      headers: headers,
      params: query,
    });
    return response;
  }
}
