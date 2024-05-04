var wlist = ['Hybrid Theory', 'Meteora', 'Fallen', 'Yankee Hotel Foxtrot', 'Toxicity', 'Follow the Leader', 'Issues', 'Half-Life', 'Memento', 'GoldSrc', 'Quake'];
var current = 0;
var element = $('#target');

setInterval(function(){
    (current == wlist.length) ? 0 : current++;
    var x = wlist[current];
    $('p').each(function(){
        $(this).find(element).fadeOut('fast', function(){
            $(this).html(x).fadeIn();
        });
    });
}, 3000);