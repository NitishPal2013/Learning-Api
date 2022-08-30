import fastifyPlugin from 'fastify-plugin';
import fastifyMongodb from '@fastify/mongodb';


export default fastifyPlugin( async function dbConnector (fastify, options) {
    fastify.register(fastifyMongodb,{
        url: 'mongodb+srv://NitishPal:Nitish2013@cluster0.tbk31rd.mongodb.net/?retryWrites=true&w=majority'
    })
})