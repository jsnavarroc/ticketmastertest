import * as yup from 'yup';

export const configureYup = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = yup.object().shape({
    email: yup.string().email(),
    mobileNumber: yup
      .string()
      .required('required')
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, 'to short')
      .max(10, 'to long'),
  });
  return validationSchema;
};

export const pesistElements = async newRegister => {
  let data = {};
  try {
    data = await fetch('/api/waiting-list', {
      method: 'post',
      body: JSON.stringify(newRegister),
    });
  } catch (error) {
    data = { status: 500 };
  }
  return data?.status === 201 ? data.status : 500;
};
