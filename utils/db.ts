import { Client, QueryResult } from "pg";

export default class DB {
  private DBConfig = {
    user: "qa_team",
    host: "10.65.50.204",
    database: "myPOS360",
    password: "4SMgJDR5Y6de",
    port: 5432,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 20000,
  };

  async executeQuery(query: string): Promise<QueryResult> {
    let result;
    const client = new Client(this.DBConfig);
    try {
      await client.connect();
      result = await client.query(query);
      //   console.log(result.rows);
    } catch (error) {
      console.error("Error in connection/executing query:", error);
    } finally {
      await client.end().catch((error) => {
        console.error("Error ending client connection:", error);
      });
    }
    return result;
  }
}
