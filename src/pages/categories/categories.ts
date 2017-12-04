import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryModel } from './../../models/category.model';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  // variavel para controlar se é uma edição ou inserção de categoria
  public newCategory: boolean = true;
  public currentCategory: CategoryModel;

  // array de categorias
  public categories: CategoryModel[] = [
    { id: 1, description: 'Casa', type: 1 },
    { id: 1, description: 'Despesas', type: 1 },
    { id: 1, description: 'Casa', type: 1 },
    { id: 1, description: 'Despesas', type: 1 },
    { id: 1, description: 'Casa', type: 1 },
    { id: 1, description: 'Despesas', type: 1 },
    { id: 1, description: 'Casa', type: 1 },
    { id: 1, description: 'Despesas', type: 1 },
    { id: 1, description: 'Salário', type: 0 }
  ]

  // formulario de categorias
  public categoryForm: FormGroup = new FormGroup({
    'id': new FormControl(''),
    'description': new FormControl('', Validators.required),
    'type': new FormControl('', Validators.required)
  });

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ionViewDidLoad() { }

  // função que permite editar uma categoria
  public editCategory(category: CategoryModel): void {
    this.categoryForm.patchValue(category);
    this.currentCategory = category;
    this.newCategory = false;
  }

  //função que permite inserir uma categoria nova
  public insertNewCategory(): void {
    this.categoryForm.reset();
    this.currentCategory = null;
    this.newCategory = true;
  }

  // função para salvar os dados do formulário de categoria
  public saveCategory(): void {
    let category = new CategoryModel(
      this.categoryForm.value.id,
      this.categoryForm.value.description,
      this.categoryForm.value.type
    )

    console.log(category);
  }

  public removeCategory(): void {
    console.log(this.currentCategory);
  }



}
