import { AdditionalCost } from "./AdditionalCost";
import { Customer } from './Customer';
import { RoleProject } from "./RoleProject";


export class Project {
  customer!: Customer;
  id!: number;
  title!: string;
  duration!: number;
  profitPercentage!: number;
  salePrice!: number;
  roleProyect!: RoleProject[];
  additionalCost!: AdditionalCost[];
  total!: number;
}
