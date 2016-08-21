(function() {
    var name = window.location.hash.substr(1);
    var receiver = document.getElementById('receiver');

    if (name === '') {
        name = '無名氏';
    }

    receiver.innerHTML = decodeURIComponent(name) + '　收';
})();
