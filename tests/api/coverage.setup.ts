import { getEndpointCoverage } from "../../api/helpers/coverage";
import { test as coverage } from "@playwright/test";

coverage("calculate coverage", async () => {
  await getEndpointCoverage("swagger");
});
