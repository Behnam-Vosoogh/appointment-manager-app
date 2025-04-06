import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  newAppointemntTitle: string = '';
  newAppointemntDate: Date = new Date();
  appointments: Appointment []= [];
  addAppointment() {
    if(this.newAppointemntTitle.trim().length&&this.newAppointemntDate){
      let newAppointment:Appointment ={
        id:Date.now(),
        title:this.newAppointemntTitle,
        date:this.newAppointemntDate
      }
      this.appointments.push(newAppointment);
      this.newAppointemntTitle ="";
      this.newAppointemntDate=new Date();
    }
    
  };
  deleteAppointment(index: number){
    this.appointments.splice(index,1);
  }

}
