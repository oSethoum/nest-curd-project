import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Branch } from "./entities/branch.entity";

@Injectable()
export class BranchesService extends TypeOrmCrudService<Branch> {
  constructor(@InjectRepository(Branch) repo) {
    super(repo);
  }
}
