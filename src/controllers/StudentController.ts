import express, { Request, Response } from "express";
import { StudentModel } from "../db/student";
class StudentController {

    //Pour obtenir tous les eleves de la classe
    getAllStudent = async (request: Request, response:Response)=>
    {
        try{
            const students = await StudentModel.find();
            return response.status(200).json({data: students})
        }catch (error){
             return response.sendStatus(400);
        }
    }
 
    //Pour obtenir un eleve de la classe
    getStudent = async (request: Request, response:Response)=>
    {
        try{
            const id = request.params;
            const student = await StudentModel.findById(id);
            return response.status(200).json({data: student})
        }catch (error){
             return response.sendStatus(400);
        }
    }

    //Enregistrer Un eleve de la base de donnees
    createStudent = async (request: Request, response:Response)=>
    {
        try{
            const {nom,prenom,email,classe} = request.body;
            const student = new StudentModel({
                nom,
                prenom,
                email,
                classe
            });
            await student.save();
            return response.status(201).json({message: "Eleve creer avec succes", data:student})
        }catch (error){
             return response.sendStatus(400);
        }
    }

    //Mettre à jour les donnees d'un eleve

    UpdateStudent = async (request: Request, response:Response)=>
    {
        try{
            const {id} = request.params;
            const {nom,prenom,email,classe} = request.body;
            const student = await StudentModel.findById(id);
            if(student){
                student.nom = nom;
                student.prenom = prenom;
                student.email = email;
                student.classe = classe;

                await student.save();
                return response.status(200).json({message: "les donnees de l'eleve mis à jour", data:student})
            }
            return response.sendStatus(400);
        }catch (error){
             return response.sendStatus(400);
        }
    }

    //Suprimer Un eleve sur la liste
    deleteStudent = async (request: Request, response:Response)=>
    {
        try{
            const {id} = request.params;
            await StudentModel.findByIdAndDelete({_id: id});
            return response.status(200).json({message: "Eleve supprimer avec succes"})
        }catch (error){
             return response.sendStatus(400);
        }
    }




}

export default new StudentController();