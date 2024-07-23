// COVERAGE_TAG: GET /api/Items/{id}/linked-upsells-and-promocodes

import { components, paths } from "../../../api/controllers/types";

import {
  test,
  describe,
  expect,
  beforeEach,
} from "../../../api/fixtures/fixtures";

let id: number;

describe("Items - /api/Items/{id}/linked-upsells-and-promocodes", () => {
  beforeEach(async ({}) => {});

  test("Should make successful 200 GET /api/Items/{id}/linked-upsells-and-promocodes request gets linked upsells and promocodes to item", async ({
    itemsController,
    env,
    existing_id,
  }) => {
    id = Number(existing_id);

    const headers: paths["/api/Items/{id}/linked-upsells-and-promocodes"]["get"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        "Login-Id": `${env.LOGIN_ID}`,
        "Wallet-Id": `${env.WALLET_ID}`,
        // Tid: `${env.TID}`,
      };

    const response =
      await itemsController.getApiItemsGetsLinkedUpsellsAndPromocodesToItem(
        id,
        headers
      );

    const responseBody = await response.json();

    await expect(await response.status()).toBe(200);
    await expect(await responseBody).toMatchObject({
      linked_promocodes: [],
      linked_upsells: [],
      linked_bundles: null,
    });
  });
});
