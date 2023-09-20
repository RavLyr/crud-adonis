 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import {schema, rules} from '@ioc:Adonis/Core/Validator'
 import PegawaiAuth from 'App/Models/PegawaiAuth'

export default class PegawaiAuthsController {

    

    public async register({request, response, auth}: HttpContextContract) {
        
        const userschema = schema.create({
            username: schema.string({}, [rules.unique({table: 'pegawai_auths', column: 'username'})]),
            email: schema.string({}, [rules.email(), rules.unique({table: 'pegawai_auths', column: 'email'})]),
            password: schema.string({}, [rules.confirmed()]),
        })
        try{
            const data = await request.validate({schema: userschema})
            const user = await PegawaiAuth.create(data)

    
            return response
            .status(201)
            .json({ message: "Register Success", data: user });
        } catch (error){
            return response
            .status(400)
            .json({ message: error.messages });
        }
       

        
    }

    public async login({request, response, auth}: HttpContextContract) {
        const {uid, password} = request.only(['uid', 'password'])
    
        try{
            // await auth.attempt(uid, password)

            const token = await auth.use('api').attempt(uid, password, {
                expiresIn: '24hours'
            })

          return response
            .status(200)
            .json({ message: "Login Success", data: token }); 
          
            
        } catch (error){
            return response
            .status(401)
            .json({ message: error.message });
        }
    }

    public async logout({response, auth}: HttpContextContract) {
        
        try{
            await auth.logout()

        return response
        .status(200)
        .json({ message: "Logout Success" });
        }catch(error){
            return response
            .status(401)
            .json({ message: error.message });
        }
    }


}
