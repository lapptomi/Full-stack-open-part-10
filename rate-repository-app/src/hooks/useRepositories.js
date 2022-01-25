import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortBy) => {
  const [repositories, setRepositories] = useState();

  const orderVariables = () => {
    switch (sortBy) {
      case 'rating_desc':
        return {
          orderDirection: 'DESC',
          orderBy: 'RATING_AVERAGE'
        }
      case 'rating_asc':
        return {
          orderDirection: 'ASC',
          orderBy: 'RATING_AVERAGE'
        }
      default:
        return null;
    }
  }
  
  const { loading, data } = useQuery(GET_REPOSITORIES, {
    variables: orderVariables(),
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