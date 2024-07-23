// COVERAGE_TAG: GET /api/Items/account

import { components, paths } from "../../../api/controllers/types";

import {
  test,
  describe,
  expect,
  beforeEach,
} from "../../../api/fixtures/fixtures";

describe("Items - /api/Items/account", () => {
  beforeEach(async ({}) => {});

  test("Should make successful 200 GET /api/Items/account request gets items for account", async ({
    itemsController,
    env,
  }) => {
    const headers: paths["/api/Items/account"]["get"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        "Login-Id": `${env.LOGIN_ID}`,
        "Wallet-Id": `${env.WALLET_ID}`,
        // Tid: `${env.TID}`,
      };

    const response = await itemsController.getApiItemsGetsItemsForAccount(
      1,
      2,
      2495,
      1,
      1,
      1,
      "1, 2",
      "test",
      "bgn",
      headers
    );

    const responseBody = await response.json();

    await expect(await response.status()).toBe(200);
    await expect(await responseBody).toMatchObject({
      hasNextPage: false,
      hasPreviousPage: false,
      items: [],
      pageIndex: 1,
      pageSize: 2,
      totalCount: 0,
      totalPages: 0,
    });
  });
});
