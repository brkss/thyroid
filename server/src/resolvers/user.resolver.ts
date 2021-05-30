import { DefaultResponse } from '../helpers/inputs/responses/default.response';
import { RegisterUserInput } from '../helpers/inputs/user.input';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../entity/User';
import bcrypt from 'bcrypt';

@Resolver()
export class UserResolver {

    @Query(() => String)
    hello(){
        return 'hi!!'
    }

    @Mutation(() => DefaultResponse)
    async register(@Arg('data') data : RegisterUserInput ) : Promise<DefaultResponse>{
        // validate 
        if(!data.name || !data.email || !data.phone || !data.password){
            return {
                status: false,
                message: 'invalid data'
            }
        }

        try {
            const hashedPassword = await bcrypt.hash(data.password, 10);
            await User.insert({
                name: data.name,
                email: data.email,
                phone: data.phone,
                password: hashedPassword
            });
            return {
                status: true,
                message: 'user created successfuly'
            }

        }catch(e){
            console.log('error creatin user => ', e);
            return {
                status: false,
                message: 'Something went wrong creating your account!'
            }
        }

        return {
            status: true,
            message: 'User created successfuly!'
        }


    }

}