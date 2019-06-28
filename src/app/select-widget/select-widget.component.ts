import { Component, OnInit } from '@angular/core';
import { WidgetService } from 'src/services/widget.service';
import { Widget } from 'src/models/widget';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/services/alertify.service';

@Component({
  selector: 'app-select-widget',
  templateUrl: './select-widget.component.html',
  styleUrls: ['./select-widget.component.css'],
  providers: [WidgetService]
})
export class SelectWidgetComponent implements OnInit {

  public sideIds: number[] = [0, 1, 2, 3]
  public weatherWidget = {}
  public clockWidget = {}
  public widgetsState = [null, null, null, null]
  constructor(private widgetService: WidgetService, private router: Router,private alertifyService:AlertifyService) { }

  ngOnInit() {
    this.getWidgetsState();
    this.getWeatherWidget();
    this.getClockWidget();
  }

  getClockWidget() {
    this.widgetService.getWidget(2).subscribe(data => {
      this.clockWidget = data[0]
    })
  }

  getWeatherWidget() {
    this.widgetService.getWidget(1).subscribe((data: Widget) => {
      this.weatherWidget = data[0];
    })
  }

  getWidgetsState() {
    let i = 0;
    for (var state of this.widgetsState) {
      this.widgetsState[i] = localStorage.getItem("widget" + (i + 1));
      i++;
    }
  }

  clearAllWidgets() {
    localStorage.clear();
    this.router.navigate(['clear'])
    this.alertifyService.error("Tüm widgetlar temizlendi!")
  }


}
