import { Project } from "../model/Project";
import { Rol } from "../model/Rol";

export const projectData: Project = {
  id: 1,
  title: 'ESTIMACIÓN DE PROYECTOS DE SOFTWARE',
  duration: 3,
  profitPercentage: 32,
  salePrice: 0,
  roleProyect: [{
    id: 1,
    participationPercentage: 20,
    role: new Rol,
    participationSalary: 0,
    amount: 0,
    total: 0
  },],
  additionalCost: [],
};