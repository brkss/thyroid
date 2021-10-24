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
@Entity("ingredients")
export class Ingredient extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  quantity?: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  unit?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  pluralUnit?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  symbol?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  text?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  minQty?: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  maxQty?: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  raw?: string;

  @Field(() => Recipe)
  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  recipe: Recipe;
}
