// import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';
// import * as dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import allTypeDefs from './schemas/index.schema.js';
// import allResolvers from './resolvers/index.resolver.js';
// import context from './context/context.js';

// dotenv.config();

// // “merging” types and resolvers
// const server = new ApolloServer({
//   typeDefs: allTypeDefs,
//   resolvers: allResolvers,
//   includeStacktraceInErrorResponses: false, //to exclude stackTrace parameter from error messages
//   introspection: true,
// });

// const mongoDB = process.env.MONGODB_URL;

// mongoose.set('strictQuery', true);
// mongoose
//   .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB..');
//     return startStandaloneServer(server, {
//       listen: { port: process.env.PORT },
//       context: context,
//     });
//   })
//   .then((server) => {
//     console.log(`🚀  Server ready at: ${server.url}`);
//   });

// const str = "sharath chander";

// function countReaptedString(str) {
//   const regex = /[a-z]/g;
//   const matches = str.match(regex);
//   const count = {};
//   console.log(matches);
//   matches.forEach((letter) => {
//     count[letter] = (count[letter] || 0) + 1;
//   });
//   return count;
// }

// const countsLetter = countReaptedString(str);
// console.log(countsLetter);


// Given a sorted array and a number x, 
// find a pair in an array whose sum is closest to x.
// Input: arr[] = [10, 22, 28, 29, 30, 40], x = 54
// Output: 22 and 30

let arr = [10, 22, 28, 29, 30, 40]
let x = 54


function getNearestValue(arrys, value){
  let nearestValue = arrys[0];

  let minDiff = Math.abs(value - nearestValue);
  // console.log(minDiff)
  for(let arry of arrys ){
    const difference = Math.abs(nearestValue,value)
    // console.log(difference)
    if(difference < minDiff){
      minDiff = difference
      nearestValue = arry
    }
  }
  return nearestValue
}


// let output = getNearestValue(arr,x)
console.log(getNearestValue(arr,x))
