import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { Ingredient } from "./Ingredient";
import { Instruction } from "./Instruction";

@Entity("recipes")
export class Recipe extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  title?: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  prep?: string;

  @Column({ nullable: true })
  cook?: string;

  @Column({ nullable: true })
  ready?: "";

  @Column({ nullable: true })
  servings?: string;

  @Column({ nullable: true })
  image?: string;

  @OneToMany(() => Ingredient, (ingredients) => ingredients.recipe)
  ingredients: Ingredient[];

  @OneToMany(() => Instruction, (instruction) => instruction.recipe)
  instructions: Instruction;
}
