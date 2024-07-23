// COVERAGE_TAG: GET /api/Items/export

import { components, paths } from "../../../api/controllers/types";

import {
  test,
  describe,
  expect,
  beforeEach,
} from "../../../api/fixtures/fixtures";

let id: number;

describe("Items - /api/Items/export", () => {
  beforeEach(async ({}) => {});

  test("Should make successful 200 GET /api/Items/export request gets items list for export", async ({
    itemsController,
    env,
    existing_id,
  }) => {
    id = Number(existing_id);

    const headers: paths["/api/Items/export"]["get"]["parameters"]["header"] = {
      "Api-Key": `${env.API_KEY}`,
      "Api-Secret": `${env.API_SECRET}`,
      "Login-Id": `${env.LOGIN_ID}`,
      "Wallet-Id": `${env.WALLET_ID}`,
      // Tid: `${env.TID}`,
    };

    const response = await itemsController.getApiItemsGetsItemsListForExport(
      1,
      2,
      1,
      2,
      "banana",
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
      pageSize: 2,
      hasPreviousPage: false,
      hasNextPage: false,
    });
  });
});
