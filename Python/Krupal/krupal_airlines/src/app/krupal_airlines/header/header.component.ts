import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'krupal-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router:Router,public service:CommonService) { }


    logout(){
      localStorage.clear();
    }
  gotologin(){
    console.log("logining");
   this.router.navigateByUrl("login")
  }


  ngOnInit(): void {
  }

}
// document.addEventListener("DOMContentLoaded", function() {
//   var dropdownToggleList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
//   var dropdownMenuList = [].slice.call(document.querySelectorAll('.dropdown-menu'));

//   dropdownToggleList.forEach(function(dropdownToggle) {
//     var dropdownMenu = dropdownToggle.nextElementSibling;

//     dropdownToggle.addEventListener('mouseenter', function() {
//       closeAllDropdowns();
//       dropdownMenu.style.display = 'block';
//     });

//     dropdownToggle.addEventListener('mouseleave', function() {
//       dropdownMenu.style.display = '';
//     });
//   });

//   // Close all dropdowns except the currently hovered one
//   function closeAllDropdowns() {
//     dropdownMenuList.forEach(function(dropdownMenu) {
//       if (dropdownMenu.style.display === 'block') {
//         dropdownMenu.style.display = '';
//       }
//     });
//   }
// });
