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
            'invite',
            'info',
            'thanks',
        ];

        var setTransition = function(fromIdx, toIdx) {
            var from = document.getElementById(items[fromIdx]);
            var to = document.getElementById(items[toIdx]);

            from.addEventListener('click', function() {
                from.classList.add('front-animation');
                to.classList.add('back-animation');

                if (toIdx < items.length - 1) {
                    to.addEventListener('animationend', function() {
                        to.style.opacity = 1;
                        to.classList.remove('back-animation');
                        setTransition(fromIdx + 1, toIdx + 1);
                    });
                }
            });
        };

        setTransition(0, 1);
    };

    putEnvelopeName();
    listenClick();
})();
