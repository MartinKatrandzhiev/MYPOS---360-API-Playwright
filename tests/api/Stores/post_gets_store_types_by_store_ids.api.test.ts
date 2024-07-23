// COVERAGE_TAG: POST /myPOS360/Stores/get_store_types

import { components, paths } from "../../../api/controllers/types";
import { test, describe, expect } from "../../../api/fixtures/fixtures";

describe("Stores - /myPOS360/Stores/get_store_types", () => {
  let id: number;

  test("Should make successful 200 POST /myPOS360/Stores/get_store_types request", async ({
    storesController,
    env,
    existing_id,
  }) => {
    id = Number(existing_id);

    const headers: paths["/myPOS360/Stores/get_store_types"]["post"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        //   "Login-Id": `${env.LOGIN_ID}`,
        //   "Wallet-Id": `${env.WALLET_ID}`,
        //   Tid: `${env.TID}`,
      };

    const response = await storesController.postMyPos360StoresGetStoreTypes(
      await getStoreTypes([id], 1, 2),
      headers
    );

    const responseBody = await response.json();

    await expect(await response.status()).toBe(200);
    await expect(await responseBody.items[0].store_id).toBe(id);
    await expect(await responseBody.items[0].store_type).toBe(1);
    await expect(await responseBody.pageIndex).toBe(1);
    await expect(await responseBody.totalPages).toBe(1);
    await expect(await responseBody.totalCount).toBe(1);
    await expect(await responseBody.pageSize).toBe(2);
    await expect(await responseBody.hasPreviousPage).toBe(false);
    await expect(await responseBody.hasNextPage).toBe(false);
  });
});

//Re-use function for new store settings creation parameter
async function getStoreTypes(
  ids: components["schemas"]["GetStoreTypesByIdsPostQuery"]["ids"],
  page_number: components["schemas"]["GetStoreTypesByIdsPostQuery"]["page_number"],
  page_size: components["schemas"]["GetStoreTypesByIdsPostQuery"]["page_size"]
): Promise<components["schemas"]["GetStoreTypesByIdsPostQuery"]> {
  return {
    ids,
    page_number,
    page_size,
  };
}
