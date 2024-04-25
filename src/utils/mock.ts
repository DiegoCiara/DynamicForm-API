// mocks
import { companies, member, workout, exercice, contacts, partners, contracts, typeforms, deals, deals2, deals3, deals4, goal, automations , mailers, funnels, convenios, product, evaluation } from './dataMock';
import Product from '@entities/Product';
import User from '@entities/User';
import bcrypt from 'bcryptjs';
import Members from '@entities/Member';
import Typeforms from '@entities/TypeForm';

const mocks = async (): Promise<void> => {
  try {
    
    if (!(await User.findOne({ email: 'admin@figio.com.br' }))) {
      const pass = await bcrypt.hash('die140401', 10);
      await User.create({ name: 'admin', email: 'admin@figio.com.br', role: 'ADMIN', passwordHash: pass, picture: 'https://figio.vercel.app/logo-a.png' }).save();
      console.log('users ok');
    }

    if (!(await Members.findOne({ email: 'suporte.diegociara@gmail.com.br' }))) {
      for (let i = 0; i < member.length; i++) {
        const pass = await bcrypt.hash('die140401', 10);
        await Members.create({ ...member[i], passwordHash: pass }).save();
        console.log(`Members ${i + 1} criado`);
      }
      console.log('Members ok');
    }
    

    if (!(await Product.findOne({ name: 'Google' }))) {
      for (const product of companies) {
        // Armazena o objeto criado em uma variável
        const newProduct = await Product.create({ ...product }).save();
        // Acessa a propriedade id do objeto
        console.log(`Canal ${product.name}, de id: ${newProduct.id} criada`);
      }
      console.log('companies ok');
    }

    if (!(await Typeforms.findOne({ name: 'Product' }))) {
      for (const form of typeforms) {
        // Armazena o objeto criado em uma variável
        const newform = await Typeforms.create({ ...form }).save();
        // Acessa a propriedade id do objeto
        console.log(`Model ${form.name}, de id: ${newform.id} criada`);
      }
      console.log('form ok');
    }
    

    const members = await Members.find();
    if (!members.length) mocks();
  } catch (error) {
    console.log('Erro ao rodar mocks!');
  }
};

export default mocks;
