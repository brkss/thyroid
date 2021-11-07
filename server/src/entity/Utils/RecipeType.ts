import { BaseEntity, Column, PrimaryGeneratedColumn, Entity } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity("recipe_types")
export class RecipeType extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;
}
