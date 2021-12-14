import { createConnection } from "typeorm"
import { Client } from "./entities/Client"
const main = async () => {
    try {
        const connection = await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'docker',
            password: 'ignite',
            database: 'rentx',
            entities: [Client],
            synchronize: true
        })
        console.log('Connection successfully to postgres..')
    } catch (error) {
        console.error(error)
        throw new Error('Unable to connect to database.')
    }
}

main()