const { faker } = require("@faker-js/faker");
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");

async function main() {
  const uri = "mongodb://localhost://27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const productsCollection = client
      .db("clothing-ordering")
      .collection("products");
    const categoriesCollection = client
      .db("clothing-ordering")
      .collection("categories");
    const sizesCollection = client.db("clothing-ordering").collection("sizes");

    let sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"].map((size) => {
      return { name: size };
    });
    await sizesCollection.insertMany(sizes);

    let categories = [
      "formal",
      "casual",
      "beachwear",
      "business",
      "sportswear",
      "other",
    ].map((category) => {
      return { name: category };
    });
    await categoriesCollection.insertMany(categories);

    let imageUrls = [
      "https://i.ibb.co/9Ycb9B0/jacket.webp",
      "https://i.ibb.co/KLhj5Wj/sweater.jpg",
      "https://i.ibb.co/0mK2PZC/pants.webp",
      "https://i.ibb.co/B2qdnpv/top.webp",
      "https://i.ibb.co/g4jMSNd/dress.webp",
    ];

    let products = [];
    for (let i = 0; i < 20; i += 1) {
      let newProduct = {
        name: faker.commerce.productName(),
        adjective: faker.commerce.productAdjective(),
        desciption: faker.commerce.productDescription(),
        size: _.sample(sizes),
        price: faker.commerce.price(25, 180),
        category: _.sample(categories),
        imageUrl: _.sample(imageUrls),
      };
      products.push(newProduct);
    }
    await productsCollection.insertMany(products);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main();
