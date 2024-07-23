// COVERAGE_TAG: POST /myPOS360/Stores/is_linked_to_email_automations/{store_id}

import { components, paths } from "../../../api/controllers/types";

import {
  test,
  describe,
  expect,
  beforeEach,
} from "../../../api/fixtures/fixtures";

let id: number;

describe("Stores - /myPOS360/Stores/is_linked_to_email_automations/{store_id}", () => {
  beforeEach(async ({}) => {});

  test("Should make successful 200 GET /myPOS360/Stores/is_linked_to_email_automations/{store_id} request gets if store is linked to email automation by id", async ({
    storesController,
    env,
    existing_id,
  }) => {
    id = Number(existing_id);

    const headers: paths["/myPOS360/Stores/is_linked_to_email_automations/{store_id}"]["get"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        // "Login-Id": `${env.LOGIN_ID}`,
        // "Wallet-Id": `${env.WALLET_ID}`,
        // Tid: `${env.TID}`,
      };

    const response =
      await storesController.getMyPos360StoresGetsIfStoreIsLinkedToEmailAutomationById(
        id,
        headers
      );

    const responseBody = await response.json();

    await expect(await response.status()).toBe(200);
    await expect(await responseBody.result).toBe(false);
  });
});
