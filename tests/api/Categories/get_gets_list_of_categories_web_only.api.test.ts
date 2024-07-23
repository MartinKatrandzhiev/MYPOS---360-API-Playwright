// COVERAGE_TAG: GET /api/Categories/web

import { components, paths } from "../../../api/controllers/types";

import {
  test,
  describe,
  expect,
  beforeEach,
} from "../../../api/fixtures/fixtures";

describe("Items - /api/Categories", () => {
  beforeEach(async ({}) => {});

  test("Should make successful 200 GET /api/Categories/web request gets categories list", async ({
    categoriesController,
    env,
    api_version,
  }) => {
    const id: number = 2610;
    const headers: paths["/api/Categories/web"]["get"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        // "Login-Id": `${env.LOGIN_ID}`,
        "Wallet-Id": `${env.WALLET_ID}`,
        // Tid: `${env.TID}`,
      };

    const query: paths["/api/Categories/web"]["get"]["parameters"]["query"] = {
      //   outlet_id: undefined,
      //   platform_id: undefined,
      //   platform_type: undefined,
      //   risk_status: undefined,
      //   items_in_stock: undefined,
      //   has_visible_items: undefined,
      //   item_types: undefined,
      //   bundle_item_types: undefined,
      //   with_empty_categories: undefined,
      max_products_per_category: 1,
      "api-version": api_version,
    };

    const response =
      await categoriesController.getApiCategoriesGetsListOfCategoriesWebOnly(
        // category,
        query,
        headers
      );

    const responseBody = await response.json();
    console.log(responseBody);

    await expect(await response.status()).toBe(200);
    await expect(await responseBody).toMatchObject([
      {
        discount: null,
        discount_id: null,
        guid: "06e4e3ef-746c-4b37-b34b-1be3982f32d2",
        id: 2610,
        image_guid: null,
        is_deleted: false,
        items: [],
        items_count: 0,
        languages: [],
        login_id: 40817118066,
        multiple_languages: false,
        name: "electric_apricot_bobcat_test_automation_Wed Jun 26 2024",
        parent_category_id: null,
        tid: null,
        wallet_id: 499977,
      },
      {
        discount: null,
        discount_id: null,
        guid: "4f39eb94-aad6-4e36-9404-f432db8543c6",
        id: 2611,
        image_guid: null,
        is_deleted: false,
        items: [],
        items_count: 0,
        languages: [],
        login_id: 40817118066,
        multiple_languages: false,
        name: "tricky_amaranth_aardvark_test_automation_Wed Jun 26 2024",
        parent_category_id: 2610,
        tid: null,
        wallet_id: 499977,
      },
      {
        discount: null,
        discount_id: null,
        guid: "0f37a1a2-8a55-4bee-80ae-0efef99d36b9",
        id: 2613,
        image_guid: null,
        is_deleted: false,
        items: [],
        items_count: 0,
        languages: [],
        login_id: 40817118066,
        multiple_languages: false,
        name: "frantic_scarlet_cricket_test_automation_Wed Jun 26 2024",
        parent_category_id: 2610,
        tid: null,
        wallet_id: 499977,
      },
      {
        discount: null,
        discount_id: null,
        guid: "3d47d589-08a6-40b4-ac48-3faafbde68dd",
        id: 2614,
        image_guid: null,
        is_deleted: false,
        items: [],
        items_count: 0,
        languages: [],
        login_id: 40817118066,
        multiple_languages: false,
        name: "melted_green_skunk_test_automation_Wed Jun 26 2024",
        parent_category_id: 2610,
        tid: null,
        wallet_id: 499977,
      },
    ]);
  });
});
