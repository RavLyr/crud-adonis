// node ace make:model User -c -m

import { Response } from "@adonisjs/core/build/standalone";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async index({}: HttpContextContract) {
    const data = await User.query();

    return data;
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const insert = request.only(["nama", "nomor_telfon", "gender"]);
    try {
      const data = await User.create(insert);
      return response
        .status(200)
        .json({ code: 200, message: "success", data: data });
    } catch (error) {
      return response.status(500).json({ code: 500, message: error.message });
    }
  }

  public async show({ params: { id }}: HttpContextContract) {
    return await User.query().where({ id: id });
  }

  public async edit({}: HttpContextContract) {}

  public async update({ params,request, response  }: HttpContextContract) {
    
    const input = request.only(['nama','nomor_telfon','gender'])
    try{
      const data = await User.findBy('id',params.id)
      data?.merge(input)
      await data?.save()

      return response.status(200).json({code:200,message:'success',data:data})
    } catch(error){
      return response.status(500).json({code:500,message:error.message})
    }
    
    
  }

  public async destroy({ params: { id }, response,  request }: HttpContextContract) {
   
    try{
      const data = await User.findBy('id',id)
      
      await data?.delete()

      return response.status(200).json({code:200,message:'success delete'})
    } catch(error){
      return response.status(500).json({code:500,message:error.message})
    }
  }
}
