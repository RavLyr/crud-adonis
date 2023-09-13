// node ace make:model User -c -m

import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async index({}: HttpContextContract) {
    return await User.query();
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {
    return await User.create({
      nama: "Test",
      nomor_telfon: 123,
      gender: "L",
    });
  }

  public async show({ params: { id } }: HttpContextContract) {
    return await User.query().where({ id: id });
  }

  public async edit({}: HttpContextContract) {}

  public async update({ params: { id } }: HttpContextContract) {
    return await User.query().where({ id: id }).update({
      nama: "Test",
      nomor_telfon: 123,
      gender: "L",
    });
  }

  public async destroy({ params: { id } }: HttpContextContract) {
    return await User.query().where({ id: id }).delete();
  }
}
