import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//types
import { typeDefs } from "./schema";

// setting up server

const server = new ApolloServer({
  typeDefs, //this will tell ApolloServer about  data types and entry points available
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
