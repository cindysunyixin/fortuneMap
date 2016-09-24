(() => {
    const Aladdin = new blk.API();

    'use strict';
    const map = initMap('overlay');

    // render an svg as mega container
    const svg = d3.select('#overlay').append('svg')
        .attr('width', '100%')
        .attr('height', '100%');

    // colour scale
    const colourScale = d3.scaleSequential(d3.interpolateYlGnBu);

    // fetch data and render circle svg elements
    $.get('/data', (res) => {
        console.log(res);
        d3.json(res, (err, data) => {
            if (err) {
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

        });
    });




})();