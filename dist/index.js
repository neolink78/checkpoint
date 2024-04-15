"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const countrySchema_1 = require("./entities/countrySchema");
const countryResolver_1 = require("./resolvers/countryResolver");
const dataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "db.sqlite",
    entities: [countrySchema_1.Country],
    synchronize: true,
});
const PORT = 4000;
const startApolloServer = async () => {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [countryResolver_1.CountryResolver],
        validate: true
    });
    const server = new server_1.ApolloServer({ schema });
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: PORT },
    });
    await dataSource.initialize();
    console.log(`🚀  Server ready at: ${url}`);
};
startApolloServer();
