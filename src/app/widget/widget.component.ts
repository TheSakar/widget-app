import { Component, OnInit } from '@angular/core';
import { Widget } from 'src/models/widget';
import { WidgetService } from 'src/services/widget.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/services/alertify.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
  providers: [WidgetService]
})
export class WidgetComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  public weatherWidget = {}
  public clockWidget = {}
  public id: string;

  ngOnInit() {
    this.getWeatherWidget();
    this.getClockWidget();
    this.getActiveId();
  }



  getActiveId() {
    this.activatedRoute.paramMap.subscribe(params => this.id = params.get('id'))
  }

  setWidgetState(widgetName: string) {
    localStorage.setItem("widget" + this.id, widgetName);
    this.router.navigate(['/widgets'])
    this.alertifyService.success("Widget eklendi!")
  }

  getWeatherWidget() {
    this.widgetService.getWidget(1).subscribe((data: Widget) => {
      this.weatherWidget = data[0];
    })
  }

  getClockWidget() {
    this.widgetService.getWidget(2).subscribe(data => {
      this.clockWidget = data[0]
    });
  }

}