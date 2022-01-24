import { Formik } from 'formik';
import { View } from 'react-native';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';
import CreateUserForm from './CreateUserForm';
import useSignIn from '../hooks/useSignIn';

const initialValues = {
  username: '',
  password: '',
  confirmPassword: ''
};

const validationSchema = Yup.object().shape({
  username: Yup
    .string()
    .min(1, 'Username must have length between 1 and 30')
    .max(30, 'Username must have length between 1 and 30')
    .required('Username is required'),
  password: Yup
    .string()
    .min(5, 'Password must have length between 5 and 50')
    .max(50, 'Password must have length between 5 and 50')
    .required('Password is required'),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null])
    .required('Password confirm is required')
});

const CreateUser = () => {
  const [createUser] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await createUser({
        variables: { user: { username, password } }
      });

      if (data.createUser.username) {
        const { data } = await signIn({ username, password });
        if (data.authenticate.accessToken) {
          navigate('/');
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => <CreateUserForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default CreateUser;