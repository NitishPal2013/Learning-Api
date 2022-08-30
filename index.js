import mongodbConnector from '@fastify/mongodb';
import { ObjectID } from 'bson';
import Fastify from 'fastify'
import MongoDB from 'mongodb';
import dbConnector from './db-connector.js'
import firstRoute from './first-route.js'

const {MongoClient, ServerApiversion} = MongoDB;
/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
const fastify = Fastify({
  logger: true
})

const uri = 'mongodb+srv://NitishPal:Nitish2013@cluster0.tbk31rd.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);


// fastify.register(dbConnector)
// fastify.register(firstRoute)

// fastify.register(mongodbConnector,{
//   forceClose: true,
//   url: 'mongodb+srv://NitishPal:Nitish2013@cluster0.tbk31rd.mongodb.net/?retryWrites=true&w=majority'
// })

fastify.get('/',async (rep,req)=>{
  return {Status: "OK"}
})

fastify.get('/animals', function (req,rep){
  client.connect(err => {
    const collection = client.db("test_fastify-server").collection("Animals");
    collection.findOne({id:'630c9a4fb014b8710e64439c'}),(err,obj)=>{
      if (err) {
        rep.send(err);
      }
      else{
        rep.send({obj});
      }
    };
    client.close();
  });
})

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})