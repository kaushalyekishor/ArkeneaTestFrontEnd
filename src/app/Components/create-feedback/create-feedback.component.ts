import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { HttpRequestService } from '../../services/user.service'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.css']
})

export class CreateFeedbackComponent implements OnInit {
  feedBackForm:FormGroup
  constructor(private fb:FormBuilder, private service:HttpRequestService) { }
  post;

   Validation()								 
        { 
            var name = document.forms["RegForm"]["name"];			 
            var email = document.forms["RegForm"]["email"]; 
            var message = document.forms["RegForm"]["message"]; 
        
            if (name.value == "")								 
            { 
                window.alert("Please enter your name."); 
                name.focus(); 
                return false; 
            } 
        
            if (email.value == "")							 
            { 
                window.alert("Please enter your email address."); 
                email.focus(); 
                return false; 
            } 
            
            if (message.value == "")							 
            { 
                window.alert("Please enter your message."); 
                message.focus(); 
                return false; 
            }        
            return true; 
        }

  ngOnInit(): void {
    this.feedBackForm = this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      message:['', Validators.required],
    })
  }

  get name(){
    return this.feedBackForm.get('name')
  }

  get email(){
    return this.feedBackForm.get('email')
  }

  get message(){
    return this.feedBackForm.get('message')
  }

  register(){
    console.log(this.feedBackForm.value)
    return this.service.createFeedback(this.feedBackForm.value).subscribe(res => {
      console.log(res);
      this.post = "Thanks for your interest. We will revert you in 24 hours..!”"
    })
  }
}
