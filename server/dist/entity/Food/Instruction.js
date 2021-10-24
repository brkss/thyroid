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
exports.Instruction = void 0;
const typeorm_1 = require("typeorm");
const Recipe_1 = require("./Recipe");
const type_graphql_1 = require("type-graphql");
let Instruction = class Instruction extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Instruction.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Instruction.prototype, "text", void 0);
__decorate([
    type_graphql_1.Field(() => Recipe_1.Recipe),
    typeorm_1.ManyToOne(() => Recipe_1.Recipe, (recipe) => recipe.instructions, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Recipe_1.Recipe)
], Instruction.prototype, "recipe", void 0);
Instruction = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity("instructions")
], Instruction);
exports.Instruction = Instruction;
//# sourceMappingURL=Instruction.js.map