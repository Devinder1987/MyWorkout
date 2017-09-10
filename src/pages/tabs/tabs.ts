import { Component } from '@angular/core';

import { WorkoutPlan } from '../plan/workoutPlan';
import { workoutHistory } from '../history/workoutHistory';
import { WorkoutPage } from '../home/workout';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WorkoutPage;
  tab2Root = WorkoutPlan;
  tab3Root = workoutHistory;

  constructor() {

  }
}
