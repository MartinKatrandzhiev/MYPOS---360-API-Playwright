// COVERAGE_TAG: GET /api/Categories

import { components, paths } from "../../../api/controllers/types";

import {
  test,
  describe,
  expect,
  beforeEach,
} from "../../../api/fixtures/fixtures";

describe("Items - /api/Categories", () => {
  beforeEach(async ({}) => {});

  test("Should make successful 200 GET /api/Categories request gets categories list", async ({
    categoriesController,
    env,
    api_version,
  }) => {
    const headers: paths["/api/Categories"]["get"]["parameters"]["header"] = {
      "Api-Key": `${env.API_KEY}`,
      "Api-Secret": `${env.API_SECRET}`,
      "Login-Id": `${env.LOGIN_ID}`,
      "Wallet-Id": `${env.WALLET_ID}`,
      // Tid: `${env.TID}`,
    };

    const query: paths["/api/Categories"]["get"]["parameters"]["query"] = {
      page_number: 1,
      page_size: 1,
      remove_empty_categories: true,
      platform_id: 0,
      "api-version": api_version,
    };

    const category: components["schemas"]["GetCategoriesListCategoryDtoPaginatedList"] =
      {
        items: null,
        pageIndex: 1,
        totalPages: 1,
        pageSize: 1,
        hasPreviousPage: false,
        hasNextPage: false,
      };

    const response =
      await categoriesController.getApiCategoriesGetsCategoriesList(
        category,
        query,
        headers
      );

    const responseBody = await response.json();
    console.log(responseBody);

    await expect(await response.status()).toBe(200);
    await expect(await responseBody).toMatchObject({
      items: [],
      pageIndex: 1,
      totalPages: 0,
      totalCount: 0,
      pageSize: 1,
      hasPreviousPage: false,
      hasNextPage: false,
    });
  });
});
