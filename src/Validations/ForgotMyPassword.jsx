import * as yup from "yup"

export const ForgotMyPasswordSchema = yup.object().shape({
  email: yup.string().email().required(),
})