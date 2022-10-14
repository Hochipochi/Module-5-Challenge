$(document).ready(function () {
    //listen for save button clicks
    $('.saveBtn').on('click', function (){
        // get nearby values

        // save in localStorage

        // show notification that item was saved to localStorage by adding class 'show'

        //timeout to remove 'show' class after 5 seconds
        setTimeout(function () {
            $('.notification').removeClass('show');
        }, 5000);
    });

    function hourUpdater() {
        //loop over time blocks ---> https://api.jquery.com/each/
            //inside this loop, //check if we've moved past this time. If we have, make the row grey. If it's future, make it green. past, make it red.
            //use the classes to style the rows (maybe insert classes)
    }

    hourUpdater();

    //set up interval to check if current time needs to be updated
    var interval = 
});