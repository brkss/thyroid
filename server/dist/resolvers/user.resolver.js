"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const default_response_1 = require("../helpers/inputs/responses/default.response");
const user_input_1 = require("../helpers/inputs/user.input");
const type_graphql_1 = require("type-graphql");
const User_1 = require("../entity/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
let UserResolver = class UserResolver {
    hello() {
        return 'hi!!';
    }
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!data.name || !data.email || !data.phone || !data.password) {
                return {
                    status: false,
                    message: 'invalid data'
                };
            }
            try {
                const hashedPassword = yield bcrypt_1.default.hash(data.password, 10);
                yield User_1.User.insert({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    password: hashedPassword
                });
                return {
                    status: true,
                    message: 'user created successfuly'
                };
            }
            catch (e) {
                console.log('error creatin user => ', e);
                return {
                    status: false,
                    message: 'Something went wrong creating your account!'
                };
            }
            return {
                status: true,
                message: 'User created successfuly!'
            };
        });
    }
};
__decorate([
    type_graphql_1.Query(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "hello", null);
__decorate([
    type_graphql_1.Mutation(() => default_response_1.DefaultResponse),
    __param(0, type_graphql_1.Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.RegisterUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map