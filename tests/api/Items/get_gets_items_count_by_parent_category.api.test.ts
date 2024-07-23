// // COVERAGE_TAG: GET /api/Items/count-by-parrent-category

// import { components, paths } from "../../../api/controllers/types";

// import {
//   test,
//   describe,
//   expect,
//   beforeEach,
// } from "../../../api/fixtures/fixtures";

// describe("Items - /api/Items/count-by-parrent-category", () => {
//   beforeEach(async ({}) => {});

//   test("Should make successful 200 GET /api/Items/count-by-parrent-category request gets items for account", async ({
//     itemsController,
//     env,
//     api_version,
//     dataBase,
//   }) => {
//     const headers: paths["/api/Items/count-by-parrent-category"]["get"]["parameters"]["header"] =
//       {
//         "Api-Key": `${env.API_KEY}`,
//         "Api-Secret": `${env.API_SECRET}`,
//         // "Login-Id": `${env.LOGIN_ID}`,
//         "Wallet-Id": `${env.WALLET_ID}`,
//         // Tid: `${env.TID}`,
//       };

//     const query: paths["/api/Items/count-by-parrent-category"]["get"]["parameters"]["query"] =
//       {
//         page_number: 1,
//         page_size: 2,
//         "api-version": api_version,
//       };

//     const response =
//       await itemsController.getApiItemsGetsItemsCountByParentCategory(
//         query,
//         headers
//       );

//     const db = await dataBase.executeQuery(``);

//     console.log(db);

//     const responseBody = await response.json();

//     await expect(await response.status()).toBe(200);
//     await expect(await responseBody).toMatchObject({
//       items_cnt: 19,
//     });
//   });
// });
