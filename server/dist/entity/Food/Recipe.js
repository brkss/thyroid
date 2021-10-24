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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const typeorm_1 = require("typeorm");
const Ingredient_1 = require("./Ingredient");
const Instruction_1 = require("./Instruction");
const type_graphql_1 = require("type-graphql");
let Recipe = class Recipe extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Recipe.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Recipe.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Recipe.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Recipe.prototype, "prep", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Recipe.prototype, "cook", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Recipe.prototype, "ready", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Recipe.prototype, "servings", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Recipe.prototype, "image", void 0);
__decorate([
    type_graphql_1.Field(() => [Ingredient_1.Ingredient], { nullable: true }),
    typeorm_1.OneToMany(() => Ingredient_1.Ingredient, (ingredients) => ingredients.recipe),
    __metadata("design:type", Array)
], Recipe.prototype, "ingredients", void 0);
__decorate([
    type_graphql_1.Field(() => [Instruction_1.Instruction], { nullable: true }),
    typeorm_1.OneToMany(() => Instruction_1.Instruction, (instruction) => instruction.recipe),
    __metadata("design:type", Instruction_1.Instruction)
], Recipe.prototype, "instructions", void 0);
Recipe = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity("recipes")
], Recipe);
exports.Recipe = Recipe;
//# sourceMappingURL=Recipe.js.map