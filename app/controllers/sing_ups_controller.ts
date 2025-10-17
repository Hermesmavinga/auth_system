import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { signUpValidator } from '#validators/sign_up'

export default class SingUpsController {
  public async userStore({ request, response }: HttpContext) {
    // const { email, password, fullName } = request.only(['email', 'password', 'fullName'])
    // await User.create({ email, password, fullName })

    const data = await request.validateUsing(signUpValidator)

    await User.create(data)

    return response.redirect('/loginView')
  }
}
