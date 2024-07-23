import { test as baseTest } from "@playwright/test";
import Utils from "../../utils/utils";
import Env from "../../utils/env";
import StoresController from "../controllers/Stores/stores.controller";
import { components, paths } from "../controllers/types";
import DB from "../../utils/db";
import ItemsController from "../controllers/Items/items.controller";
import CategoriesController from "../controllers/Categories/categories.controller";

export type ControllerFixtures = {
  storesController: StoresController;
  itemsController: ItemsController;
  categoriesController: CategoriesController;
};

export type UtilsFixtures = {
  utils: Utils;
  env: Env;
  dataBase: DB;
};

export type TestDataFixtures = {
  api_version: string;
  store_id: string;
  existing_id: string;
  random_name: string;
  random_id: number;
};

const base = baseTest.extend<
  ControllerFixtures & TestDataFixtures & UtilsFixtures
>({
  //Utils
  dataBase: async ({}, use) => {
    const dataBase = new DB();
    await use(dataBase);
  },
  utils: async ({}, use) => {
    await use(new Utils());
  },
  env: async ({}, use) => {
    await use(new Env());
  },
  //Test data
  api_version: async ({}, use) => {
    const api_version = `1.0`;
    await use(api_version);
  },
  random_name: async ({ utils }, use) => {
    const random_name: string = await utils.generateRandomName();
    await use(random_name);
  },
  random_id: async ({ utils }, use) => {
    const random_id: number = await utils.randomId(10);
    await use(random_id);
  },
  existing_id: async ({ dataBase }, use) => {
    const db = await dataBase.executeQuery(
      `SELECT id FROM stores WHERE wallet_id=499977 ORDER BY id DESC LIMIT 1;`
    );

    const id = db.rows.map((row) => row.id);

    const existingId = String(id);
    await use(existingId);
  },
  store_id: async ({ storesController, utils, env }, use) => {
    const generateId: number = await utils.randomId(10);

    const storeToCreate: components["schemas"]["CreateStoreCommand"] = {
      id: generateId,
      is_digital_menu: true,
      is_validation_only: false,
      store_name: "Test store name",
      store_url: "https://mypos.com",
      customer_service_phone: "+359888888888",
      customer_service_email: "qa@mypos.com",
      merchant_name: "Luben Krastev",
      merchant_language: "BG",
      fin_institution: "MyBan",
      store_title: "My store title",
    };

    const headers: paths["/myPOS360/Stores/create_store"]["post"]["parameters"]["header"] =
      {
        "Api-Key": `${env.API_KEY}`,
        "Api-Secret": `${env.API_SECRET}`,
        "Login-Id": `${env.LOGIN_ID}`,
        "Wallet-Id": `${env.WALLET_ID}`,
        //   Tid: `${env.TID}`,
      };

    const response = await storesController.postMyPos360StoresCreateStore(
      storeToCreate,
      headers
    );

    const responseBody = await response.json();

    const id = await responseBody.id;

    await use(id);
  },

  //Controllers
  storesController: async ({}, use) => {
    await use(new StoresController());
  },
  categoriesController: async ({}, use) => {
    await use(new CategoriesController());
  },
  itemsController: async ({}, use) => {
    await use(new ItemsController());
  },
});

export const test = base;
export const describe = base.describe;
export const expect = base.expect;
export const step = base.step;
export const beforeEach = base.beforeEach;
export const afterEach = base.afterEach;
export const beforeAll = base.beforeAll;
export const afterAll = base.afterAll;
