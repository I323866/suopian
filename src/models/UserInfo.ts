import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class UserInfo {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public userId: string

  @Column()
  public name: string

  @Column()
  public province: string

  @Column()
  public city: string

  @Column()
  public district: string

  @Column()
  public address: string

  @Column()
  public zipCode: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: number
}
