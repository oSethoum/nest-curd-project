import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/entities/user.entity";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Branch {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  label: string;

  @ApiProperty()
  @ManyToMany(() => User, (user) => user.branches)
  users: User[];
}
