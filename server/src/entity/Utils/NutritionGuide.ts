import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("nutrition_guide")
export class NutritionGuide extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ntr_code: string;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column({ nullable: true })
  color?: string;
}
