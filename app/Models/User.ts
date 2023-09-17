import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class User extends BaseModel {

  public static table = 'users';

  @column({ isPrimary: true })
  public id: number;

  @column()
  public nama: string;

  @column()
  public nomor_telfon: number;

  @column()
  public gender: string;

  @column({autoCreate: true})
  public created_at: DateTime;

  @column({autoCreate: true, autoUpdate: true})
  public updated_at: DateTime;
}
