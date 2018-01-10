$(document).ready(function() {
    /* Rates table data */
    var dataArr = [
        {
          "name": "Big Guy Financial",
          "apy": 0.75,
          "earnings": 376.41
        },
        {
          "name": "Dewey, Cheatam & Howe",
          "apy": 0.01,
          "earnings": 5.00
        },
        {
          "name": "URBank",
          "apy": 0.87,
          "earnings": 436.89
        },
        {
          "name": "First Onion",
          "apy": 0.01,
          "earnings": 5.00
        },
        {
          "name": "Bank of Everywhere",
          "apy": 0.01,
          "earnings": 5.00
        }
      ];
    function compare(a, b){
    var comparison = 0;
    if (a.apy > b.apy) {
        comparison = -1;
    } else if (b.apy > a.apy) {
        comparison = 1;
    }
    return comparison;
    }
    dataArr = dataArr.sort(compare); // Used to reorder data from highest APY to lowest
    var html = [];
    for(var i = 0; i < dataArr.length; i++) { 
        html += [
            '<tr>',
                '<td>' + dataArr[i].name + '</td>',
                '<td class="align-right">' + dataArr[i].apy + '%</td>',
                '<td class="align-right">$' + dataArr[i].earnings + '</td>',
            '</tr>'
            ].join('\n');
    }
    $('#table-display').html(html);

    /* This also could have been completed with an AJAX call if the JSON file was stored on a server to fetch. Listed below in comments is what that would have looked like */
    /*
    $.getJSON('./scripts/code-test.json', function(data) {
        var html = [];
        for(var i = 0; i < dataArr.length; i++) { 
            html += [
                '<tr>',
                    '<td>' + dataArr[i].name + '</td>',
                    '<td class="align-right">' + dataArr[i].apy + '%</td>',
                    '<td class="align-right">$' + dataArr[i].earnings + '</td>',
                '</tr>'
                ].join('\n');
        }
        $('#table-display').html(html);
    });
    */
    
    /* Tabs */
    $('ul.tabs li').on('click', function() {
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
    });
    
    /* Modal */
    var modal = $('#loginModal');
    var closeImg = $('.close');
    var loginButton = $('.login-button');
    loginButton.on('click', function() {
        modal.css('display', 'block');
    });
    closeImg.on('click', function() {
        modal.css('display', 'none');
    });
    $(window).on('click', function(event) {
        if (event.target == modal) {
            modal.css('display', 'none');
        }
    });
});