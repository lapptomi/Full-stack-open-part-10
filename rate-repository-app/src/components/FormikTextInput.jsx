import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  textInput: {
    padding: 15,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 5
  },
  textErrorInput: {
    padding: 15,
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'red'
  },
  errorText: {
    margin: 10,
    color: 'red',
    marginTop: 5,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={showError ? styles.textErrorInput : styles.textInput}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;