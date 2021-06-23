import { ConnectionOptions } from "typeorm";

export const ormConfig: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Shivam123@',
    database: 'eclass',
    synchronize: true,
    entities: [
        'src/models/*.ts'
    ]
}
