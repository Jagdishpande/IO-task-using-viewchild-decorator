import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istd } from '../../model/student';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() stdformdata:EventEmitter<Istd>=new EventEmitter<Istd>()
  constructor() { }
  @ViewChild('fname') 
  fname!:ElementRef

  @ViewChild('lname')
  lname!:ElementRef

  @ViewChild('email')
  email!:ElementRef

  @ViewChild('contact')
  contact!:ElementRef

  ngOnInit(): void {
  }

  onStdAdd(fname:HTMLInputElement,lname:HTMLInputElement,email:HTMLInputElement,contact:HTMLInputElement){
    let obj:Istd={
      fname:this.fname.nativeElement.value,
      lname:this.lname.nativeElement.value,
      email:this.email.nativeElement.value,
      contact:+this.contact.nativeElement.value
    }
    console.log(obj)
    this.stdformdata.emit(obj)
    this.fname.nativeElement.value='',
    this.lname.nativeElement.value='',
    this.email.nativeElement.value='',
    this.contact.nativeElement.value=''

  }

 
}
function output(): (target: FormComponent, propertyKey: "stdformdata") => void {
  throw new Error('Function not implemented.');
}

