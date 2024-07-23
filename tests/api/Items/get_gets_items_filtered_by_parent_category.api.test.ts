// COVERAGE_TAG: GET /api/Items/by-parrent-category

import { components, paths } from "../../../api/controllers/types";

import {
  test,
  describe,
  expect,
  beforeEach,
} from "../../../api/fixtures/fixtures";

describe("Items - /api/Items/by-parrent-category", () => {
  beforeEach(async ({}) => {});

  test("Should make successful 200 GET /api/Items/by-parrent-category request gets items filtered by parent category", async ({
    itemsController,
    env,
  }) => {
    const headers: paths["/api/Items/by-parrent-category"]["get"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        "Login-Id": `${env.LOGIN_ID}`,
        "Wallet-Id": `${env.WALLET_ID}`,
        // Tid: `${env.TID}`,
      };

    const response =
      await itemsController.getApiItemsGetsItemsFilteredByParentCategory(
        "None",
        1,
        1,
        0,
        0,
        "bgn",
        1,
        1,
        1,
        1,
        headers
      );

    const responseBody = await response.json();

    await expect(await response.status()).toBe(200);
    await expect(await responseBody).toMatchObject({
      hasNextPage: false,
      hasPreviousPage: false,
      items: [],
      pageIndex: 1,
      pageSize: 1,
      totalCount: 0,
      totalPages: 0,
    });
  });
});
