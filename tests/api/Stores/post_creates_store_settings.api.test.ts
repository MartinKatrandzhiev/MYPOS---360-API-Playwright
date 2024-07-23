// // COVERAGE_TAG: POST /myPOS360/Stores/create_settings

// import { components, paths } from "../../../api/controllers/types";
// import { test, describe, expect } from "../../../api/fixtures/fixtures";

// let id: number;
// describe("Stores - /myPOS360/Stores/create_settings", () => {
//   test.only("Should make successful 200 POST /myPOS360/Stores/create_settings request", async ({
//     storesController,
//     env,
//     store_id,
//   }) => {
//     id = Number(store_id);
//     console.log(id);
//     const headers: paths["/myPOS360/Stores/create_settings"]["post"]["parameters"]["header"] =
//       {
//         "Api-Key": `${env.API_KEY}`,
//         "Api-Secret": `${env.API_SECRET}`,
//         "Login-Id": `${env.LOGIN_ID}`,
//         "Wallet-Id": `${env.WALLET_ID}`,
//         //   Tid: `${env.TID}`,
//       };

//     const response = await storesController.postMyPos360StoresCreateSettings(
//       await storeSettingsToCreate(
//         false,
//         id,
//         1,
//         false,
//         false,
//         true,
//         true,
//         "EET",
//         1,
//         true,
//         1,
//         true,
//         1,
//         true,
//         2,
//         [
//           {
//             language: "bg",
//             description: "description lang",
//           },
//         ],
//         [
//           {
//             address: "address ",
//             city: "Sofia",
//             country: "Bulgaria",
//             zip: "1000",
//             is_custom_pick_up_time: false,
//             working_hours: [
//               {
//                 week_day: 1,
//                 from_hours: 9,
//                 to_hours: 17,
//                 from_minutes: 30,
//                 to_minutes: 45,
//               },
//               {
//                 week_day: 2,
//                 from_hours: 9,
//                 to_hours: 17,
//                 from_minutes: 30,
//                 to_minutes: 45,
//               },
//             ],
//           },
//         ],
//         [
//           {
//             type: 1,
//             enabled: true,
//           },
//           {
//             type: 2,
//             enabled: true,
//           },
//           {
//             type: 3,
//             enabled: true,
//           },
//           {
//             type: 4,
//             enabled: true,
//           },
//           {
//             type: 5,
//             enabled: true,
//           },
//           {
//             type: 6,
//             enabled: true,
//           },
//         ],
//         [
//           {
//             city: "Sofia",
//             time_from: 9,
//             time_to: 17,
//             is_business_days: true,
//             shipment_calculation_type: 1,
//             currency: "bgn",
//             weight_type: 1,
//             has_free_shipping_over_amount: true,
//             free_shipping_over_amount: 10,
//             exclude_fee_if_cart_contains: true,
//             delivery_areas: [{}],
//             price_ranges: [{}],
//             excluded_categories: [{}],
//             excluded_items: [{}],
//           },
//         ],
//         [
//           {
//             week_day: 1,
//             from_hours: 9,
//             to_hours: 17,
//             from_minutes: 30,
//             to_minutes: 45,
//           },
//         ],
//         [
//           {
//             language: "bg",
//           },
//         ]
//       ),
//       headers
//     );

//     const responseBody = await response.json();
//     console.log(responseBody);

//     await expect(await response.status()).toBe(200);
//     await expect(await responseBody.id).toBe(id);
//   });
// });

// async function storeSettingsToCreate(
//   is_validation_only: components["schemas"]["CreateStoreSettingsCommand"]["is_validation_only"],
//   store_id: components["schemas"]["CreateStoreSettingsCommand"]["store_id"],
//   out_of_stock_type: components["schemas"]["CreateStoreSettingsCommand"]["out_of_stock_type"],
//   allow_delivery: components["schemas"]["CreateStoreSettingsCommand"]["allow_delivery"],
//   allow_pick_up: components["schemas"]["CreateStoreSettingsCommand"]["allow_pick_up"],
//   working_hours_enabled: components["schemas"]["CreateStoreSettingsCommand"]["working_hours_enabled"],
//   out_of_working_hours_enabled: components["schemas"]["CreateStoreSettingsCommand"]["out_of_working_hours_enabled"],
//   time_zone: components["schemas"]["CreateStoreSettingsCommand"]["time_zone"],
//   vat_display_type: components["schemas"]["CreateStoreSettingsCommand"]["vat_display_type"],
//   allow_registration: components["schemas"]["CreateStoreSettingsCommand"]["allow_registration"],
//   registration_type: components["schemas"]["CreateStoreSettingsCommand"]["registration_type"],
//   allow_guest_checkout: components["schemas"]["CreateStoreSettingsCommand"]["allow_guest_checkout"],
//   store_type: components["schemas"]["CreateStoreSettingsCommand"]["store_type"],
//   has_phone_call_type: components["schemas"]["CreateStoreSettingsCommand"]["has_phone_call_type"],
//   phone_call_type: components["schemas"]["CreateStoreSettingsCommand"]["phone_call_type"],
//   phone_call_languages: components["schemas"]["CreateStoreSettingsCommand"]["phone_call_languages"],
//   pick_up_locations: components["schemas"]["CreateStoreSettingsCommand"]["pick_up_locations"],
//   order_statuses: components["schemas"]["CreateStoreSettingsCommand"]["order_statuses"],
//   delivery_locations: components["schemas"]["CreateStoreSettingsCommand"]["delivery_locations"],
//   working_hours: components["schemas"]["CreateStoreSettingsCommand"]["working_hours"],
//   languages: components["schemas"]["CreateStoreSettingsCommand"]["languages"]
// ): Promise<components["schemas"]["CreateStoreSettingsCommand"]> {
//   return {
//     is_validation_only,
//     store_id,
//     out_of_stock_type,
//     allow_delivery,
//     allow_pick_up,
//     working_hours_enabled,
//     out_of_working_hours_enabled,
//     time_zone,
//     vat_display_type,
//     allow_registration,
//     registration_type,
//     allow_guest_checkout,
//     store_type,
//     has_phone_call_type,
//     phone_call_type,
//     phone_call_languages,
//     pick_up_locations,
//     order_statuses,
//     delivery_locations,
//     working_hours,
//     languages,
//   };
// }

//TODO: Probably missing properties from the schemas
