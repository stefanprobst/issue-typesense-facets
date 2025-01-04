import { client, schema } from "../lib/typesense";

function noop() {}

async function ingest() {
  await client.collections(schema.name).delete().catch(noop);
  await client.collections().create(schema);

  const input = [
    { name: "fruit-salad-1", fruits: ["apple", "banana"] },
    { name: "fruit-salad-2", fruits: ["apple", "cherry"] },
    { name: "fruit-salad-3", fruits: ["apple", "orange"] },
    { name: "fruit-salad-4", fruits: ["apple", "mango"] },
    { name: "fruit-salad-5", fruits: ["apple", "apricot"] },
    { name: "fruit-salad-6", fruits: ["apple", "blueberry"] },
    { name: "fruit-salad-7", fruits: ["apple", "pineapple"] },
    { name: "fruit-salad-8", fruits: ["apple", "raspberry"] },
    { name: "fruit-salad-9", fruits: ["apple", "strawberry"] },
    { name: "fruit-salad-10", fruits: ["pear", "kiwi"] },
  ];

  await client.collections(schema.name).documents().import(input);
}

ingest()
  .then(() => {
    console.log("Done");
  })
  .catch((error) => {
    console.error("Failed.\n", error);
  });
