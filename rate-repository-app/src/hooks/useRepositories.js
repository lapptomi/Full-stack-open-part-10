import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderDirection, orderBy }, keyword) => {
  const [repositories, setRepositories] = useState();
  
  const { loading, data } = useQuery(GET_REPOSITORIES, {
    variables: { orderDirection, orderBy, searchKeyword: keyword },
    fetchPolicy: 'cache-and-network'
  });
  
  const fetchRepositories = async () => {
    if (!loading) {
      setRepositories(data.repositories);
    }
  };

  useEffect(() => {
    fetchRepositories()
  }, [loading]);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;