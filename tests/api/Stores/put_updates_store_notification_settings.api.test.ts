// // COVERAGE_TAG: PUT /myPOS360/Stores/notification_settings

// import { components, paths } from "../../../api/controllers/types";
// import { test, describe, expect } from "../../../api/fixtures/fixtures";

// describe("Stores - /myPOS360/Stores/update_settings", () => {
//   let id: number;

//   test.only("Should make successful 200 PUT /myPOS360/Stores/notification_settings request update store notification settings", async ({
//     storesController,
//     env,
//     store_id,
//   }) => {
//     id = Number(store_id);

//     const headers: paths["/myPOS360/Stores/notification_settings"]["put"]["parameters"]["header"] =
//       {
//         "Api-Key": `${env.API_KEY}`,
//         "Api-Secret": `${env.API_SECRET}`,
//         "Login-Id": `${env.LOGIN_ID}`,
//         "Wallet-Id": `${env.WALLET_ID}`,
//         //   Tid: `${env.TID}`,
//       };

//     const response = await storesController.putMyPos360StoresUpdateSettings(
//       await updateStoreNotificationSettings(
//         id,
//         "https://mypos.com",
//         "My store",
//         "+359888999000",
//         "qa@mypos.com"
//       ),
//       headers
//     );

//     const responseBody = await response.json();
//     console.log(responseBody);
//     await expect(await response.status()).toBe(200);
//   });
// });

// //Re-use function for new store settings creation parameter
// async function updateStoreNotificationSettings(
//   store_id: components["schemas"]["UpdateStoreNotificationSettingsCommand"]["store_id"],
//   store_url: components["schemas"]["UpdateStoreNotificationSettingsCommand"]["store_url"],
//   store_name: components["schemas"]["UpdateStoreNotificationSettingsCommand"]["store_name"],
//   customer_service_phone: components["schemas"]["UpdateStoreNotificationSettingsCommand"]["customer_service_phone"],
//   customer_service_email: components["schemas"]["UpdateStoreNotificationSettingsCommand"]["customer_service_email"]
// ): Promise<components["schemas"]["UpdateStoreNotificationSettingsCommand"]> {
//   return {
//     store_id,
//     store_url,
//     store_name,
//     customer_service_phone,
//     customer_service_email,
//   };
// }

//TODO: Missing properties in the schema
// errors: {
//     MerchantName: [
//       "'Merchant Name' must not be empty.",
//       'merchant_name is required .'
//     ]
