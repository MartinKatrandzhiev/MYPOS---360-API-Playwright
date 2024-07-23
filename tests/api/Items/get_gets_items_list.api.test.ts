// COVERAGE_TAG: GET /api/Items

import { components, paths } from "../../../api/controllers/types";

import {
  test,
  describe,
  expect,
  beforeEach,
} from "../../../api/fixtures/fixtures";

describe("Items - /api/Items", () => {
  beforeEach(async ({}) => {});

  test("Should make successful 200 GET /api/Items request gets items list", async ({
    itemsController,
    env,
  }) => {
    const headers: paths["/api/Items"]["get"]["parameters"]["header"] = {
      "Api-Key": `${env.API_KEY}`,
      "Api-Secret": `${env.API_SECRET}`,
      "Login-Id": `${env.LOGIN_ID}`,
      "Wallet-Id": `${env.WALLET_ID}`,
      // Tid: `${env.TID}`,
    };

    const response = await itemsController.getApiItemsGetsItemsList(
      1,
      1,
      undefined,
      undefined,
      undefined,
      undefined,
      "Banana",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      true,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      headers
    );

    const responseBody = await response.json();

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
