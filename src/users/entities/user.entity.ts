import { ApiProperty } from "@nestjsx/crud/lib/crud";
import { Branch } from "src/branches/entities/branch.entity";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ select: false })
  username: string;

  @ApiProperty()
  @Column({ select: false })
  password: string;

  @ApiProperty()
  @ManyToMany(() => Branch, (branch) => branch.users)
  @JoinTable()
  branches: Branch[];
}
