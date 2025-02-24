import { SandwichesComponent } from './sandwiches/sandwiches.component';
import { DessertsComponent } from './desserts/desserts.component';
import { WaterComponent } from './water/water.component';
import { ColdCoffeeComponent } from './cold-coffee/cold-coffee.component';
import { HotCoffeeComponent } from './hot-coffee/hot-coffee.component';
import { IceCreamComponent } from './ice-cream/ice-cream.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThankYouComponent } from './thank-you/thank-you.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ice-cream', component: IceCreamComponent },
  { path: 'desserts', component: DessertsComponent},
  { path: 'sandwiches', component: SandwichesComponent },
  { path: 'cold-coffee', component: ColdCoffeeComponent },
  { path: 'hot-coffee', component: HotCoffeeComponent},
  { path: 'water', component: WaterComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: '**', redirectTo: '' } // التوجيه في حالة المسار غير موجود
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
