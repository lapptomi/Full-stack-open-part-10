
import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/RepositoryList';

describe('Example', () => {
  it('works', () => {
    expect(1).toBe(1);
  });
});

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      // Add your test code here
      const { debug, getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      debug();
      
      for (let i = 0; i < repositories.edges.length; i++) {
        const roundNumber = (value) => value > 1000 
          ? `${Math.round(value / 100) / 10}k` : value

        expect(getAllByTestId('language')[i]).toHaveTextContent(repositories.edges[i].node.language);
        expect(getAllByTestId('description')[i]).toHaveTextContent(repositories.edges[i].node.description);
        expect(getAllByTestId('forksCount')[i]).toHaveTextContent(roundNumber(repositories.edges[i].node.forksCount));
        expect(getAllByTestId('ratingAverage')[i]).toHaveTextContent(roundNumber(repositories.edges[i].node.ratingAverage));
        expect(getAllByTestId('reviewCount')[i]).toHaveTextContent(roundNumber(repositories.edges[i].node.reviewCount));
        expect(getAllByTestId('fullName')[i]).toHaveTextContent(repositories.edges[i].node.fullName);
        expect(getAllByTestId('stargazersCount')[i]).toHaveTextContent(roundNumber(repositories.edges[i].node.stargazersCount));
      }

    });
  });
});