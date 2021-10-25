$(document).ready(function() {
    var start_date_input = $('input[name="start_date"]'); //our date input has the name "start_date"
    var end_date_input = $('input[name="end_date"]'); //our date input has the name "end_date"
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    var options = {
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    };
    start_date_input.datepicker(options);
    end_date_input.datepicker(options);
})