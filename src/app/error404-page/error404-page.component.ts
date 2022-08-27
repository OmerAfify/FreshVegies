import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-error404-page',
  templateUrl: './error404-page.component.html',
  styleUrls: ['./error404-page.component.css']
})
export class Error404PageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function()  {
          let body = <HTMLDivElement> document.body;
          let script = document.createElement('script');
          script.innerHTML='';
          script.src="../assets/js/script.js";
          script.async=true;
          script.defer=true;
          body.appendChild(script);
        })

  }

}
