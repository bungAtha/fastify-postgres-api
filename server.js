import 'dotenv/config'
import Fastify from "fastify";
import userRoutes from "./src/routes/userRoutes.js";
import dbConn from "./src/configs/dbConn.js"
/**
 * @type {import('fastify').FastifyInstance}
 */
const fastify = Fastify({
  logger: true,
});

const PORT = process.env.PORT

fastify.register(userRoutes)
fastify.register(dbConn)

fastify.listen({port: Number(PORT)}).then((address) => {
    console.log(`Server berjalan di ${address}`)
}).catch((err) => {
    fastify.log.error(err)
    process.exit(1)
})