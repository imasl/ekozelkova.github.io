/**
 * Created by Кэтрин on 03.02.2016.
 */

var feedbackCallbackSuccess = function() {
    $('.alert-success').show();
};

var feedbackCallbackError = function () {
    $('.alert-danger').show();
};
var postMessage = function() {
    $.post('http://ekozelkova.com/sendMessage',{message:'$("#text-area-form").val()',email:'$("#feedback-email-field").val()'},
        feedbackCallbackSuccess).fail(feedbackCallbackError());
    };

$(document).ready(function() {
    $(".languageRu").on("click", function () {
        $('.ru').removeClass('hidden-xs-up');
        $('.en').addClass("hidden-xs-up");
    });
});

$(document).ready(function() {
    $('.languageEn').on('click', function() {
        $('.ru').addClass('hidden-xs-up');
        $('.en').removeClass('hidden-xs-up');
    });
});