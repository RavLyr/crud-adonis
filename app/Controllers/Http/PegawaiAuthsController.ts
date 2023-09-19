 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import {schema, rules} from '@ioc:Adonis/Core/Validator'
 import PegawaiAuth from 'App/Models/PegawaiAuth'

export default class PegawaiAuthsController {

    public async register({request, response, auth}: HttpContextContract) {
        const userschema = schema.create({
            username: schema.string({trim: true}, [rules.unique({table: 'pegawai_auths', column: 'username'})]),
            email: schema.string({trim: true}, [rules.email(), rules.unique({table: 'pegawai_auths', column: 'email'})]),
            password: schema.string({trim: true}, [rules.confirmed()])
        })

        const validatedData = await request.validate({schema: userschema})

        const pegawai = await PegawaiAuth.create(validatedData)
        
        await auth.login(pegawai)

        return response
        .status(201)
        .json({ message: "Register Success" });
    }

    public async login({request, response, auth}: HttpContextContract) {
        const {uid, password} = request.only(['uid', 'password'])
    
        try{
            await auth.attempt(uid, password)
        } catch (error){
            return response
            .status(401)
            .json({ message: error.message });
        }
    }


}
