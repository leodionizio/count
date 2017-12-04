import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { SqliteConnService } from './../sqlite-conn/sqlite-conn.service'

import { CategoryModel } from './../../models/category.model'

@Injectable()
export class CategoryService {

  private db: SQLiteObject;
  private isFirstCall: boolean = true;

  constructor(
    public sqliteConnService: SqliteConnService
  ) { }

  private getDb(): Promise<SQLiteObject> {
    if (this.isFirstCall) {
      this.isFirstCall = false;

      return this.sqliteConnService.getDb('count.db')
        .then((db: SQLiteObject) => {
          this.db = db;
          this.db.executeSql(`CREATE TABLE IF NOT EXISTS category
          (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            description TEXT,
            type INTEGER
          )`, {})
            .then((success) => {
              console.log('Tabela categoria criada com sucesso', success);
            })
            .catch((error) => {
              console.log('Erro ao criar tabela categoria', error);
            })
          return this.db;
        })
    }
    return this.sqliteConnService.getDb();
  }

  public getAll(orderBy?: string): Promise<CategoryModel[]> {
    return this.getDb()
      .then((db: SQLiteObject) => {

        return <Promise<CategoryModel[]>>this.db.executeSql(`SELECT id, title FROM movie ORDER BY id ${orderBy || 'DESC'}`, {})
          .then((resultSet) => {
            let list: CategoryModel[] = [];
            for (let i = 0; i < resultSet.rows.length; i++) {
              list.push(resultSet.rows.item(i));
            }
            return list;
          })
          .catch((error: Error) => console.log('Erro', error))
      })
  }

  public create(category: CategoryModel): Promise<CategoryModel> {
    return this.db.executeSql(`
      INSERT INTO category (description, type)
      VALUES (?,?)`,
      [
        category.description,
        category.type
      ])
      .then(resultSet => {
        category.id = resultSet.insertId;
        return category;
      })
      .catch((error: Error) => {
        console.log(`Erro ao criar '${category.description}' categoria!`, error)
        return category;
      });
  }

  public update(category: CategoryModel): Promise<boolean> {
    return this.db.executeSql(`
      UPDATE category SET description = ?, type = ? WHERE id=?`,
      [
        category.description,
        category.type,
        category.id
      ])
      .then(resultSet => resultSet.rowsAffected >= 0)
      .catch((error: Error) => {
        console.log(`Erro ao atualizar categoria!`, error)
        return false
      });
  }

  public delete(id: number): Promise<boolean> {
    return this.db.executeSql('DELETE FROM category WHERE id=?', [id])
      .then(resultSet => resultSet.rowsAffected >= 0)
      .catch((error: Error) => {
        console.log(`Erro ao deletar categoria!`, error)
        return false;
      });
  }

  public getById(id: number): Promise<CategoryModel> {
    return this.db.executeSql('SELECT id, description, type FROM category WHERE id=?', [id])
      .then(resultSet => {
        return resultSet.rows.item(0);
      })
      .catch((error: Error) => {
        console.log(`Erro ao encontrar categoria!`, error)
      });
  }


}
