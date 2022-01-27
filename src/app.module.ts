import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";
import { BranchesModule } from "./branches/branches.module";
import { User } from "./users/entities/user.entity";
import { Branch } from "./branches/entities/branch.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "database.db",
      synchronize: true,
      entities: [User, Branch],
    }),
    UsersModule,
    BranchesModule,
  ],
})
export class AppModule {}
