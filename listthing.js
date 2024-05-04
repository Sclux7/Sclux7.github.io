var wlist = ['Hybrid theory', 'Meteora', 'Fallen', 'Yankee Hotel Foxtrot', 'Toxicity', 'Follow the Leader', 'Issues', 'Half-Life', 'Memento', 'GoldSrc', 'Quake'];
var current = 0;

setInterval(function(){
    var x = list(current);
    $('p').each(function(){
        $this.find('strong').fadeOut('fast', function(){
            $(this).html(x).fadeIn();
        });
    });
    (current == wlist.length) ? 0 : current++;
}, 3000);