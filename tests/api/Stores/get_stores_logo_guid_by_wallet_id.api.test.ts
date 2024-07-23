// COVERAGE_TAG: POST /myPOS360/Stores/is_linked_to_email_automations/{store_id}

import { components, paths } from "../../../api/controllers/types";

import {
  test,
  describe,
  expect,
  beforeEach,
} from "../../../api/fixtures/fixtures";

let id: number;
let storeId: number;
let logoGuid: number;

describe("Stores - /myPOS360/Stores/logo_guids", () => {
  beforeEach(async ({}) => {});

  test("Should make successful 200 GET /myPOS360/Stores/logo_guids request gets stores logo guid by wallet id", async ({
    storesController,
    env,
    store_id,
  }) => {
    id = Number(store_id);

    const headers: paths["/myPOS360/Stores/logo_guids"]["get"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        "Login-Id": `${env.LOGIN_ID}`,
        "Wallet-Id": `${env.WALLET_ID}`,
        // Tid: `${env.TID}`,
      };

    const response =
      await storesController.getMyPos360StoresLogoGuidsByWalletId(headers);

    const responseBody = await response.json();

    for (const body of responseBody) {
      if (body.store_id === id && body.logo_guid === null) {
        // console.log(
        //   `Object with store_id ${body.store_id} and logo_guid ${body.logo_guid} found.`
        // );
        storeId = body.store_id;
        logoGuid = body.logo_guid;
        break;
      }
    }

    await expect(await response.status()).toBe(200);

    await expect(await storeId).toBe(id);
    await expect(await logoGuid).toBe(null);
  });
});
