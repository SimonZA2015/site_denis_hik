function disableBodyScroll({ savePosition = false } = {}) {
    if (document.readyState === 'complete') {
        if (document.body.scrollHeight > window.innerHeight) {
            if (savePosition) document.body.style.marginTop = `-${window.pageYOffset}px`;
            document.body.style.position = 'fixed';
            document.body.style.overflowY = 'scroll';
        }
    } else {
        window.addEventListener('load', () => disableBodyScroll({ savePosition }));
    }
}

function generateGradient() {

        var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];

        function populate(a) {
            for ( var i = 0; i < 6; i++ ) {
                var x = Math.round( Math.random() * 14 );
                var y = hexValues[x];
                a += y;
            }
            return a;
        }

        var newColor1 = populate('#');
        var newColor2 = populate('#');
        var angle = Math.round( Math.random() * 360 );

    return ("linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")")

}

export  {generateGradient, disableBodyScroll}