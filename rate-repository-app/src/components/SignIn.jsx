import { Formik } from 'formik';
import { View } from 'react-native';
import SignInForm from './SignInForm';

const initialValues = {
  username: '',
  password: '',
};

const onSubmit = (values) => {
  console.log('VALUES: ', values);
};

const SignIn = () => {
  return (
    <View>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;