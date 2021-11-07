import { BaseEntity, Column, PrimaryGeneratedColumn, Entity } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity("times")
export class Time extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;
}
