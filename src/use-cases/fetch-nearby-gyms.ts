import { type GymsRepository } from '@/repositories/gyms-repository'
import { type Gym } from '@prisma/client'

interface FetchNearbyGymsUseCaseRequest {
  userLatitude: number
  userLongitude: number
}

interface FetchNearbyGymsUseCaseResponse {
  gyms: Gym[]
}

export class FetchNearbyGymsUseCase {
  constructor (private readonly gymsRepository: GymsRepository) {}

  async execute ({ userLatitude, userLongitude }: FetchNearbyGymsUseCaseRequest): Promise<FetchNearbyGymsUseCaseResponse> {
    const gyms = await this.gymsRepository.findManyNearby(
      { latitude: userLatitude, longitude: userLongitude }
    )

    return { gyms }
  }
}
