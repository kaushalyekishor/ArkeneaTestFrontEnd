import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFeedbackComponent} from './Components/create-feedback/create-feedback.component'

const routes: Routes = [
  {path:'createFeedback',component:CreateFeedbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
