/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    
    bindEvents: function() {
        var chart = new Highcharts.Chart({
                                         chart: {
                                            renderTo: 'container',
                                            type: 'pie',
                                            plotBackgroundColor: null,
                                            plotBorderWidth: null,
                                            plotShadow: false
                                         },
                                         
                                         title: {
                                            text: 'Some title'
                                         },
                                         
                                         legend: {
                                            enabled: false
                                         },
                                         
                                         tooltip: {
                                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                                         },
                                         
                                         plotOptions: {
                                            pie: {
                                                allowPointSelect: true,
                                                cursor: 'pointer',
                                                dataLabels: {
                                                    enabled: true,
                                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                                        style: {
                                                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'gray'
                                                        }
                                                }
                                            }
                                         },
                                         
                                         xAxis: {
                                            title: {
                                                text: 'position'
                                            }
                                         },
                                         
                                         yAxis: {
                                            title: {
                                                text: 'score'
                                            }
                                         },
                                         
                                         series: [{
                                                  type: 'pie',
                                                  name: 'Browser share',
                                                  data: [
                                                         ['Firefox',   45.0],
                                                         ['IE',       26.8],
                                                         {
                                                            name: 'Chrome',
                                                            y: 12.8,
                                                            sliced: true,
                                                            selected: true
                                                         },
                                                         ['Safari',    8.5],
                                                         ['Opera',     6.2],
                                                         ['Others',   0.7]
                                                         ]
                                                  }]
                                         });
    },
    
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
