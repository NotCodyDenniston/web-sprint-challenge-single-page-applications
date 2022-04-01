import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Username is required, dummy.")
    .min(2, "name must be at least 2 characters"),
  size: yup
    .boolean()
    .required('How big u want it bro'),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  cheese: yup.boolean(),
  bacon: yup.boolean(),
  special: yup
    .string()

})

export default formSchema;