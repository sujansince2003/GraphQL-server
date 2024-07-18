import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./_db.js";

//types
import { typeDefs } from "./schema.js";

//defing the resolver functions
const resolvers = {
  Query: {
    //the keyword Query should exact match to type we defined in schema or typeDefs
    games() {
      //this is resolver function for games and the keyword games should exact match to type we defined in schema or typeDefs inside type Query
      return db.games; //in typeQuery it is defined to return array so it also need to return array here too. and we may only need title of game from array of objects of gamedata but apollo will handle itself.all it need to know is where to grab data from
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
    review(
      _,
      args // receives 3 arguments: parent,args i.e arguments,context. we can get any query variable send by used in this args variable. we have defined in type Query that it receives id as argument so using it
    ) {
      return db.reviews.find((review) => review.id === args.id);
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
  },
};

// setting up server

const server = new ApolloServer({
  typeDefs, //this will tell ApolloServer about  data types and entry points available
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);
