import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { loginValidator } from '#validators/sign_up'

export default class SessionController {
  public async store({ auth, request, response }: HttpContext) {
    // const { email, password } = request.only(['email', 'password'])

    // const user = await User.verifyCredentials(email, password)

    // await auth.use('web').login(user)

    // response.redirect('/dashboardView')

    const { email, password } = await request.validateUsing(loginValidator)
    const user = await User.verifyCredentials(email, password)
    await auth.use('web').login(user)
    response.redirect('/dashboardView')
  }
}
