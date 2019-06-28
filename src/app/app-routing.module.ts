import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';
import { SelectWidgetComponent } from './select-widget/select-widget.component';

const routes: Routes = [
  { path: 'widget/:id', component: WidgetComponent },
  { path:"widgets",component:SelectWidgetComponent},
  { path: '', redirectTo:'/widgets', pathMatch: 'full' },
  { path: '**', component: SelectWidgetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
