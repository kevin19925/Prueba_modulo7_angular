import { Project } from '../model/Project';

export const projectData: Project = {
  id: 1,
  title: 'ESTIMACIÓN DE PROYECTOS DE SOFTWARE',
  duration: 3,
  profitPercentage: 32,
  salePrice: 3672.16,
  roleProyect: [
    {
      id: 1,
      role: { id: 1, description: 'Gerente de Proyecto', salary: 780.23 },
      participationPercentage: 20,
      participationSalary: 156.05,
      count: 1,
      total: 780.23,
    },

    {
      id: 2,
      role: { id: 2, description: 'Líder Técnico', salary: 780.23 },
      participationPercentage: 100,
      participationSalary: 780.23,
      count: 1,
      total: 780.23,
    },
    {
      id: 3,
      role: { id: 3, description: 'Desarrolladores', salary: 656.58 },
      participationPercentage: 100,
      participationSalary: 656.58,
      count: 4,
      total: 656.58,
    },
    {
      id: 4,
      role: { id: 4, description: 'Testers', salary: 656.58 },
      participationPercentage: 25,
      participationSalary: 164.15,
      count: 1,
      total: 164.15,
    },
    {
      id: 5,
      role: { id: 5, description: 'Infraestructura (DevOps)', salary: 780.23 },
      participationPercentage: 25,
      participationSalary: 195.06,
      count: 1,
      total: 195.06,
    },
  ],
  additionalCost: [
    { description: '- Alquiler de oficina:', price: 450 },
    { description: 'Internet mensual:', price: 45 },
    { description: '- Alquiler de computadoras:', price: 450 },
  ],
  total: 2497.07,
  customer: {
    id: '1718625989',
    name: 'ACME ',
    surname: 'lta',
    adress: {
      city: 'quito',
      principalStreet: 'juan saez',
      secundaryStreet: 'iñaquito',
      code: 'n-57',
    },
    requirement:
      'crear una aplicación utilizando Angular para calcular el costo total de un proyecto de desarrollo de software',
  },
};
