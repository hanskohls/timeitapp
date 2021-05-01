import "reflect-metadata";
import dotenv from 'dotenv';
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from 'type-graphql';
import { TimeItTaskResolver } from './resolvers/TimeItTaskResolver';


async function main() {
    dotenv.config()
    const connection = await createConnection({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT || '5432'),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: [__dirname + '/models/*'],
        synchronize: true,
    });

    const schema = await buildSchema({
        resolvers: [
            TimeItTaskResolver,
        ],
    });
    const server = new ApolloServer({ schema })
    await server.listen(4000)
    console.log("Server has started!")
}

main()

