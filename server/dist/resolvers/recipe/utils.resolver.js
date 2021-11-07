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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUtilsResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Time_1 = require("../../entity/Utils/Time");
const RecipeType_1 = require("../../entity/Utils/RecipeType");
let RecipeUtilsResolver = class RecipeUtilsResolver {
    times() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Time_1.Time.find();
        });
    }
    recipeTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield RecipeType_1.RecipeType.find();
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Time_1.Time]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipeUtilsResolver.prototype, "times", null);
__decorate([
    type_graphql_1.Query(() => [RecipeType_1.RecipeType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipeUtilsResolver.prototype, "recipeTypes", null);
RecipeUtilsResolver = __decorate([
    type_graphql_1.Resolver()
], RecipeUtilsResolver);
exports.RecipeUtilsResolver = RecipeUtilsResolver;
//# sourceMappingURL=utils.resolver.js.map