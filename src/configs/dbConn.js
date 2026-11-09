import fastifyPlugin from "fastify-plugin";
import fastifyPostgres from "@fastify/postgres";
import 'dotenv/config'

/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 */

async function dbConn (fastify, options) {
    fastify.register(fastifyPostgres, {
        connectionString: process.env.DATABASE_URL
    })
}

export default fastifyPlugin(dbConn)