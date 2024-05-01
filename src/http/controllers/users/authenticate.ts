import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error'
import { makeAuthenticateUseCase } from '@/use-cases/factories/make-authenticate-use-case'
import { type FastifyReply, type FastifyRequest } from 'fastify'
import z from 'zod'

export async function authenticate (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
  })

  const { email, password } = authenticateBodySchema.parse(request.body)

  try {
    const registerUseCase = makeAuthenticateUseCase()

    const { user } = await registerUseCase.execute({ email, password })

    const token = await reply.jwtSign({
      role: user.role
    }, {
      sign: {
        sub: user.id
      }
    })

    const refreshToken = await reply.jwtSign({
      role: user.role
    }, {
      sign: {
        sub: user.id,
        expiresIn: '7d'
      }
    })

    return await reply.setCookie('refreshToken', refreshToken, {
      path: '/', secure: true, sameSite: true, httpOnly: true
    }).status(200).send({
      token
    })
  } catch (err) {
    if (err instanceof InvalidCredentialsError) {
      return await reply.status(400).send({ message: err.message })
    }

    throw err
  }
}
