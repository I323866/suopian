import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class UserInfo {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public text: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: number
}
