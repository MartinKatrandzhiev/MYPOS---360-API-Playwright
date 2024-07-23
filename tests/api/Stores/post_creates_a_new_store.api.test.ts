// COVERAGE_TAG: POST /myPOS360/Stores/create_store

import { components, paths } from "../../../api/controllers/types";

import {
  test,
  describe,
  expect,
  beforeEach,
} from "../../../api/fixtures/fixtures";

describe("Stores - /myPOS360/Stores/create_store", () => {
  let id: number;

  let existingStore: number = 1;
  beforeEach(async ({ utils }) => {
    id = await utils.randomId(10);
  });

  test("Should make successful 201 POST /myPOS360/Stores/create_store request", async ({
    storesController,
    env,
  }) => {
    const headers: paths["/myPOS360/Stores/create_store"]["post"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        "Login-Id": `${env.LOGIN_ID}`,
        "Wallet-Id": `${env.WALLET_ID}`,
        // Tid: `${env.TID}`,
      };

    const response = await storesController.postMyPos360StoresCreateStore(
      await storeToCreate(
        id,
        true,
        false,
        "Store name",
        "htttps://mypos.com",
        null,
        null,
        "Merchant name",
        null,
        null,
        null
      ),
      headers
    );

    const responseBody = await response.json();

    await expect(await response.status()).toBe(201);
    await expect(await responseBody.id).toBe(id);
  });

  test("Should make error 401 POST /myPOS360/Stores/create_store request unauthorized missing api key", async ({
    storesController,
    env,
  }) => {
    const headers: paths["/myPOS360/Stores/create_store"]["post"]["parameters"]["header"] =
      {
        // "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        "Login-Id": `${env.LOGIN_ID}`,
        "Wallet-Id": `${env.WALLET_ID}`,
        //   Tid: `${env.TID}`,
      };

    const response = await storesController.postMyPos360StoresCreateStore(
      await storeToCreate(
        id,
        true,
        false,
        "Store name",
        "htttps://mypos.com",
        null,
        null,
        "Merchant name",
        null,
        null,
        null
      ),
      headers
    );

    const responseBody = await response.text();

    await expect(await response.status()).toBe(401);
    await expect(await responseBody).toBe(
      "Api Key was not provided. (Using ApiKeyMiddleware) "
    );
  });

  test("Should make error 401 POST /myPOS360/Stores/create_store request unauthorized missing api secret", async ({
    storesController,
    env,
  }) => {
    const headers: paths["/myPOS360/Stores/create_store"]["post"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        //   "Api-Secret": `${env.API_SECRET}`,
        "Login-Id": `${env.LOGIN_ID}`,
        "Wallet-Id": `${env.WALLET_ID}`,
        //   Tid: `${env.TID}`,
      };

    const response = await storesController.postMyPos360StoresCreateStore(
      await storeToCreate(
        id,
        true,
        false,
        "Store name",
        "htttps://mypos.com",
        null,
        null,
        "Merchant name",
        null,
        null,
        null
      ),
      headers
    );

    const responseBody = await response.text();

    await expect(await response.status()).toBe(401);
    await expect(await responseBody).toBe(
      "Api Secret was not provided. (Using ApiKeyMiddleware) "
    );
  });

  test("Should make error 400 POST /myPOS360/Stores/create_store request missing mandatory WalletId or Tid", async ({
    storesController,
    env,
  }) => {
    const headers: paths["/myPOS360/Stores/create_store"]["post"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        "Login-Id": `${env.LOGIN_ID}`,
        //   "Wallet-Id": `${env.WALLET_ID}`,
        //   Tid: `${env.TID}`,
      };

    const response = await storesController.postMyPos360StoresCreateStore(
      await storeToCreate(
        id,
        true,
        false,
        "Store name",
        "htttps://mypos.com",
        null,
        null,
        "Merchant name",
        null,
        null,
        null
      ),
      headers
    );

    const responseBody = await response.json();

    await expect(await response.status()).toBe(400);
    await expect(await responseBody.type).not.toBeNull();
    await expect(await responseBody.title).toBe(
      "One or more validation errors occurred."
    );
    await expect(await responseBody.status).toBe(400);
    await expect(await responseBody.errors.WalletId).toMatchObject([
      "Either Wallet id or tid is required.",
    ]);
    await expect(await responseBody.errors.Tid).toMatchObject([
      "'Tid' must not be empty.",
      "Either Wallet id or tid is required.",
    ]);
  });

  test(`Should make error 400 POST /myPOS360/Stores/create_store request already exist store ${existingStore}`, async ({
    storesController,
    env,
  }) => {
    const headers: paths["/myPOS360/Stores/create_store"]["post"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        "Login-Id": `${env.LOGIN_ID}`,
        "Wallet-Id": `${env.WALLET_ID}`,
        //   Tid: `${env.TID}`,
      };

    const response = await storesController.postMyPos360StoresCreateStore(
      await storeToCreate(
        existingStore,
        true,
        false,
        "Store name",
        "htttps://mypos.com",
        null,
        null,
        "Merchant name",
        null,
        null,
        null
      ),
      headers
    );

    const responseBody = await response.json();

    await expect(await response.status()).toBe(400);
    await expect(await responseBody.type).not.toBeNull();
    await expect(await responseBody.title).toBe("Invalid argument.");
    await expect(await responseBody.status).toBe(400);
    await expect(await responseBody.detail).toBe(
      `Store with id : ${existingStore} already exists .`
    );
  });

  test(`Should make error 400 POST /myPOS360/Stores/create_store request required store id`, async ({
    storesController,
    env,
  }) => {
    const headers: paths["/myPOS360/Stores/create_store"]["post"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        "Login-Id": `${env.LOGIN_ID}`,
        "Wallet-Id": `${env.WALLET_ID}`,
        //   Tid: `${env.TID}`,
      };

    const response = await storesController.postMyPos360StoresCreateStore(
      await storeToCreate(
        undefined,
        true,
        false,
        "Store name",
        "htttps://mypos.com",
        null,
        null,
        "Merchant name",
        null,
        null,
        null
      ),
      headers
    );

    const responseBody = await response.json();

    await expect(await response.status()).toBe(400);
    await expect(await responseBody.type).not.toBeNull();
    await expect(await responseBody.title).toBe(
      "One or more validation errors occurred."
    );
    await expect(await responseBody.status).toBe(400);
    await expect(await responseBody.errors.ID).toMatchObject([
      "'ID' must not be empty.",
      "Store id is required .",
    ]);
  });

  test(`Should make error 400 POST /myPOS360/Stores/create_store request required store_name and store_url`, async ({
    storesController,
    env,
  }) => {
    const headers: paths["/myPOS360/Stores/create_store"]["post"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        "Login-Id": `${env.LOGIN_ID}`,
        "Wallet-Id": `${env.WALLET_ID}`,
        //   Tid: `${env.TID}`,
      };

    const response = await storesController.postMyPos360StoresCreateStore(
      await storeToCreate(
        id,
        true,
        false,
        null,
        null,
        null,
        null,
        "Merchant name",
        null,
        null,
        null
      ),
      headers
    );

    const responseBody = await response.json();

    await expect(await response.status()).toBe(400);
    await expect(await responseBody.type).not.toBeNull();
    await expect(await responseBody.title).toBe(
      "One or more validation errors occurred."
    );
    await expect(await responseBody.status).toBe(400);
    await expect(await responseBody.errors.StoreName).toMatchObject([
      "'Store Name' must not be empty.",
      "'Store Name' must not be empty.",
    ]);
    await expect(await responseBody.errors.StoreUrl).toMatchObject([
      "'Store Url' must not be empty.",
      "'Store Url' must not be empty.",
    ]);
  });

  test("Should make successful 201 POST /myPOS360/Stores/create_store request with is_validation_only: false", async ({
    storesController,
    env,
  }) => {
    const headers: paths["/myPOS360/Stores/create_store"]["post"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        "Login-Id": `${env.LOGIN_ID}`,
        "Wallet-Id": `${env.WALLET_ID}`,
        //   Tid: `${env.TID}`,
      };

    const response = await storesController.postMyPos360StoresCreateStore(
      await storeToCreate(
        id,
        true,
        false,
        "My test store Auto",
        "https://mypos.com",
        "+359888999000",
        "luben.krastev@mypos.com",
        "Luben Krastev",
        "BG",
        "MyBan",
        "My store title"
      ),
      headers
    );

    const responseBody = await response.json();
    await expect(await response.status()).toBe(201);
    await expect(await responseBody.id).toBe(id);
  });
});

//Re-use function for new store creation parameter
async function storeToCreate(
  id: components["schemas"]["CreateStoreCommand"]["id"],
  is_digital_menu: components["schemas"]["CreateStoreCommand"]["is_digital_menu"],
  is_validation_only: components["schemas"]["CreateStoreCommand"]["is_validation_only"],
  store_name: components["schemas"]["CreateStoreCommand"]["store_name"],
  store_url: components["schemas"]["CreateStoreCommand"]["store_url"],
  customer_service_phone: components["schemas"]["CreateStoreCommand"]["customer_service_phone"],
  customer_service_email: components["schemas"]["CreateStoreCommand"]["customer_service_email"],
  merchant_name: components["schemas"]["CreateStoreCommand"]["merchant_name"],
  merchant_language: components["schemas"]["CreateStoreCommand"]["merchant_language"],
  fin_institution: components["schemas"]["CreateStoreCommand"]["fin_institution"],
  store_title: components["schemas"]["CreateStoreCommand"]["store_title"]
): Promise<components["schemas"]["CreateStoreCommand"]> {
  return {
    id,
    is_digital_menu,
    is_validation_only,
    store_name,
    store_url,
    customer_service_phone,
    customer_service_email,
    merchant_name,
    merchant_language,
    fin_institution,
    store_title,
  };
}
