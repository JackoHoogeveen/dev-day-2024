import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {StatusType} from "../../../../libs/components/src/components/status-button/status-button.types";
import {BehaviorSubject, interval, map} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, AsyncPipe],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'xip-dev-day';

  #statusSubject = new BehaviorSubject<StatusType>('neutral');

  status$ = this.#statusSubject.asObservable();

  #showRandomNumberSubject = new BehaviorSubject(false);

  showRandomNumber$ = this.#showRandomNumberSubject.asObservable();

  #myInterval = interval(20);

  #pickedNumberSubject = new BehaviorSubject<string | number>('???');

  pickedNumber$ = this.#pickedNumberSubject.asObservable();



  randomNumber$ = this.#myInterval.pipe(
    map(() => Math.ceil(Math.random() * 10)),
  );

  clickButton() {
    if (this.#statusSubject.value === 'busy') {
      return;
    }

    this.#showRandomNumberSubject.next(true);

    this.#statusSubject.next('busy');

    setTimeout(() => {
      this.#showRandomNumberSubject.next(false);
      const pickedNumber = Math.ceil(Math.random() * 10);
      this.#pickedNumberSubject.next(pickedNumber);

      if (pickedNumber === 1) {
        this.#statusSubject.next('error');
      } else {
        this.#statusSubject.next('succes');
      }
    }, 3000);
  }
}
