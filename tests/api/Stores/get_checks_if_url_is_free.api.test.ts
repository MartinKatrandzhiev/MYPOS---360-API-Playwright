// COVERAGE_TAG: POST /myPOS360/Stores/check_existing_url

import { components, paths } from "../../../api/controllers/types";

import {
  test,
  describe,
  expect,
  beforeEach,
} from "../../../api/fixtures/fixtures";

let id: number;

describe("Stores - /myPOS360/Stores/check_existing_url", () => {
  beforeEach(async ({}) => {});

  test("Should make successful 200 GET /myPOS360/Stores/check_existing_url request checks if url is free - true", async ({
    storesController,
    env,
    existing_id,
  }) => {
    id = Number(existing_id);

    const headers: paths["/myPOS360/Stores/check_existing_url"]["get"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        // "Login-Id": `${env.LOGIN_ID}`,
        // "Wallet-Id": `${env.WALLET_ID}`,
        // Tid: `${env.TID}`,
      };

    const response = await storesController.getMyPos360StoresChecksIfUrlIsFree(
      "https://mypos.com",
      headers
    );

    const responseBody = await response.json();

    await expect(await response.status()).toBe(200);
    await expect(await responseBody.result).toBe(true);
  });
});
