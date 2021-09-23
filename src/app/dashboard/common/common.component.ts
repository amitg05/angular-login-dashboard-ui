import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.menu_icon').click(function() {
        var $this = $('#sideDiv');
        if ($this.hasClass('red')) {
          $('#sideDiv').removeClass('red');
        }
        else {
          $('#sideDiv').addClass('red');
        }
      });
    });

    $('.dropdown_self_service').hover(function(){

      $('.dropdown-menu-self-service').toggleClass('show');
    
    });
    $('.dropdown_notification').click(function(){
    
      $('.dropdown-menu-notification').toggleClass('show');
    
    });    

  }

}
