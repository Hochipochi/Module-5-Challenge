$(document).ready(function () {
    //listen for save button clicks
    $('.saveBtn').on('click', function (){
        // get nearby values
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id')
        console.log('this', time)
        console.log('value', value)


        // save in localStorage 
        localStorage.setItem(time, value)

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
                //alternative to use $(this).remove/addClass('past/present/future') to alter colors via css
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

    //load any saved data from localStorage
    $('#9 .description').val(localStorage.getItem('9'))
    $('#10 .description').val(localStorage.getItem('10'))
    $('#11 .description').val(localStorage.getItem('11'))
    $('#12 .description').val(localStorage.getItem('12'))
    $('#13 .description').val(localStorage.getItem('13'))
    $('#14 .description').val(localStorage.getItem('14'))
    $('#15 .description').val(localStorage.getItem('15'))
    $('#16 .description').val(localStorage.getItem('16'))
    $('#17 .description').val(localStorage.getItem('17'))

    //setInterval live updates the time for our schedule (function, time interval)
    setInterval(liveTime, 1000)
});