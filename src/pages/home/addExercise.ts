import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'addExercise.html'
})
export class ModalAddExercise {
    exercise
  constructor(
    public viewCtrl: ViewController
  ) {
      this.exercise = {}
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}