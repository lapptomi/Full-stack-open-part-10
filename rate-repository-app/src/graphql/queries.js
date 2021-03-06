import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query GetRepositories(
    $orderBy: AllRepositoriesOrderBy,
    $orderDirection: OrderDirection,
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy,
      orderDirection: $orderDirection,
      searchKeyword: $searchKeyword
    ) {
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
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const ME = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            createdAt
            rating
            repositoryId
            repository {
              fullName
            }
          }
        }
      }
    }
  }
`;