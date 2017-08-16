import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalAddExercise } from '../../modal/addWorkout/addExercise';

@Component({
  selector: 'page-plan',
  templateUrl: 'workout.html'
})
export class WorkoutPlan {

  weekDay
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.weekDay = new Date().getDay();

  }
  addExercise(){
    let modal = this.modalCtrl.create(ModalAddExercise, {weekDay: this.weekDay});
    modal.present();
  }

}
