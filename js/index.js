(function() {
    var putEnvelopeName = function() {
        var name = window.location.hash.substr(1);
        var receiver = document.getElementById('receiver');

        if (name === '') {
            name = '無名氏';
        }

        receiver.innerHTML = decodeURIComponent(name) + '　收';
    };

    var listenClick = function() {
        var items = [
            'envelope',
            'cover',
        ];

        var setTransition = function(from, to) {
            from.addEventListener('click', function() {
                from.classList.add('front-animation');
                to.classList.add('back-animation');
            });
        };

        var first = document.getElementById(items[0]);
        var second = document.getElementById(items[1]);
        setTransition(first, second);
    };

    putEnvelopeName();
    listenClick();
})();
