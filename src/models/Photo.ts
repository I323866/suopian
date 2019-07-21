import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public description: string;

  @Column()
  public filename: string;


  @Column()
  public isPublished: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: number;
}
