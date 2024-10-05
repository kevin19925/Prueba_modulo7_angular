import { Category } from '../model/Category';
import { Invoice } from '../model/Invoice';

export const invoiceData: Invoice = {
  id: '001',
  company: {
    ruc: '17186259898',
    name: 'clear minds',
    direccion: {
      city: 'quito',
      principalStreet: 'juan pablo jaez',
      secundaryStreet: 'iañaquirto ',
      code: 'n-57',
    },
  },
  customer: {
    id: '17186564',
    name: 'kevin ',
    surname: 'quishpe',
    adress: {
      city: 'quito',
      principalStreet: 'chilogallo',
      secundaryStreet: 'iañaquirto ',
      code: 'n-57',
    },
  },
  items: [
    {
      id: 101,
      producto: {
        id: 2,
        name: 'papa',
        price: 0.5,
        description: 'picante',
        category: {
          id: 0,
          name: 'dulces',
        },
      },
      quantity: 2,
    },
    {
      id: 102,
      producto: {
        id: 3,
        name: 'doritos',
        price: 0.6,
        description: 'queso ',
        category: {
          id: 0,
          name: 'dulces',
        },
      },
      quantity: 5,
    },
  ],
};
