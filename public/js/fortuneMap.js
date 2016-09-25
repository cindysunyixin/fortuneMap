(() => {
    'use strict';
    const map = initMap('overlay');

    // render an svg as mega container
    const svg = d3.select('#overlay').append('svg')
        .attr('width', '100%')
        .attr('height', '100%');

    // colour scale
    const colourScale = d3.scaleSequential(d3.interpolateYlGnBu);


    var successCallback = function (res) {

        d3.json('/data', (err, data) => {
            if (err) {
            	console.log('error')
                console.log(err);
            }
            svg.selectAll('g')
                .data(data)
                .enter()
                .append('g')
                .attr('class', 'circles');

            svg.selectAll('circles').each(function (d, i) {
                let price = d.price;
                let company = d.company;

                d3.select(this).append('circle')
                    .attr('r', 30) // add interporlation functions
                    .attr('cx', 50)
                    .attr('cy', 50)
                    .attr('fill', colourScale(price));
            });

            console.log(data)
        });
    }

successCallback('/data');
// console.log("ball")

// console.log($.ajax)
// $.ajax({
//   type: "GET",
//   url: '/data',
//   dataType: 'json',
//   success: successCallback,
//   error:  (jqXHR, textStatus, errorThrown) => {console.log(errorThrown)},
//   complete: (res) => {console.log("ball")}
// })

console.log("aha")

    // // fetch data and render circle svg elements
    // $.get('/data', (res) => { console.log("check")


    // });




})();