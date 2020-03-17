$(document).ready(function() {

    var callBtn = $('#callMe');
    var callModal = $('#callModal');
    var callClose = $('#callClose');

    callBtn.on('click', function() {
    callModal.addClass('modal_active');
    });

    callClose.on('click', function() {
    callModal.removeClass('modal_active');
    });

});
