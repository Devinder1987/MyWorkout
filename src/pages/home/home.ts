import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ModalAddExercise } from './addExercise';
import { Schedule } from './homeJson';

const data = Schedule

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  schedule: any
  currentDate: Date
  exerciseDate: string
  currentDay: string
  name: any
  isDisabled: string
  currentDayNum: number
  constructor(public navCtrl: NavController, 
              public storage: Storage,
              public modalCtrl: ModalController) {
    this.currentDate = new  Date;
    this.currentDay = "Today"
    this.exerciseDate = this.currentDate.toISOString();
    this.currentDayNum = new Date(this.currentDate).getDay();
    this.schedule = data[this.currentDayNum];
    this.isDisabled = "enabled-class";

    storage.set('Name', 'Devinder');
  }
  findSetElement(arr, outerID, innerID){
    return arr.find(item => item.id === outerID).sets.find(item => item.id === innerID)
  }
  countDecrease(outerID, innerID, count): void{
    if(this.findSetElement(this.schedule, outerID, innerID).class !== "disabled-class"){
      this.findSetElement(this.schedule, outerID, innerID).count =  count > 1 ? count-1 : 15
    }
  }
  buttonDisabled(outerID, innerID, count): void{
    this.findSetElement(this.schedule, outerID, innerID).class = this.findSetElement(this.schedule, outerID, innerID).class === "disabled-class" ? "enabled-class": "disabled-class";
  }
  ngOnChanges(changes) {
      let exerciseDate = new Date(this.exerciseDate).getDate();
      let exerciseDay = new Date(this.exerciseDate).getDay();
      this.schedule = data[exerciseDay];
      this.storage.get('Name').then((val) => {
        console.log(val)
        this.name = val;
      })
      if(exerciseDate === this.currentDate.getDate()){
        this.currentDay = "Today"
      }else if(exerciseDate === this.currentDate.getDate()+1){
        this.currentDay = "Tomorrow"
      }else if(exerciseDate === this.currentDate.getDate()-1){
        this.currentDay = "Yesterday"
      }else {
        this.currentDay = "Date"
      }
  }
  openModal() {
    let modal = this.modalCtrl.create(ModalAddExercise);
    modal.present();
  }
}
