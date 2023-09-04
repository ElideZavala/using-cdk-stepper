import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-stepper',
  templateUrl: './game-stepper.component.html',
  styleUrls: ['./game-stepper.component.scss'],
  providers: [{
    provide: CdkStepper,
    useExisting: GameStepperComponent // reemplaza el stepper de angular por el nuestro
  }],
})

export class GameStepperComponent extends CdkStepper {

  
}
