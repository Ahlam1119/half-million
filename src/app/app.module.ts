import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ColdCoffeeComponent } from './cold-coffee/cold-coffee.component';
import { HotCoffeeComponent } from './hot-coffee/hot-coffee.component';
import { SandwichesComponent } from './sandwiches/sandwiches.component';
import { DessertsComponent } from './desserts/desserts.component';
import { IceCreamComponent } from './ice-cream/ice-cream.component';
import { WaterComponent } from './water/water.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColdCoffeeComponent,
    HotCoffeeComponent,
    SandwichesComponent,
    DessertsComponent,
    IceCreamComponent,
    WaterComponent,
    HeaderComponent,
    FooterComponent,
    ThankYouComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    StoreModule.forRoot( {
    })
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
