import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class SingUpsController {
  public async userStore({ request, response }: HttpContext) {
    const { email, password, fullName } = request.only(['email', 'password', 'fullName'])
    await User.create({ email, password, fullName })

    return response.redirect('/loginView')
  }
}
