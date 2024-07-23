// COVERAGE_TAG: POST /myPOS360/Stores/get_stores_design_templates

import { components, paths } from "../../../api/controllers/types";
import { test, describe, expect } from "../../../api/fixtures/fixtures";

describe("Stores - /myPOS360/Stores/get_stores_design_templates", () => {
  let id: number;

  test("Should make successful 200 POST /myPOS360/Stores/get_stores_design_templates request", async ({
    storesController,
    env,
    existing_id,
  }) => {
    id = Number(existing_id);

    const headers: paths["/myPOS360/Stores/get_stores_design_templates"]["post"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        //   "Login-Id": `${env.LOGIN_ID}`,
        //   "Wallet-Id": `${env.WALLET_ID}`,
        //   Tid: `${env.TID}`,
      };

    const response =
      await storesController.postMyPos360StoresGetStoresDesignTemplates(
        await getStoreDesignTemplates([id], 1, 2),
        headers
      );

    const responseBody = await response.json();

    await expect(await response.status()).toBe(200);
    await expect(await responseBody.items[0].id).toBe(id);
    await expect(await responseBody.items[0].template).toBe(1);
    await expect(await responseBody.pageIndex).toBe(1);
    await expect(await responseBody.totalPages).toBe(1);
    await expect(await responseBody.totalCount).toBe(1);
    await expect(await responseBody.pageSize).toBe(2);
    await expect(await responseBody.hasPreviousPage).toBe(false);
    await expect(await responseBody.hasNextPage).toBe(false);
  });
});

//Re-use function for new store settings creation parameter
async function getStoreDesignTemplates(
  ids: components["schemas"]["GetStoresDesignTemplatesPostQuery"]["ids"],
  page_number: components["schemas"]["GetStoresDesignTemplatesPostQuery"]["page_number"],
  page_size: components["schemas"]["GetStoresDesignTemplatesPostQuery"]["page_size"]
): Promise<components["schemas"]["GetStoresDesignTemplatesPostQuery"]> {
  return {
    ids,
    page_number,
    page_size,
  };
}
