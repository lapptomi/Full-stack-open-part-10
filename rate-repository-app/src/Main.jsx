import { StyleSheet, View } from 'react-native';
import RepositoryList from './components/RepositoryList';
import AppBar from './components/AppBar';
import theme from '../theme';
import { Navigate, Route, Routes } from 'react-router';
import SignIn from './components/SignIn';
import SingleRepository from './components/RepositoryPage';
import CreateReview from './components/CreateReview';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/repository/:repositoryId" element={<SingleRepository />} exact />
        <Route path="/reviews/create" element={<CreateReview />} exact />
        <Route path="/login" element={<SignIn />} exact />
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;