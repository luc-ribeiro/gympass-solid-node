import { makeGetUserMetricsUseCase } from '@/use-cases/factories/make-get-user-metrics-use-case'
import { type FastifyReply, type FastifyRequest } from 'fastify'

export async function metrics (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
  const getUserMetricsUseCase = makeGetUserMetricsUseCase()

  const { checkInsCount } = await getUserMetricsUseCase.execute({ userId: request.user.sub })

  return await reply.status(200).send({
    checkInsCount
  })
}
