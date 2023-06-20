import { MuzeAction } from '@muze/interfaces/MuzeAction';
import { MuzeCommand } from '@muze/interfaces/MuzeCommand';

export namespace MuzeCommands {
  export const ValidCommands: MuzeCommand[] = [
    {
      code: '/v',
      displayText: 'View all',
    },
    {
      code: '/f',
      displayText: 'Find',
    },
  ];

  export const ViewAllBooks: MuzeAction = {
    code: '/v books',
    displayText: 'View all Books',
    description: 'View all Books in your Library.',
    href: '/books',
  };

  export const ValidActions: MuzeAction[] = [
    {
      code: '/v books',
      displayText: 'View all Books',
      description: 'View all Books in your Library.',
      href: '/books',
    },
  ];

  export const ValidDestinations: string[] = [
    'artists',
    'books',
    'manga',
    'publishers',
    'series',
    'tvseries',
    'tvseriesepisodes',
    'episodes',
    'seriesepisodes',
  ];
}

//   {
//     code: '/g books',
//     displayText: 'Go to Books',
//     description: 'Go to the Books page.'
//   },
//   {
//     code: '/f',
//     displayText: 'Find',
//     description: 'Search for the specified Entry.'
//   },
//   {
//     code: '/v books',
//     displayText: 'View all Books',
//     description: 'View all Books in your Library.'
//   }
// ]
