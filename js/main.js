(function() {
    "use strict";
    
    var data = teamData;
    function showTeamData(ractive) {
        var length = data.length;
        var rows = 6;
        if (length < 6) {
            rows = 3;
        }
        ractive.set({team : data, rows : rows});
    }
    
    $(document).ready(function() {
        var ractive = new Ractive({
            el: 'team-container',
            template: '#team-template'
        });
        
        //show team data information in page
        showTeamData(ractive);
        
        $(".element").typed({
		  strings: ["'Inspiring a Community'", "'Inspiring a Generation'" , "MOSAIC+"],
		  typeSpeed: 80,
		  backSpeed: 70,
		  startDelay: 0,
		  backDelay: 1500,
		  loop: false,
		  callback: function() {
			setTimeout(function() {
			  $('.typed-cursor').css('visibility', 'shown');
			}, 1200);
		  }
		});
    });
})();