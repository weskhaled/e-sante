import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { InfoService } from '../shared/services/info.service';
import { UserService } from '../shared/services/user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [InfoService, UserService]
})
export class HomeComponent implements OnInit {

    userId: any;
    heightLabels = [];
    heightValues = [];
    public tailleChartType: ChartType;
    public tailleChartData: any;
    public tailleChartOptions: any;
    public tailleChartResponsive: any[];
    public tailleChartLegendItems: LegendItem[];

    public poidsChartType: ChartType;
    public poidsChartData: any;
    public poidsChartOptions: any;
    public poidsChartResponsive: any[];
    public poidsChartLegendItems: LegendItem[];

    constructor(private infoService: InfoService, private userService: UserService) { }

    ngOnInit() {
        this.userId = this.userService.getCurrentUserId();
        var heightSeries = this.getHeight();
        var weightSeries = this.getWeight();
        console.log(heightSeries.series)

        this.tailleChartType = ChartType.Line;
        this.tailleChartData = {
            labels: heightSeries.labels,
            series: [
                [158, 160, 170, 178]
            ]
        };
        this.tailleChartOptions = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: '245px'
        };
        this.tailleChartResponsive = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];


        this.poidsChartType = ChartType.Line;
        this.poidsChartData = {
            labels: weightSeries.labels,
            series: [
                [70, 65, 77, 82]
            ]
        };
        this.poidsChartOptions = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: '245px'
        };
        this.poidsChartResponsive = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

    }

    getHeight() {
        var heightSeries = { labels: [], series: [] }
        this.infoService.getHeight(this.userId).subscribe(data => {

            if (data) {
                var heightId = data._id;
                this.infoService.getAllHeights(heightId).subscribe(data2 => {
                    if (data2) {
                        for (let height of data2) {
                            heightSeries.labels.push(this.convertDate(height.date));
                            heightSeries.series.push(height.height);
                        }

                        heightSeries.labels.push(this.convertDate(data.date));
                        heightSeries.series.push(data.height);
                    }
                });
            }
        });

        return heightSeries;
    }

    getWeight() {
        var weightSeries = { labels: [], series: [] }
        this.infoService.getWeight(this.userId).subscribe(data => {

            if (data) {
                var weightId = data._id;
                this.infoService.getAllWeights(weightId).subscribe(data2 => {
                    if (data2) {
                        for (let weight of data2) {
                            weightSeries.labels.push(this.convertDate(weight.date));
                            weightSeries.series.push(weight.weight);
                        }

                        weightSeries.labels.push(this.convertDate(data.date));
                        weightSeries.series.push(data.weight);
                    }
                });
            }
        });

        return weightSeries;
    }

    convertDate(inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat);
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear().toString().substring(2, 4)].join('/');
    }
}
