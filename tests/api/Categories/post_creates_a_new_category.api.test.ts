// COVERAGE_TAG: POST /api/Categories

import { components, paths } from "../../../api/controllers/types";

import {
  test,
  describe,
  expect,
  beforeEach,
} from "../../../api/fixtures/fixtures";

describe("Items - /api/Categories", () => {
  beforeEach(async ({}) => {});

  test("Should make successful 201 POST /api/Categories request creates a new category", async ({
    categoriesController,
    env,
    api_version,
    random_name,
  }) => {
    const name: string = random_name;
    const id: number = 2610;

    const headers: paths["/api/Categories"]["post"]["parameters"]["header"] = {
      "Api-Key": `${env.API_KEY}`,
      "Api-Secret": `${env.API_SECRET}`,
      "Login-Id": `${env.LOGIN_ID}`,
      "Wallet-Id": `${env.WALLET_ID}`,
      // Tid: `${env.TID}`,
    };

    const query: paths["/api/Categories"]["post"]["parameters"]["query"] = {
      "api-version": api_version,
    };

    const category = await categoryToCreate(
      name,
      id,
      null,
      false,
      null,
      null,
      1,
      "bgn",
      1
    );

    const response =
      await categoriesController.postApiCategoriesCreatesANewCategory(
        category,
        query,
        headers
      );

    const responseBody = await response.json();
    console.log(responseBody);

    await expect(await response.status()).toBe(201);
    await expect(await responseBody.name).toBe(name);
    await expect(await responseBody.parent_category_id).toBe(id);
  });
});

async function categoryToCreate(
  name: components["schemas"]["CreateCategoryCommand"]["name"],
  parent_category_id: components["schemas"]["CreateCategoryCommand"]["parent_category_id"],
  discount_id: components["schemas"]["CreateCategoryCommand"]["discount_id"],
  multiple_languages: components["schemas"]["CreateCategoryCommand"]["multiple_languages"],
  image_guid: components["schemas"]["CreateCategoryCommand"]["image_guid"],
  languages: components["schemas"]["CreateCategoryCommand"]["languages"],
  Original_Price: components["schemas"]["CreateCategoryCommand"]["Original_Price"],
  Currency: components["schemas"]["CreateCategoryCommand"]["Currency"],
  Unit_Type: components["schemas"]["CreateCategoryCommand"]["Unit_Type"]
): Promise<components["schemas"]["CreateCategoryCommand"]> {
  return {
    name,
    parent_category_id,
    discount_id,
    multiple_languages,
    image_guid,
    languages,
    Original_Price,
    Currency,
    Unit_Type,
  };
}
