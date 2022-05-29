import { Router } from 'express'
import { getUserByIdOr404 } from '../middlewares'
import { userController } from '../controllers'

const router = Router()

router.post('/users', userController.insertUserController)

router.get('/users', userController.getAllUsersController)

router.get(
  '/users/:uuid',
  getUserByIdOr404,
  userController.getUserByIdController
)

router.patch(
  '/users/:uuid',
  getUserByIdOr404,
  userController.updateUserController
)

router.delete(
  '/users/:uuid',
  getUserByIdOr404,
  userController.deleteUserController
)

export default router
