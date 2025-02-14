var padding = {top:20, right:40, bottom:0, left:0},
    w = 500 - padding.left - padding.right,
    h = 500 - padding.top - padding.bottom,
    r = Math.min(w, h) / 2,
    rotation = 0,
    oldrotation = 0,
    picked = 100000,
    oldpick = [],
    color = d3.scale.category20();

var data = [
    {"label": "Goblin", "value": 10, "brawn": "xxx"},
    {"label": "Half goblin", "value": 10, "brawn": "xxx"},
    {"label": "Quarter goblin", "value": 10, "brawn": "xxx"},
    {"label": "Double goblin", "value": 10, "brawn": "xxx"},
    {"label": "Triple goblin", "value": 10, "brawn": "xxx"},
    {"label": "Orc", "value": 10, "brawn": "xxx"},
    {"label": "Half orc", "value": 10, "brawn": "xxx"},
    {"label": "Two orcs", "value": 10, "brawn": "xxx"},
    {"label": "Hydra", "value": 10, "brawn": "xxx"},
    {"label": "Dragon", "value": 10, "brawn": "xxx"},
    {"label": "Human man", "value": 10, "brawn": "xxx"},
    {"label": "Freaky H Joy 1 (one)", "value": 10, "brawn": "xxx"},
    {"label": "Slime", "value": 10, "brawn": "xxx"},
    {"label": "Larger slime", "value": 10, "brawn": "xxx"},
    {"label": "Even larger slime", "value": 10, "brawn": "xxx"},
    {"label": "All encompassing slime", "value": 10, "brawn": "xxx"},
    {"label": "The world itself", "value": 10, "brawn": "xxx"},
    {"label": "God(not the main one)", "value": 10, "brawn": "xxx"},
    {"label": "Roll the god table", "value": 10, "brawn": "xxx"},
    {"label": "Wolf", "value": 10, "brawn": "xxx"},
    {"label": "Large wolf", "value": 10, "brawn": "xxx"},
    {"label": "Forest guardian", "value": 10, "brawn": "xxx"},
    {"label": "Forest of guardians (at least three of them)", "value": 10, "brawn": "xxx"},
    {"label": "Forest", "value": 10, "brawn": "xxx"},
    {"label": "Evil dice", "value": 10, "brawn": "xxx"},
    {"label": "Beastmaster with beast", "value": 10, "brawn": "xxx"},
    {"label": "Beastmaster without beast", "value": 10, "brawn": "xxx"},
    {"label": "Beast without beastmaster", "value": 10, "brawn": "xxx"},
    {"label": "Neither beast nor beastmaster", "value": 10, "brawn": "xxx"},
    {"label": "Your partner (loved or otherwise)", "value": 10, "brawn": "xxx"},
    {"label": "Large worm out of ground", "value": 10, "brawn": "xxx"},
    {"label": "spider", "value": 10, "brawn": "xxx"},
    {"label": "large spider", "value": 10, "brawn": "xxx"},
    {"label": "scorpion", "value": 10, "brawn": "xxx"},
    {"label": "large scorpion", "value": 10, "brawn": "xxx"},
    {"label": "Pirate", "value": 10, "brawn": "xxx"},
    {"label": "Giant", "value": 10, "brawn": "xxx"},
    {"label": "City mobster", "value": 10, "brawn": "xxx"},
    {"label": "pack o mobsters", "value": 10, "brawn": "xxx"},
    {"label": "pack of mobsters", "value": 10, "brawn": "xxx"},
    {"label": "bear", "value": 10, "brawn": "xxx"},
    {"label": "frog", "value": 10, "brawn": "xxx"},
    {"label": "giant frog", "value": 10, "brawn": "xxx"},
    {"label": "ancient dragon", "value": 10, "brawn": "xxx"},
    {"label": "elder slime", "value": 10, "brawn": "xxx"},
    {"label": "cloud giant", "value": 10, "brawn": "xxx"},
    {"label": "woods lurker", "value": 10, "brawn": "xxx"},
    {"label": "fire elemental", "value": 10, "brawn": "xxx"},
    {"label": "spider queen", "value": 10, "brawn": "xxx"},
    {"label": "assassin", "value": 10, "brawn": "xxx"}
];

var svg = d3.select('#chart')
    .append("svg")
    .data([data])
    .attr("width", w + padding.left + padding.right)
    .attr("height", h + padding.top + padding.bottom);

var container = svg.append("g")
    .attr("class", "chartholder")
    .attr("transform", "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")");

var vis = container.append("g");

var pie = d3.layout.pie().sort(null).value(function(d) { return d.value; });

var arc = d3.svg.arc().outerRadius(r);

var arcs = vis.selectAll("g.slice")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "slice");

arcs.append("path")
    .attr("fill", function(d, i) { return color(i); })
    .attr("d", arc);

arcs.append("text")
    .attr("transform", function(d) {
        d.innerRadius = 0;
        d.outerRadius = r;
        d.angle = (d.startAngle + d.endAngle) / 2;
        return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 10) + ")";
    })
    .attr("text-anchor", "end")
    .text(function(d, i) { return data[i].label; });

container.on("click", spin);

function spin(d) {
    container.on("click", null);
    if (oldpick.length == data.length) {
        console.log("done");
        container.on("click", null);
        return;
    }

    var ps = 360 / d3.sum(data, d => d.value),
        pieslice = Math.round(1440 / d3.sum(data, d => d.value)),
        rng = Math.floor((Math.random() * 1440) + 360);

    rotation = (Math.round(rng / ps) * ps);
    picked = Math.round(data.length - (rotation % 360) / ps);
    picked = picked >= data.length ? (picked % data.length) : picked;
    if (oldpick.indexOf(picked) !== -1) {
        d3.select(this).call(spin);
        return;
    } else {
        oldpick.push(picked);
    }
    rotation += 90 - Math.round(ps / 2);
    vis.transition()
        .duration(3000)
        .attrTween("transform", rotTween)
        .each("end", function() {
            d3.select("#brawn h1").text(data[picked].brawn);
            oldrotation = rotation;
            container.on("click", spin);
        });
}

svg.append("g")
    .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
    .append("path")
    .attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
    .style({"fill": "black"});

container.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 60)
    .style({"fill": "white", "cursor": "pointer"});

container.append("text")
    .attr("x", 0)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .text("SPIN")
    .style({"font-weight": "bold", "font-size": "30px"});

function rotTween(to) {
    var i = d3.interpolate(oldrotation % 360, rotation);
    return function(t) {
        return "rotate(" + i(t) + ")";
    };
}
