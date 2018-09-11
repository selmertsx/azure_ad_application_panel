import { Client } from "@microsoft/microsoft-graph-client";

const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;
const GRAPH_API = process.env.GRAPH_API;
const OAUTH_TOKEN_ENDPOINT = process.env.OAUTH_TOKEN_ENDPOINT;

const client: Client = Client.init({
  authProvider: done => {
    done(null, "PassInAccessTokenHere");
  }
});
