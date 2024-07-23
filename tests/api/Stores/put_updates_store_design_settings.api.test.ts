// // COVERAGE_TAG: PUT /myPOS360/Stores/update_design_settings

// import { components, paths } from "../../../api/controllers/types";
// import { test, describe, expect } from "../../../api/fixtures/fixtures";

// describe("Stores - /myPOS360/Stores/update_design_settings", () => {
//   let id: number;

//   test.only("Should make successful 204 PUT /myPOS360/Stores/update_design_settings request update store settings", async ({
//     storesController,
//     env,
//     store_id,
//   }) => {
//     id = Number(store_id);

//     const headers: paths["/myPOS360/Stores/update_design_settings"]["put"]["parameters"]["header"] =
//       {
//         "Api-Key": `${env.API_KEY}`,
//         "Api-Secret": `${env.API_SECRET}`,
//         "Login-Id": `${env.LOGIN_ID}`,
//         "Wallet-Id": `${env.WALLET_ID}`,
//         //   Tid: `${env.TID}`,
//       };

//     const response = await storesController.putMyPos360StoresUpdateSettings(
//       await updateStoreDesignSettings(
//         false,
//         id,
//         1,
//         1,
//         1,
//         1,
//         1,
//         1,
//         "blue",
//         "red",
//         "Headline 1",
//         "Headline 2",
//         "facebook",
//         "instagram",
//         "twitter",
//         false,
//         "Notification message",
//         "1000",
//         "1001",
//         false,
//         false,
//         1,
//         1,
//         1,
//         1,
//         1,
//         false,
//         false
//       ),
//       headers
//     );

//     console.log(await response.json());
//     await expect(await response.status()).toBe(204);
//   });
// });

// //Re-use function for new store settings creation parameter
// async function updateStoreDesignSettings(
//   is_validation_only: components["schemas"]["UpdateStoreDesignSettingsCommand"]["is_validation_only"],
//   store_id: components["schemas"]["UpdateStoreDesignSettingsCommand"]["store_id"],
//   template: components["schemas"]["UpdateStoreDesignSettingsCommand"]["template"],
//   menu_position: components["schemas"]["UpdateStoreDesignSettingsCommand"]["menu_position"],
//   button_style: components["schemas"]["UpdateStoreDesignSettingsCommand"]["button_style"],
//   font_family: components["schemas"]["UpdateStoreDesignSettingsCommand"]["font_family"],
//   default_product_view: components["schemas"]["UpdateStoreDesignSettingsCommand"]["default_product_view"],
//   number_products_view: components["schemas"]["UpdateStoreDesignSettingsCommand"]["number_products_view"],
//   menu_color: components["schemas"]["UpdateStoreDesignSettingsCommand"]["menu_color"],
//   overlay_color: components["schemas"]["UpdateStoreDesignSettingsCommand"]["overlay_color"],
//   headline_1: components["schemas"]["UpdateStoreDesignSettingsCommand"]["headline_1"],
//   headline_2: components["schemas"]["UpdateStoreDesignSettingsCommand"]["headline_2"],
//   facebook_page: components["schemas"]["UpdateStoreDesignSettingsCommand"]["facebook_page"],
//   instagram_page: components["schemas"]["UpdateStoreDesignSettingsCommand"]["instagram_page"],
//   twitter_page: components["schemas"]["UpdateStoreDesignSettingsCommand"]["twitter_page"],
//   notifications_enabled: components["schemas"]["UpdateStoreDesignSettingsCommand"]["notifications_enabled"],
//   notification_message: components["schemas"]["UpdateStoreDesignSettingsCommand"]["notification_message"],
//   logo_guid: components["schemas"]["UpdateStoreDesignSettingsCommand"]["logo_guid"],
//   header_guid: components["schemas"]["UpdateStoreDesignSettingsCommand"]["header_guid"],
//   show_logo: components["schemas"]["UpdateStoreDesignSettingsCommand"]["show_logo"],
//   show_hero_img: components["schemas"]["UpdateStoreDesignSettingsCommand"]["show_hero_img"],
//   services_default_sorting_type: components["schemas"]["UpdateStoreDesignSettingsCommand"]["services_default_sorting_type"],
//   products_default_sorting_type: components["schemas"]["UpdateStoreDesignSettingsCommand"]["products_default_sorting_type"],
//   number_of_services_on_row: components["schemas"]["UpdateStoreDesignSettingsCommand"]["number_of_services_on_row"],
//   max_services_per_category: components["schemas"]["UpdateStoreDesignSettingsCommand"]["max_services_per_category"],
//   max_products_per_category: components["schemas"]["UpdateStoreDesignSettingsCommand"]["max_products_per_category"],
//   group_products_by_category: components["schemas"]["UpdateStoreDesignSettingsCommand"]["group_products_by_category"],
//   group_services_by_category: components["schemas"]["UpdateStoreDesignSettingsCommand"]["group_services_by_category"]
// ): Promise<components["schemas"]["UpdateStoreDesignSettingsCommand"]> {
//   return {
//     is_validation_only,
//     store_id,
//     template,
//     menu_position,
//     button_style,
//     font_family,
//     default_product_view,
//     number_products_view,
//     menu_color,
//     overlay_color,
//     headline_1,
//     headline_2,
//     facebook_page,
//     instagram_page,
//     twitter_page,
//     notifications_enabled,
//     notification_message,
//     logo_guid,
//     header_guid,
//     show_logo,
//     show_hero_img,
//     services_default_sorting_type,
//     products_default_sorting_type,
//     number_of_services_on_row,
//     max_services_per_category,
//     max_products_per_category,
//     group_products_by_category,
//     group_services_by_category,
//   };
// }

//TODO: Missing properties from the schemas
// "'Store Name' must not be empty.",
// "'Store Name' must not be empty."
// ],
// StoreUrl: [
// "'Store Url' must not be empty.",
// "'Store Url' must not be empty."
// ],
// MerchantName: [
// "'Merchant Name' must not be empty.",
// 'merchant_name is required .'
