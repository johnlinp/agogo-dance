(function() {
    var photoPageIdx = 0;

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

        var createPhoto = function() {
            var photoIdx = photoPageIdx % 30;
            var photoId = 'photo-' + photoPageIdx;
            var container = document.getElementById('container');
            var photo = document.createElement('div');
            var inner = document.createElement('div');
            var img = document.createElement('img');

            img.setAttribute('src', 'photo/' + photoIdx + '.jpg');
            inner.classList.add('vertical-center-inner');
            photo.setAttribute('id', photoId);
            photo.classList.add('full');
            photo.classList.add('hidden');
            photo.classList.add('vertical-center-outer');

            inner.appendChild(img);
            photo.appendChild(inner);
            container.appendChild(photo);

            ++photoPageIdx;

            return photoId;
        };

        var setTransition = function(fromIdx, toIdx) {
            var from = document.getElementById(items[fromIdx]);
            var to = document.getElementById(items[toIdx]);

            from.addEventListener('click', function() {
                if (from.classList.contains('front-animation')) {
                    return;
                }

                from.classList.add('front-animation');
                to.classList.add('back-animation');

                to.addEventListener('animationend', function() {
                    from.style.visibility = 'hidden';
                    to.style.visibility = 'visible';

                    from.classList.remove('front-animation');
                    to.classList.remove('back-animation');

                    if (toIdx == items.length - 1) {
                        var photoId = createPhoto();
                        items.push(photoId);
                    }

                    setTransition(toIdx, toIdx + 1);
                });
            });
        };

        setTransition(0, 1);
    };

    putEnvelopeName();
    listenClick();
})();
