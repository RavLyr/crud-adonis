import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pegawai extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public nama: string

  @column()
  public jenisKelamin: string

  @column()
  public alamat: string

  @column()
  public no_telp: string

  
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
