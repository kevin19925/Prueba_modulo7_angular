import { Project } from '../model/Project';

export const projectData: Project = {
  id: 1,
  title: 'ESTIMACIÓN DE PROYECTOS DE SOFTWARE',
  duration: 3,
  profitPercentage: 32,
  salePrice: 0,
  roleProyect: [
    {
      id: 1,
      role: { id: 1, description: 'Gerente de Proyecto', salary: 780.23 },
      participationPercentage: 20,
      participationSalary: 156.05,
      amount: 1,
      total: 780.23,
    },

    {
      id: 2,
      role: { id: 2, description: 'Líder Técnico', salary: 780.23 },
      participationPercentage: 100,
      participationSalary: 780.23,
      amount: 1,
      total: 780.23,
    },
    {
      id: 3,
      role: { id: 3, description: 'Desarrolladores', salary: 656.58 },
      participationPercentage: 100,
      participationSalary: 656.58,
      amount: 4,
      total: 656.58,
    },
    {
      id: 4,
      role: { id: 4, description: 'Testers', salary: 656.58 },
      participationPercentage: 25,
      participationSalary: 164.15,
      amount: 1,
      total: 164.15,
    },
    {
      id: 5,
      role: { id: 5, description: 'Infraestructura (DevOps)', salary: 780.23 },
      participationPercentage: 25,
      participationSalary: 195.06,
      amount: 1,
      total: 195.06,
    },
  ],
  additionalCost: [],
  total: 0,
};
