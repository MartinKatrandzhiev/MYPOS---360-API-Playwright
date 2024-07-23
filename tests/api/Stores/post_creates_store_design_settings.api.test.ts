// COVERAGE_TAG: POST /myPOS360/Stores/create_design_settings

import { components, paths } from "../../../api/controllers/types";
import { test, describe, expect } from "../../../api/fixtures/fixtures";

describe("Stores - /myPOS360/Stores/create_design_settings", () => {
  let id: number;

  test("Should make successful 200 POST /myPOS360/Stores/create_design_settings request", async ({
    storesController,
    env,
    store_id,
  }) => {
    id = Number(store_id);

    const headers: paths["/myPOS360/Stores/create_design_settings"]["post"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        "Login-Id": `${env.LOGIN_ID}`,
        "Wallet-Id": `${env.WALLET_ID}`,
        //   Tid: `${env.TID}`,
      };

    const response = await storesController.postMyPos360CreateDesignSettings(
      await designSettingsToCreate(
        id,
        1,
        2,
        2,
        1,
        1,
        5,
        "blue",
        "green",
        "Headline 1",
        "Headline 2",
        "facebook",
        "instagram",
        "twitter",
        true,
        "Notifications message",
        "logo_guid",
        "header_guid",
        true,
        true,
        0,
        0,
        1,
        2,
        3,
        true,
        true
      ),
      headers
    );

    const responseBody = await response.json();

    await expect(await response.status()).toBe(200);
    await expect(await responseBody.id).toBe(id);
  });
});

//Re-use function for new store settings creation parameter
async function designSettingsToCreate(
  store_id: components["schemas"]["CreateStoreDesignSettingsCommand"]["store_id"],
  template: components["schemas"]["CreateStoreDesignSettingsCommand"]["template"],
  menu_position: components["schemas"]["CreateStoreDesignSettingsCommand"]["menu_position"],
  button_style: components["schemas"]["CreateStoreDesignSettingsCommand"]["button_style"],
  font_family: components["schemas"]["CreateStoreDesignSettingsCommand"]["font_family"],
  default_product_view: components["schemas"]["CreateStoreDesignSettingsCommand"]["default_product_view"],
  number_products_view: components["schemas"]["CreateStoreDesignSettingsCommand"]["number_products_view"],
  menu_color: components["schemas"]["CreateStoreDesignSettingsCommand"]["menu_color"],
  overlay_color: components["schemas"]["CreateStoreDesignSettingsCommand"]["overlay_color"],
  headline_1: components["schemas"]["CreateStoreDesignSettingsCommand"]["headline_1"],
  headline_2: components["schemas"]["CreateStoreDesignSettingsCommand"]["headline_2"],
  facebook_page: components["schemas"]["CreateStoreDesignSettingsCommand"]["facebook_page"],
  instagram_page: components["schemas"]["CreateStoreDesignSettingsCommand"]["instagram_page"],
  twitter_page: components["schemas"]["CreateStoreDesignSettingsCommand"]["twitter_page"],
  notifications_enabled: components["schemas"]["CreateStoreDesignSettingsCommand"]["notifications_enabled"],
  notification_message: components["schemas"]["CreateStoreDesignSettingsCommand"]["notification_message"],
  logo_guid: components["schemas"]["CreateStoreDesignSettingsCommand"]["logo_guid"],
  header_guid: components["schemas"]["CreateStoreDesignSettingsCommand"]["header_guid"],
  show_logo: components["schemas"]["CreateStoreDesignSettingsCommand"]["show_logo"],
  show_hero_img: components["schemas"]["CreateStoreDesignSettingsCommand"]["show_hero_img"],
  services_default_sorting_type: components["schemas"]["CreateStoreDesignSettingsCommand"]["services_default_sorting_type"],
  products_default_sorting_type: components["schemas"]["CreateStoreDesignSettingsCommand"]["products_default_sorting_type"],
  number_of_services_on_row: components["schemas"]["CreateStoreDesignSettingsCommand"]["number_of_services_on_row"],
  max_services_per_category: components["schemas"]["CreateStoreDesignSettingsCommand"]["max_services_per_category"],
  max_products_per_category: components["schemas"]["CreateStoreDesignSettingsCommand"]["max_products_per_category"],
  group_products_by_category: components["schemas"]["CreateStoreDesignSettingsCommand"]["group_products_by_category"],
  group_services_by_category: components["schemas"]["CreateStoreDesignSettingsCommand"]["group_services_by_category"]
): Promise<components["schemas"]["CreateStoreDesignSettingsCommand"]> {
  return {
    store_id,
    template,
    menu_position,
    button_style,
    font_family,
    default_product_view,
    number_products_view,
    menu_color,
    overlay_color,
    headline_1,
    headline_2,
    facebook_page,
    instagram_page,
    twitter_page,
    notifications_enabled,
    notification_message,
    logo_guid,
    header_guid,
    show_logo,
    show_hero_img,
    services_default_sorting_type,
    products_default_sorting_type,
    number_of_services_on_row,
    max_services_per_category,
    max_products_per_category,
    group_products_by_category,
    group_services_by_category,
  };
}
