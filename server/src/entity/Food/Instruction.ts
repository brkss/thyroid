import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Recipe } from "./Recipe";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity("instructions")
export class Instruction extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  text: string;

  @Field(() => Recipe)
  @ManyToOne(() => Recipe, (recipe) => recipe.instructions, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  recipe: Recipe;
}
