// COVERAGE_TAG: POST /myPOS360/Stores/get_store_pages_selected_columns

import { components, paths } from "../../../api/controllers/types";
import { test, describe, expect } from "../../../api/fixtures/fixtures";

describe("Stores - /myPOS360/Stores/get_storo_pages_selected_columns", () => {
  let id: number;

  test("Should make successful 200 POST /myPOS360/Stores/get_store_pages_selected_columns request", async ({
    storesController,
    env,
    existing_id,
  }) => {
    id = Number(existing_id);

    const headers: paths["/myPOS360/Stores/get_store_pages_selected_columns"]["post"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        //   "Login-Id": `${env.LOGIN_ID}`,
        //   "Wallet-Id": `${env.WALLET_ID}`,
        //   Tid: `${env.TID}`,
      };

    const response =
      await storesController.postMyPos360StoresGetStorePagesSelectedColumns(
        await getStorePagesSelectedColumns(
          [id],
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          1,
          2
        ),
        headers
      );

    const responseBody = await response.json();

    await expect(await response.status()).toBe(200);
    await expect(await responseBody.items).toHaveLength(0);
    await expect(await responseBody.pageIndex).toBe(1);
    await expect(await responseBody.totalPages).toBe(0);
    await expect(await responseBody.totalCount).toBe(0);
    await expect(await responseBody.pageSize).toBe(2);
    await expect(await responseBody.hasPreviousPage).toBe(false);
    await expect(await responseBody.hasNextPage).toBe(false);
  });
});

//Re-use function for new store settings creation parameter
async function getStorePagesSelectedColumns(
  ids: components["schemas"]["GetStorePagesSelectedColumnsPostQuery"]["ids"],
  is_home_page_active: components["schemas"]["GetStorePagesSelectedColumnsPostQuery"]["is_home_page_active"],
  is_products_page_active: components["schemas"]["GetStorePagesSelectedColumnsPostQuery"]["is_products_page_active"],
  is_service_page_active: components["schemas"]["GetStorePagesSelectedColumnsPostQuery"]["is_service_page_active"],
  is_contact_us_page_active: components["schemas"]["GetStorePagesSelectedColumnsPostQuery"]["is_contact_us_page_active"],
  is_main_banner_active: components["schemas"]["GetStorePagesSelectedColumnsPostQuery"]["is_main_banner_active"],
  is_images_with_text_active: components["schemas"]["GetStorePagesSelectedColumnsPostQuery"]["is_images_with_text_active"],
  is_featured_products_active: components["schemas"]["GetStorePagesSelectedColumnsPostQuery"]["is_featured_products_active"],
  is_browse_categories_active: components["schemas"]["GetStorePagesSelectedColumnsPostQuery"]["is_browse_categories_active"],
  is_banner_active: components["schemas"]["GetStorePagesSelectedColumnsPostQuery"]["is_banner_active"],
  is_split_with_image_active: components["schemas"]["GetStorePagesSelectedColumnsPostQuery"]["is_split_with_image_active"],
  is_services_active: components["schemas"]["GetStorePagesSelectedColumnsPostQuery"]["is_services_active"],
  is_contact_us_active: components["schemas"]["GetStorePagesSelectedColumnsPostQuery"]["is_contact_us_active"],
  page_number: components["schemas"]["GetStorePagesSelectedColumnsPostQuery"]["page_number"],
  page_size: components["schemas"]["GetStorePagesSelectedColumnsPostQuery"]["page_size"]
): Promise<components["schemas"]["GetStorePagesSelectedColumnsPostQuery"]> {
  return {
    ids,
    is_home_page_active,
    is_products_page_active,
    is_service_page_active,
    is_contact_us_page_active,
    is_main_banner_active,
    is_images_with_text_active,
    is_featured_products_active,
    is_browse_categories_active,
    is_banner_active,
    is_split_with_image_active,
    is_services_active,
    is_contact_us_active,
    page_number,
    page_size,
  };
}
