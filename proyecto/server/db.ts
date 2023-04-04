import { MongoClient, Db } from 'mongodb';

export class Database {
  private static _instance: Database;

  private _db: Db = {} as Db; 

  private constructor() {}

  public static getInstance(): Database {
    if (!Database._instance) {
      Database._instance = new Database();
    }

    return Database._instance;
  }

  public async connect(): Promise<void> {
    try {
      const client = await MongoClient.connect('mongodb://localhost:27017');
      this._db = client.db('Cluster0');
      console.log('Conexión a la base de datos exitosa');
    } catch (error) {
      console.log('Error al conectar a la base de datos', error);
    }
  }

  public get db(): Db {
    return this._db;
  }
}
