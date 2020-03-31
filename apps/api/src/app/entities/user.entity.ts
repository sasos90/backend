import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  username: string;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 500 })
  email: string;

  @Column({ default: true })
  isActive: boolean;

  // @OneToMany(type => Photo, photo => photo.user)
  // photos: Photo[];
}
