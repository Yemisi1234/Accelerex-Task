import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
title = 'Basic Form';
userData:any={}
getData(data:NgForm){
 console.warn(data)
 this.userData = data
 }
}
