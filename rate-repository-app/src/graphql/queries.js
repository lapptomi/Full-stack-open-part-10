import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          description
          language
          ownerAvatarUrl
          forksCount
        }
      }
    }
  }
`;

export const FIND_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      language
      ownerAvatarUrl
      description
      forksCount
      stargazersCount
      reviewCount
      ratingAverage
      fullName
      url
    }
  }
`;

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;