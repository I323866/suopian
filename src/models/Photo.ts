import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: number;
}
