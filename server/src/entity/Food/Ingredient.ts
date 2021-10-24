import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Recipe } from "./Recipe";

@Entity("ingredients")
export class Ingredient extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  quantity?: number;

  @Column({ nullable: true })
  unit?: string;

  @Column({ nullable: true })
  pluralUnit?: string;

  @Column({ nullable: true })
  symbol?: string;

  @Column({ nullable: true })
  text?: string;

  @Column({ nullable: true })
  minQty?: number;

  @Column({ nullable: true })
  maxQty?: number;

  @Column({ nullable: true })
  raw?: string;

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  recipe: Recipe;
}
