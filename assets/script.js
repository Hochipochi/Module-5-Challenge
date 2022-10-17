//global hour variable used for local storage
var hour = moment().hour()

$(document).ready(function () {
    //listen for save button clicks
    $('.saveBtn').on('click', function (){
        // get nearby values
        var timeBlockEl = $('.time-block');
        var text = timeBlockEl.children('textarea').eq(0)

        // save in localStorage 
        localStorage.setItem(hour, text);

        // show notification that item was saved to localStorage by adding class 'show'
        

        //timeout to remove 'show' class after 5 seconds
        setTimeout(function () {
            $('.notification').removeClass('show');
        }, 5000);
    });

    function hourUpdater() {
        var currentHour = moment().hour()

        //loop over each row in html
        $('.row').each(function(){
            var currentRow = $(this).attr('id')
            currentRow = parseInt(currentRow)

            //Conditional if/else statements to determine if currentHour is less than, equal to, or greater than currentRow.
            if (currentRow < currentHour) {
                //change color of rows
                $(this).css('background-color', '#d3d3d3')
            } else if (currentRow === currentHour) {
                $(this).css('background-color', '#ff6961')
            } else if (currentRow > currentHour) {
                $(this).css('background-color', '#77dd77')
            }
        })
        //loop over time blocks ---> https://api.jquery.com/each/
            //inside this loop, 
            //check if we've moved past this time. If we have, make the row grey. If it's future, make it green. past, make it red.
            //use the classes to style the rows (maybe insert classes)
    }

    hourUpdater();

    //set up interval to check if current time needs to be updated
    function liveTime() {
        var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        $('#currentDay').text(currentTime)
    }

    //setInterval live updates the time for our schedule (function, time interval)
    setInterval(liveTime, 1000)
});