var callBtn = document.querySelector('#callMe');
var callModal = document.querySelector('#callModal');
var callClose = document.querySelector('#callClose');

callBtn.addEventListener('click', function() {
    callModal.classList.add('modal_active');
});

callClose.addEventListener('click', function() {
    callModal.classList.remove('modal_active');
});
