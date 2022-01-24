import { Formik } from 'formik';
import { View } from 'react-native';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-native';
import CreateReviewForm from './CreateReviewForm';
import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  review: ''
};

const validationSchema = Yup.object().shape({
  ownerName: Yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: Yup
    .string()
    .required('Repository name is required'),
  rating: Yup
    .number()
    .min(0, 'Number must be between 0-100')
    .max(100, 'Number must be between 0-100')
    .required('Rating is required'),
  review: Yup
    .string()
    .required('Password is required')
});

const CreateReview = () => {
  const [createReview] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, review } = values;

    try {
      const { data } = await createReview({
        variables: {
          review: {
            ownerName,
            repositoryName,
            rating: Number(rating),
            text: review
          }
        }
      });
      if (data.createReview.repositoryId) {
        navigate(`/repository/${data.createReview.repositoryId}`);
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
        {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default CreateReview;