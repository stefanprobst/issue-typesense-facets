import { client, schema } from "../lib/typesense";

async function ingest() {
  const result = await client.collections(schema.name).documents().search({
    query_by: "name",
    q: "*",
    facet_by: "fruits",
    filter_by: "fruits:=[apple,pear]",
    max_facet_values: 10,
  });

  console.dir(result, { depth: null });
}

ingest()
  .then(() => {
    console.log("Done");
  })
  .catch((error) => {
    console.error("Failed.\n", error);
  });
