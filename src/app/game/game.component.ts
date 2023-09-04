import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DiceComponent } from '../components/dice/dice.component';
import { ValueGuesserComponent } from '../components/value-guesser/value-guesser.component';
import { IDiceSide } from '../interfaces/dice.interface';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  @ViewChild(CdkStepper) stepper: CdkStepper;
  @ViewChild(DiceComponent) diceComponent: DiceComponent;
  @ViewChild(ValueGuesserComponent) valueGuesserComponent: ValueGuesserComponent;
  guessedValue: null;
  isCorrectGuess: null | boolean = null;

  nameForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  submitName() {
    this.stepper.next();
  }

  rollTheDice(guessedValue) {
    this.isCorrectGuess = null;
    this.guessedValue = guessedValue;
    this.diceComponent.rollDice();
  }

  showResult(diceSide: IDiceSide) {
    this.isCorrectGuess = this.guessedValue === diceSide.value;
  }
}
