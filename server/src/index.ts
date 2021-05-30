import 'dotenv/config';
import "reflect-metadata";
import express from 'express';
import {createConnection} from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from 'type-graphql';
import { UserResolver } from "./resolvers/user.resolver";


(async () => {

    
    await createConnection();
    
    const app = express();
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver],
        })
    });
 
    

    apolloServer.applyMiddleware({app});

    app.get('/', (_, res) => {
        res.send('hello world from express');
    });
    app.listen(4000, () => {
        console.log('server started at http://127.0.0.1:4000 ');
    })

})(); 

/* createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
 */