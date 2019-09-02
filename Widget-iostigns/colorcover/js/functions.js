var set = document.querySelector("#container");
set.style.display = isSet;

function togglePlay() {
    var playbtn = document.querySelector("#PlayPause");
    playbtn.classList.remove("fa-pause");
    playbtn.classList.add("fa-play");
}

function togglePause() {
    var pausebtn = document.querySelector("#PlayPause");
    pausebtn.classList.remove("fa-play");
    pausebtn.classList.add("fa-pause");
}

function mainUpdate(type) {
    var albumart = document.querySelector('#artworkImage');
    if (type == "music") {
        art = new Image();
        art.onload = function () {
            albumart.src = isplaying ? "file:///var/mobile/Documents/Artwork.jpg?" + (new Date()).getTime() : "images/No-album-art.png";
        };
        art.src = isplaying ? "file:///var/mobile/Documents/Artwork.jpg?" + (new Date()).getTime() : "images/No-album-art.png";
        art.addEventListener('load', function () {
            var vibrant = new Vibrant(art);
            var swatches = vibrant.swatches()
            for (var swatch in swatches)
                if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
                    document.querySelector(".fa-music").style.color = isplaying ? swatches.Vibrant.getHex() : "#202727";
                    document.querySelector(".fa-step-backward").style.color = isplaying ? swatches.Vibrant.getHex() : "#202727";
                    document.querySelector("#PlayPause").style.color = isplaying ? swatches.Vibrant.getHex() : "#202727";
                    document.querySelector(".fa-step-forward").style.color = isplaying ? swatches.Vibrant.getHex() : "#202727";
                    document.querySelector(".name").style.color = isplaying ? swatches.Vibrant.getHex() : "#202727";
                    document.querySelector(".details").style.color = isplaying ? swatches.Vibrant.getHex() : "#202727";
                    document.querySelector(".song").style.color = isplaying ? swatches.Vibrant.getHex() : "#202727";
                    var tc = swatches.Vibrant.getHex();
                    var ltc = tinycolor(tc).lighten(30).toString();
                }
                document.querySelector(".artist").style.color = isplaying ? ltc : "#202727";
        })
        var imgs = $('img');
        setTimeout(function () {
            imgs.imgcolr(function (img, color) {
                var bgcolor = color;
                document.querySelector('#info').style.backgroundColor = isplaying ? bgcolor : "#ffffff";
            });
        }, 100);
        document.querySelector('.name').innerHTML = isplaying ? "Playing" : "Not playing";
        document.querySelector('.song').innerHTML = isplaying ? title : " ";
        document.querySelector('.artist').innerHTML = isplaying ? artist : " ";
        isplaying ? togglePause() : togglePlay();
        document.querySelector("#container").style.display = isplaying ? 'block' : isSet;
    }
}

function Previous() {
    window.location = 'xeninfo:prevtrack';
}

function PlayPause() {
    window.location = 'xeninfo:playpause';
}

function Next() {
    window.location = 'xeninfo:nexttrack';
}