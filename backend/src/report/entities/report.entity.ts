import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Report {
  // Primary key
  @PrimaryGeneratedColumn()
  id_report: number;

  // Column producerId: number
  @Column()
  producerId: number;

  // Column cropName: varchar
  @Column()
  cropName: string;

  // Column cropArea: number
  @Column()
  cropArea: number;

  // Column productionCost: number
  @Column()
  productionCost: number;

  // Column harvestAmount: number
  @Column()
  harvestAmount: number;

  // Column harvestDate: Date
  @CreateDateColumn()
  harvestDate: Date;
}
