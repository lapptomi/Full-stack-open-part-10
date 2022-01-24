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

const CreateUserForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" password />
      <FormikTextInput name="confirmPassword" placeholder="Confirm password" password />

      <Pressable style={styles.button} onPress={onSubmit}>
        <Text fontWeight="bold" color="white">Create user</Text>
      </Pressable>
    </View>
  );
};

export default CreateUserForm;