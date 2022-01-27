import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController } from "@nestjsx/crud";
import { BranchesService } from "./branches.service";
import { Branch } from "./entities/branch.entity";

@Crud({
  model: {
    type: Branch,
  },
})
@ApiTags("branches")
@Controller("branches")
export class BranchesController implements CrudController<Branch> {
  constructor(public service: BranchesService) {}
}
