import vine from '@vinejs/vine'

export const signUpValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim().minLength(3).maxLength(50),
    email: vine.string().trim().email(),
    password: vine.string().minLength(8).maxLength(100),
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().trim().email(),
    password: vine.string().trim().minLength(8).maxLength(100),
  })
)
