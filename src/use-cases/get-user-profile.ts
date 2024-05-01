import { type UsersRepository } from '@/repositories/users-repository'
import { type User } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetUserProfileUseCaseRequest {
  userId: string
}

interface GetUserProfileUseCaseResponse {
  user: User
}

export class GetUserProfileUseCase {
  constructor (private readonly usersRepository: UsersRepository) {
  }

  async execute ({ userId }: GetUserProfileUseCaseRequest): Promise<GetUserProfileUseCaseResponse> {
    const user = await this.usersRepository.findById(userId)

    if (user === null) {
      throw new ResourceNotFoundError()
    }

    return {
      user
    }
  }
}
