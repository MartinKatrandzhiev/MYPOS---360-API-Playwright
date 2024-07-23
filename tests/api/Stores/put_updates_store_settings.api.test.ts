// COVERAGE_TAG: PUT /myPOS360/Stores/update_settings

import { components, paths } from "../../../api/controllers/types";
import { test, describe, expect } from "../../../api/fixtures/fixtures";

describe("Stores - /myPOS360/Stores/update_settings", () => {
  let id: number;

  test("Should make successful 204 PUT /myPOS360/Stores/update_settings request update store settings", async ({
    storesController,
    env,
    existing_id,
  }) => {
    id = Number(existing_id);

    const headers: paths["/myPOS360/Stores/update_settings"]["put"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        "Login-Id": `${env.LOGIN_ID}`,
        "Wallet-Id": `${env.WALLET_ID}`,
        //   Tid: `${env.TID}`,
      };

    const response = await storesController.putMyPos360StoresUpdateSettings(
      await updateStoreSettings(
        false,
        id,
        1,
        true,
        false,
        true,
        false,
        "EET",
        "Update Store name",
        "https://updatemypos.com",
        "+359888999888",
        "customerservice@mypos.com",
        "Test",
        "BG",
        "MyFin",
        1,
        true,
        2,
        true,
        1,
        "Store title",
        [
          {
            id: 1,
            week_day: 1,
            from_hours: 9,
            to_hours: 17,
            from_minutes: 30,
            to_minutes: 45,
          },
          {
            id: 2,
            week_day: 1,
            from_hours: 9,
            to_hours: 17,
            from_minutes: 30,
            to_minutes: 45,
          },
        ],
        [
          {
            id: 1,
            store_id: id,
            type: 1,
            enabled: true,
          },
        ],
        [
          {
            id: 1,
            store_id: id,
            city: "Sofia",
            time_from: 9,
            time_to: 17,
            is_business_days: true,
            shipment_calculation_type: 1,
            currency: "bgn",
            weight_type: 1,
            has_free_shipping_over_amount: false,
            exclude_fee_if_cart_contains: true,
            delivery_areas: [
              {
                id: 1,
                area: "Lozenets",
              },
            ],
            price_ranges: [
              {
                id: 1,
                weight_from: 1,
                weight_to: 10,
                order_price_from: 1,
                order_price_to: 100,
                delivery_price: 2,
              },
            ],
            custom_delivery_types: [
              {
                id: 1,
                name: "delivery name",
                delivery_days_from: 1,
                delivery_days_to: 5,
                is_business_days: true,
                delivery_amount: 100,
              },
            ],
            excluded_categories: [],
            excluded_items: [],
          },
        ],
        [
          {
            id: 1,
            language: "bg",
          },
        ],
        [{}],
        true,
        1,
        [
          {
            id: 1,
            language: "bg",
            description: "lang description",
          },
        ]
      ),
      headers
    );

    await expect(await response.status()).toBe(204);
  });
});

//Re-use function for new store settings creation parameter
async function updateStoreSettings(
  is_validation_only: components["schemas"]["UpdateStoreSettingsCommand"]["is_validation_only"],
  store_id: components["schemas"]["UpdateStoreSettingsCommand"]["store_id"],
  out_of_stock_type: components["schemas"]["UpdateStoreSettingsCommand"]["out_of_stock_type"],
  allow_delivery: components["schemas"]["UpdateStoreSettingsCommand"]["allow_delivery"],
  allow_pick_up: components["schemas"]["UpdateStoreSettingsCommand"]["allow_pick_up"],
  working_hours_enabled: components["schemas"]["UpdateStoreSettingsCommand"]["working_hours_enabled"],
  out_of_working_hours_enabled: components["schemas"]["UpdateStoreSettingsCommand"]["out_of_working_hours_enabled"],
  time_zone: components["schemas"]["UpdateStoreSettingsCommand"]["time_zone"],
  store_name: components["schemas"]["UpdateStoreSettingsCommand"]["store_name"],
  store_url: components["schemas"]["UpdateStoreSettingsCommand"]["store_url"],
  customer_service_phone: components["schemas"]["UpdateStoreSettingsCommand"]["customer_service_phone"],
  customer_service_email: components["schemas"]["UpdateStoreSettingsCommand"]["customer_service_email"],
  merchant_name: components["schemas"]["UpdateStoreSettingsCommand"]["merchant_name"],
  merchant_language: components["schemas"]["UpdateStoreSettingsCommand"]["merchant_language"],
  fin_institution: components["schemas"]["UpdateStoreSettingsCommand"]["fin_institution"],
  vat_display_type: components["schemas"]["UpdateStoreSettingsCommand"]["vat_display_type"],
  allow_registration: components["schemas"]["UpdateStoreSettingsCommand"]["allow_registration"],
  registration_type: components["schemas"]["UpdateStoreSettingsCommand"]["registration_type"],
  allow_guest_checkout: components["schemas"]["UpdateStoreSettingsCommand"]["allow_guest_checkout"],
  store_type: components["schemas"]["UpdateStoreSettingsCommand"]["store_type"],
  store_title: components["schemas"]["UpdateStoreSettingsCommand"]["store_title"],
  working_hours: components["schemas"]["UpdateStoreSettingsCommand"]["working_hours"],
  order_statuses: components["schemas"]["UpdateStoreSettingsCommand"]["order_statuses"],
  delivery_locations: components["schemas"]["UpdateStoreSettingsCommand"]["delivery_locations"],
  languages: components["schemas"]["UpdateStoreSettingsCommand"]["languages"],
  pick_up_locations: components["schemas"]["UpdateStoreSettingsCommand"]["pick_up_locations"],
  has_phone_call_type: components["schemas"]["UpdateStoreSettingsCommand"]["has_phone_call_type"],
  phone_call_type: components["schemas"]["UpdateStoreSettingsCommand"]["phone_call_type"],
  phone_call_languages: components["schemas"]["UpdateStoreSettingsCommand"]["phone_call_languages"]
): Promise<components["schemas"]["UpdateStoreSettingsCommand"]> {
  return {
    is_validation_only,
    store_id,
    out_of_stock_type,
    allow_delivery,
    allow_pick_up,
    working_hours_enabled,
    out_of_working_hours_enabled,
    time_zone,
    store_name,
    store_url,
    customer_service_phone,
    customer_service_email,
    merchant_name,
    merchant_language,
    fin_institution,
    vat_display_type,
    allow_registration,
    registration_type,
    allow_guest_checkout,
    store_type,
    store_title,
    working_hours,
    order_statuses,
    delivery_locations,
    languages,
    pick_up_locations,
    has_phone_call_type,
    phone_call_type,
    phone_call_languages,
  };
}
