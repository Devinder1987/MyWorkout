import { Component } from '@angular/core';

import { WorkoutPlan } from '../workout/workout';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = WorkoutPlan;
  tab3Root = ContactPage;

  constructor() {

  }
}
