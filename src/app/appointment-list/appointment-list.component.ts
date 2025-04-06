import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  newAppointemntTitle: string = '';
  newAppointemntDate: Date = new Date();
  appointments: Appointment []= [];
  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments");
    this.appointments = savedAppointments? JSON.parse(savedAppointments):[];
    
  }
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
      localStorage.setItem("appointments",JSON.stringify(this.appointments));
    }
    
  };
  deleteAppointment(index: number){
    this.appointments.splice(index,1);
    localStorage.setItem("appointments",JSON.stringify(this.appointments));
  }

}
