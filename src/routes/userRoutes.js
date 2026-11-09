import * as userController from '../controllers/userController.js'

export default function userRoutes(fastify, options, done) {
  fastify.get('/users', userController.getUsers)
  fastify.get('/users/:id', userController.getUserById)
  fastify.post('/users', userController.createUser)
  fastify.put('/users/:id', userController.updateUser)
  fastify.delete('/users/:id', userController.deleteUser)
  
  done()
}