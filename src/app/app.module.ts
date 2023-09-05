import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceComponent } from './components/dice/dice.component';
import { ValueGuesserComponent } from './components/value-guesser/value-guesser.component';
import { GameComponent } from './game/game.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';
import { GameStepperComponent } from './components/game-stepper/game-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceComponent,
    ValueGuesserComponent,
    GameComponent,
    LeaderBoardComponent,
    GameStepperComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, CdkStepperModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
