import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const pyrex = [
            {
                id: 0,
                pattern: 'Gooseberry',
                size: '441',
                color: 'pink',
                condition: [
                    'DWD'
                ]
            },
            {
                id: 1,
                pattern: 'Balloons',
                size: '441',
                color: 'turquoise',
                condition: [
                    'excellent'
                ]
            },
            {
                id: 2,
                pattern: 'Yoga Butts',
                size: '401',
                color: 'white',
                condition: [
                    'DWD'
                ]
            },
            {
                id: 3,
                pattern: 'Balloons',
                size: '444',
                color: 'turquoise',
                condition: [
                    'flea bites',
                    'DWD'
                ]
            }
        ];

        return { pyrex };
    }
}