import { object, string,number  } from 'yup';

export const  userDetailsSchema = object({
    userName: string().required('Name is required'),
    mobileNumber: number().required('Mobile Number is required'),
    qualification:string().required('Qualification is required'),
    state:string().required(),

});