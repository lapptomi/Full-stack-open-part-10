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


const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" password />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text fontWeight="bold" color="white">Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;