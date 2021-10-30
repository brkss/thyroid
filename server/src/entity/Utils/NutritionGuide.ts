import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity("nutrition_guide")
export class NutritionGuide extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  ntr_code: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  unit: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  color?: string;
}
