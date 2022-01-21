import { Formik } from 'formik';
import { View } from 'react-native';
import SignInForm from './SignInForm';
import * as Yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  username: Yup
    .string()
    .required('Username is required'),
  password: Yup
    .string()
    .required('Password is required')
});

const onSubmit = (values) => {
  console.log('VALUES: ', values);
};

const SignIn = () => {
  return (
    <View>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;