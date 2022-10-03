import { Request, Response } from 'express'
import * as Yup from 'yup';
import { OrphanageRepository } from "../repositories/orphanageRepository";

export default {
    async create(request: Request, response: Response) { //Criar
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body;

        const requestImages = request.files as Express.Multer.File[];

        const images = requestImages.map(image => {
            return { path: image.filename }
        })

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends === 'true',
            images
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
            }))
        });

        await schema.validate(data, {
            abortEarly: false
        });
        
        const orphanage = OrphanageRepository.create(data);
    
        await OrphanageRepository.save(orphanage);
    
        return response.status(201).json(orphanage);
    }
};