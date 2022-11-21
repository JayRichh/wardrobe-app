const MongoClient = require("mongodb").MongoClient;

async function main() {
  const uri = "mongodb://localhost://27017";
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // const productsCollection = client
    const stylersCollection = client.db("clothing-ordering").collection("stylers");

    // user randomuser.me api to generate 5x random female users
    const response = await fetch("https://randomuser.me/api/?results=5&gender=female");
    const data = await response.json();
    const users = data.results;

    // create an array of stylers
    let stylers = users.map((user) => {
      return {
        name: `${user.name.first} ${user.name.last}`,
        username: user.login.username,
        description: user.location.street.name,
        imageUrl: user.picture.large,
      };
    });

    // insert the stylers into the database
    await stylersCollection.insertMany(stylers);
  } catch (e) {
    console.error(e);
  }
}

main();