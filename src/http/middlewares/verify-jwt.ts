import { type FastifyReply, type FastifyRequest } from 'fastify'

export async function verifyJWT (request: FastifyRequest, reply: FastifyReply): Promise<undefined> {
  try {
    await request.jwtVerify()
  } catch (err) {
    return await reply.status(401).send({ message: 'Unauthorized' })
  }
}
