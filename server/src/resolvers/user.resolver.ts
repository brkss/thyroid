import { LoginUserInput, RegisterUserInput } from '../helpers/inputs/user.input';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../entity/User';
import bcrypt from 'bcrypt';
import { AuthResponse } from '../helpers/responses/auth.response';

@Resolver()
export class UserResolver {

    @Query(() => String)
    hello(){
        return 'hi!!'
    }

    @Mutation(() => AuthResponse)
    async login(@Arg('data') data : LoginUserInput ) : Promise<AuthResponse>{
        
        if(!data.identifier){
            return {
                status: false,
                message: 'Invalid Email/Phone'
            }
        }
        if(!data.password){
            return {
                status: false,
                message: 'Invalid password'
            }
        }

        const user = await User.findOne({where: [{email: data.identifier}, {phone: data.identifier}]});
        if(!user){
            return {
                status: false,
                message: 'Invalid Email/Phone'
            }
        }
        const verify = await bcrypt.compare(data.password, user.password);
        if(!verify){
            return {
                status: false,
                message: 'Incorrect password!'
            }
        }

        // successfuly logged in

        return {
            status: true,
            accessToken: 'lsdfjksdfjlkds'
        }
    }

    @Mutation(() => AuthResponse)
    async register(@Arg('data') data : RegisterUserInput ) : Promise<AuthResponse>{
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
                accessToken: 'lsfjlkdjflkdsjfsd'
            }

        }catch(e){
            console.log('error creatin user => ', e);
            return {
                status: false,
                message: 'Something went wrong creating your account!'
            }
        }

    }

}