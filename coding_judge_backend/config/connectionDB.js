const { MongoClient, ServerApiVersion } = require('mongodb');

// Replace `<password>` with your actual MongoDB Atlas password
const uri = "mongodb+srv://user:6QoS3SqH1YkAiwWV@codingjudge.hun05xv.mongodb.net/codingjudge?retryWrites=true&w=majority&appName=codingjudge";
//var mongoDB = "mongodb+srv://arifa089:arifa089@cluster0.1bfpqsr.mongodb.net/db_ecom?retryWrites=true&w=majority";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
