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
exports.RecipeResolver = void 0;
const type_graphql_1 = require("type-graphql");
const recipe_ingredient_parser_v3_1 = require("recipe-ingredient-parser-v3");
const entity_1 = require("../../entity");
const default_response_1 = require("../../helpers/responses/default.response");
const axios_1 = __importDefault(require("axios"));
const api_1 = require("../../helpers/config/api");
const recipeScraper = require("recipe-scraper");
let RecipeResolver = class RecipeResolver {
    recipes() {
        return __awaiter(this, void 0, void 0, function* () {
            const recipes = yield entity_1.Recipe.find({
                relations: ["ingredients", "instructions"],
            });
            return recipes;
        });
    }
    downloadRecipe(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!url)
                return {
                    status: false,
                    message: "Invalid URL !",
                };
            try {
                const recipe_raw = yield recipeScraper(url);
                const recipe = new entity_1.Recipe();
                recipe.title = recipe_raw.name;
                recipe.description = recipe_raw.description;
                recipe.prep = recipe_raw.time.prep;
                recipe.cook = recipe_raw.time.cook;
                recipe.ready = recipe_raw.time.active;
                recipe.total = recipe_raw.time.total;
                recipe.servings = recipe_raw.servings;
                recipe.image = recipe_raw.image;
                recipe.url = url;
                yield recipe.save();
                const res = yield axios_1.default.post(api_1.API_URI, {
                    title: recipe_raw.name,
                    ingr: recipe_raw.ingrdients,
                });
                console.log("================");
                console.log("Recipe Nutriotion !");
                console.log(res.data);
                console.log("==============");
                for (let ing of recipe_raw.ingredients) {
                    const ingredient = new entity_1.Ingredient();
                    const parsed = recipe_ingredient_parser_v3_1.parse(ing, "eng");
                    ingredient.quantity = parsed.quantity || null;
                    ingredient.unit = parsed.unit;
                    ingredient.pluralUnit = parsed.unitPlural;
                    ingredient.symbol = parsed.symbol;
                    ingredient.minQty = parsed.minQty;
                    ingredient.maxQty = parsed.maxQty;
                    ingredient.raw = ing;
                    ingredient.recipe = recipe;
                    yield ingredient.save();
                }
                for (let ins of recipe_raw.instructions) {
                    const instruction = new entity_1.Instruction();
                    instruction.text = ins;
                    instruction.recipe = recipe;
                    yield instruction.save();
                }
                return {
                    status: true,
                    message: "Recipe Imported successfuly !",
                };
            }
            catch (e) {
                console.log("error accured downloading recipe !", e);
                return {
                    status: false,
                    message: "Something went wrong ! ",
                };
            }
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [entity_1.Recipe]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "recipes", null);
__decorate([
    type_graphql_1.Mutation(() => default_response_1.DefaultResponse),
    __param(0, type_graphql_1.Arg("url")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "downloadRecipe", null);
RecipeResolver = __decorate([
    type_graphql_1.Resolver()
], RecipeResolver);
exports.RecipeResolver = RecipeResolver;
//# sourceMappingURL=recipe.resolver.js.map