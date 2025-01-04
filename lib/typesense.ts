import assert from "node:assert/strict";
import { Client } from "typesense";
import type { CollectionCreateSchema } from "typesense/lib/Typesense/Collections";

const apiKey = process.env.TYPESENSE_ADMIN_API_KEY;
assert(apiKey, "TYPESENSE_ADMIN_API_KEY is missing.");

export const client = new Client({
  nodes: [
    {
      host: "localhost",
      port: 8108,
      protocol: "http",
    },
  ],
  apiKey,
});

export const schema: CollectionCreateSchema = {
  name: "fruit-salads",
  fields: [
    { name: "name", type: "string", sort: true },
    { name: "fruits", type: "string[]", facet: true },
  ],
};
