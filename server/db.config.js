// const dbName = 'clothing-ordering';
// const dbHost = 'localhost';
// const dbPort = 27017;
// const uri = "mongodb+srv://jsrich:Sp00kMyN00g!@cluster0.vhzrp69.mongodb.net/?retryWrites=true&w=majority";
// module.exports = {
//   uri,
// };

const dbName = 'clothing-ordering';
const dbHost = 'localhost';
const dbPort = 27017;
module.exports = {
    url: `mongodb://${dbHost}:${dbPort}/${dbName}`
}