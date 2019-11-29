import { Request, Response } from "express";
import TestAntrag from "../models/TestAntrag";

export default class AntragController{

    public async create(request: Request, response: Response) {
        TestAntrag.create(request.body).then(
            () => response.send(true)
        )
    }

    public async update (request: Request, response: Response) {
        let model = await TestAntrag.findByPk(request.body.id);
        if(model === null){
            return response.status(404).send({error: 'Antrag not found'});
        }
        model.set(request.body);
        model.save().then(() => response.send(true));
    }

    public async delete(request: Request, response: Response){
        TestAntrag.destroy({
            where:{
                id: request.params['id']
            }
        }).then(() => response.send(true));
    }

    public async index(request: Request, response: Response){
        let models = await TestAntrag.findAll(request.params);
        response.send(models);
    }

    public async view(request: Request, response: Response){
        let model = await TestAntrag.findOne(
            {
                where:{
                    id: request.params['id']
                }
            }
        );
        if(model === null){
            return response.status(404).send({error: 'Antrag not found'});
        }
        response.send(model);
    }

    public async testDoingStuffAsync(request: Request, response: Response){
        new Promise<number>(
            resolve => setTimeout(() => {
                resolve(1);
            }, 10000)
        ).then(() => console.log("Sorry for letting you wait"));
        response.send("Sorry, but I am not waiting\n");
    }

}