//we are exporting typeDefs to pass it as argument in ApolloServer in index.js

export const typeDefs = `#graphql 
# we are having 3 data object game,review and auth object

type Game{
  id:ID!           #   if we add ! it means it cannot be null   
  title:String
  platform: [String!]!
  reviews:[Review!]
  
}

type Review{
    id:ID! 
    rating: Int! 
    content: String!
    game_id:String!
    game:Game!     #every review is associated with author and game so it has field game and author
    author:Author!
   

}

type Author {
    id:ID! 
    name: String!
    verified:Boolean!
    reviews:[Review!]
    
}
#we have made our data type schema but need to create one more special type i.e Query.its not optional. it is used to define the entry point to the graph and specify the return types of those entries.  user can only access to those data object specified inside Query type as return item. for eg 

type Query{
    reviews:[Review]      #for getting all reviews thats why it is in array
    review(id:ID!):Review   #for getting single review
    games: [Game]
    game(id:ID!):Game
    authors:[Author]
    author(id:ID!):Author
}
`;
