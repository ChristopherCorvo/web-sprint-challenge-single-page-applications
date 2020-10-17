import * as yup from 'yup'

const orderFormSchema = yup.object().shape({
    
    name: yup 
        .string()
        .min(3, "Must have more than three characters")
        .required('You must input a name.'),
    size: yup
        .string()
        .oneOf(['Small', 'Medium', 'Large', 'X-Large'], "You must select a size")
        .required('You must select a size'),
    
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
        .string()
})

export default orderFormSchema