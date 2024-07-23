// COVERAGE_TAG: POST /myPOS360/Stores/{store_id}

import { components, paths } from "../../../api/controllers/types";

import {
  test,
  describe,
  expect,
  beforeEach,
} from "../../../api/fixtures/fixtures";

let id: number;

describe("Stores - /myPOS360/Stores/{store_id}", () => {
  beforeEach(async ({}) => {});

  test("Should make successful 200 GET /myPOS360/Stores/{store_id} request get by id", async ({
    storesController,
    env,
    store_id,
  }) => {
    id = Number(store_id);

    const headers: paths["/myPOS360/Stores/{store_id}"]["get"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        "Login-Id": `${env.LOGIN_ID}`,
        "Wallet-Id": `${env.WALLET_ID}`,
        // Tid: `${env.TID}`,
      };

    const response = await storesController.getMyPos360StoresStoreById(
      id,
      headers
    );

    const responseBody = await response.json();

    await expect(await response.status()).toBe(200);
    await expect(await responseBody).toMatchObject({
      id: id,
      store_name: "Test store name",
      store_title: "My store title",
      out_of_stock_type: null,
      allow_delivery: null,
      allow_pick_up: null,
      is_digital_menu: true,
      working_hours_enabled: null,
      out_of_working_hours_enabled: null,
      time_zone: null,
      customer_service_phone: "+359888888888",
      customer_service_email: "qa@mypos.com",
      page_settings_id: null,
      merchant_name: "Luben Krastev",
      merchant_language: "BG",
      fin_institution: "MyBan",
      allow_registration: null,
      registration_type: null,
      allow_guest_checkout: null,
      store_type: null,
      vat_display_type: null,
      store_url: "https://mypos.com",
      has_multiple_pick_up_locations: null,
      has_phone_call_type: null,
      phone_call_type: null,
      design_settings: null,
      delivery_locations: [],
      order_statuses: [],
      working_hours: [],
      terms_of_service: [],
      languages: [],
      pick_up_locations: [],
      phone_call_languages: [],
    });
  });
});
