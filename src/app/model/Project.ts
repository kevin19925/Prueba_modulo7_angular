import { AdditionalCost } from "./AdditionalCost";
import { RoleProject } from "./RoleProject";


export class Project {
  id!: number;
  title!: string;
  duration!: number;
  profitPercentage!: number;
  salePrice!: number;
  roleProyect!: RoleProject[];
  additionalCost!: AdditionalCost[];
}
