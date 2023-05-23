import { Component } from '@angular/core';
import { ProductService } from './app.service';
import { Observable, Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'productApp';
  data:any;
  productForm: FormGroup;
  constructor(private productService:ProductService,
    private formBuilder: FormBuilder){

  }
  ngOnInit() {
    this.createForm();
    this.getData();
  }

  getData(){
    this.productService.getProducts().subscribe(
      (response) => {
        this.data = response;
        console.log(this.data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  createForm(){
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      place: ['', Validators.required],
      warranty: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.invalid) {
      return;
    }
    this.productService.createProduct(this.productForm.value).subscribe(
      (response) => {
        this.getData();
      },
      (error) => {
        console.error(error);
      }
    );

  }
  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(
      (response) => {
        this.getData();
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
