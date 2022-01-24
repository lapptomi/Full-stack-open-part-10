import { Pressable, View, StyleSheet } from "react-native";
import theme from "../../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    padding: 15,
    margin: 10,
    borderRadius: 5
  }
});

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="ownerName" placeholder="Repository owner Name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="review" placeholder="Review" />

      <Pressable style={styles.button} onPress={onSubmit}>
        <Text fontWeight="bold" color="white">Create review</Text>
      </Pressable>
    </View>
  );
};

export default CreateReviewForm;