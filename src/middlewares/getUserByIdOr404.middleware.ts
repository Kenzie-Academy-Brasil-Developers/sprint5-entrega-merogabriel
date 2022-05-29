import { userRepository } from '../repository'
import { Request, Response, NextFunction } from 'express'

const getUserByIdOr404 = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { uuid } = req.params

  try {
    const user = await userRepository.retrieve({ uuid })
    req.user = user
  } catch (err) {
    return res.status(404).json({ message: 'User not found.' })
  }

  return next()
}

export default getUserByIdOr404
