import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shortnerUrl';
  copyAction='Copy';
  url='https://stackblitz.com/edit/angular-6-copy-to-clipboard?file=src%2Fapp%2Fapp.component.ts'
  urlInput: string;
  shortURL: string;
  constructor(
    // private urlShortenerService: UrlShortenerService
    ){

  }
  generateShortURL(){
    // this.urlShortenerService.shortenURL(this.urlInput)
    // .subscribe(response => {
    //   if(response){
    //     this.shortURL = response;
    //   }
    // });
  }
  
  /* To copy Text from Textbox */
  copyInputMessage(inputElement){
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
