import * as yup from 'yup'

const orderFormSchema = yup.object().shape({
    
    name: yup 
        .string(),
    size: yup
        .string()
        .email("Must be a valid email address.") // this is an error
        .required("Must include email address."), 
    
    pepperoni: yup
        .boolean(),

    bacon: yup
        .boolean(),

    onion: yup
        .boolean(),

    peppers: yup
        .boolean(),

    dicedTomatoes:yup
        .boolean(),

    glutenFree:yup
        .boolean(),

    instructions: yup
        .string(),

})

export default orderFormSchema