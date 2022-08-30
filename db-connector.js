import fastifyPlugin from 'fastify-plugin';
import fastifyMongodb from '@fastify/mongodb';


export default fastifyPlugin( async function dbConnector (fastify, options) {
    fastify.register(fastifyMongodb,{
        url: 'The uri provided by the mongodb'
    })
})
