import Product from '@entities/Product';
import Typeforms from '@entities/TypeForm';
import queryBuilder from '@utils/queryBuilder';
import { Request, Response } from 'express';

interface ProductInterface {
  id?: string;
  name?: string;
  description?: string;
  value?: any;
  picture?: string;
}


interface Aditionals {
  id: string;
  type: string;
  label: string;
  createdAt: Date;
};

class TypeformControllers {
  public async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const forms = (await Typeforms.find(queryBuilder(req.query)));

      return res.status(200).json(forms);
    } catch (error) {
      return res.status(404).json({ message: 'Cannot find forms, try again' });
    }
  }

  public async findById(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id;

      if (!id) return res.status(400).json({ message: 'Please send a product id' });

      const product = await Typeforms.findOne(id);

      return res.status(200).json(product);
    } catch (error) {
      return res.status(404).json({ message: 'Cannot find companies, try again' });
    }
  }public async findByType(req: Request, res: Response): Promise<Response> {
    try {
      const name = req.params.name;
  
      if (!name) return res.status(400).json({ message: 'Please send a product id' });
  

      const typeForm = await Typeforms.findOne({ name: name });
  
      if (!typeForm) {
        return res.status(404).json({ message: 'Cannot find typeform, try again' });
      }
  
      const updatedAdditionals = typeForm.aditionals.map((item: any) => ({
        id: item.id,
        label: item.label,
        type: item.type,
        value: '',
      }));
  
      return res.status(200).json(updatedAdditionals);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'An error occurred, try again later' });
    }
  }
  

  public async insertAditionals(req: Request, res: Response): Promise<Response> {
    try {

      const aditionalsReq: Aditionals[] = req.body;

      const id = req.params.id;

      console.log(aditionalsReq)
      // route/:id/${aditionals};

      if (!aditionalsReq) return res.status(400).json({ message: 'Invalid values to insert images' });
  
      const form = await Typeforms.findOne(id);
  
      if (!form) return res.status(404).json({ message: 'Form does not exist' });
  
      form.aditionals = aditionalsReq;
  
      await form.save();
  
      return res.status(201).json({ message: 'Images inserted successfully' });
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: 'Cannot insert images, try again' });
    }
  }

}

export default new TypeformControllers();
