document.getElementById('btn-contrast').addEventListener('click', function (e) {
    e.preventDefault();
    var body = document.getElementsByTagName("html")[0];
    if(body.classList.contains('contrast')) {
        body.classList.remove('contrast');
    } else {
        body.classList.add('contrast');
    }
});