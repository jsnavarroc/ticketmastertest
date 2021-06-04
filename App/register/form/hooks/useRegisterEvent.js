import { useState } from 'react';
import { useFormik } from 'formik';
import { useStorage } from '../../../storage/index';
import { configureYup, pesistElements, controlErrorMessage } from './functions';

const useRegisterEvent = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useStorage();
  const formik = useFormik({
    initialValues: {
      email: '',
      mobileNumber: '',
    },
    validationSchema: configureYup(),
    onSubmit: async values => {
      setLoading(true);
      const status = await pesistElements({
        emailAddress: values.email,
        mobileNumber: values.mobileNumber,
      });
      status && setLoading(false);
      status === 500 &&
        controlErrorMessage({
          dispatch,
          codeExute: 'checkSessions',
          title: 'Registration error',
          message: "Your registration wasn't possible; please try again later.",
        });
      formik.handleReset();
    },
  });

  return { formik, loading };
};
export default useRegisterEvent;
