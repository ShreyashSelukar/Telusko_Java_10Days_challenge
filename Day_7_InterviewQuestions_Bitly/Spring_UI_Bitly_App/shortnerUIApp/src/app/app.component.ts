import { Component } from '@angular/core';
import { Service } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shortnerUrl';
  copyAction='Copy';
  url='https://stackblitz.com/edit/angular-6-copy-to-clipboard?file=src%2Fapp%2Fapp.component.ts'
  urlInput: any;
  shortURL: any;
  constructor(
    private urlShortenerService: Service
    ){

  }
  generateShortURL(){
    this.urlShortenerService.createProduct(this.urlInput)
    .subscribe((response:any) => {
      if(response){
        this.shortURL = response.output_url;
      }
    });
  }
  
  /* To copy Text from Textbox */
  copyInputMessage(inputElement:any){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
  copyText(val: string){
    this.copyAction ='Copied';
    let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
    }
}