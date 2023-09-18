import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pegawai from 'App/Models/Pegawai'


export default class PegawaisController {
  public async index({response}: HttpContextContract) {
    try{
      const data = await Pegawai.all()

      return data;
    } catch(e){
      return response
      .status(400)
      .json({ message: e.message });
    }
    
  }

  public async create({}: HttpContextContract) {}

  public async store({request, response}: HttpContextContract) {

    const input = request.only(["nama", "jenisKelamin", "alamat", "no_telp"])

    try {
      await Pegawai.create(input)
      return response
        .status(201)
        .json({ message: "Data berhasil ditambahkan" });
    }  catch(e){
      return response
      .status(400)
      .json({ message: e.message });
     }
    

  }

  public async show({params : {id},response}: HttpContextContract) {
    
    try{
      const data = await Pegawai.findOrFail(id)

      return response
        .status(200)
        .json({ message: "Data berhasil ditampilkan", data: data });
    }  catch(e){
      return response
      .status(400)
      .json({ message: e.message });
     }
   
  }

  public async edit({}: HttpContextContract) {
    
  }

  public async update({request,response,params}: HttpContextContract) {
    const input = request.only(["nama", "jenisKelamin", "alamat", "no_telp"])

    try{

      const data = await Pegawai.findOrFail(params.id)
      data?.merge(input)
      await data?.save()

      return response
        .status(200)
        .json({ message: "Data berhasil diupdate", data: data });
    }  catch(e){
      return response
      .status(400)
      .json({ message: e.message });
     }
  }

  public async destroy({params,response}: HttpContextContract) {
   try{
    const data = await Pegawai.findOrFail(params.id)
    await data?.delete()

    return response
      .status(200)
      .json({ message: "Data berhasil dihapus" });
   } catch(e){
    return response
    .status(400)
    .json({ message: e.message });
   }
  }
}
