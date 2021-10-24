import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { Ingredient } from "./Ingredient";
import { Instruction } from "./Instruction";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity("recipes")
export class Recipe extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  prep?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  cook?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  ready?: "";

  @Field({ nullable: true })
  @Column({ nullable: true })
  servings?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  image?: string;

  @Field(() => [Ingredient], { nullable: true })
  @OneToMany(() => Ingredient, (ingredients) => ingredients.recipe)
  ingredients: Ingredient[];

  @Field(() => [Instruction], { nullable: true })
  @OneToMany(() => Instruction, (instruction) => instruction.recipe)
  instructions: Instruction;
}
