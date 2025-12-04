function switchDivsAB(event) {
    document.getElementById('divA').style.display = 'none';
    document.getElementById('divB').style.display = 'block';
    document.body.style.backgroundColor = '#8E8E93';
}

function switchDivsCD(event) {
    document.getElementById('divC').style.display = 'none';
    document.getElementById('divD').style.display = 'block';
    document.body.style.backgroundColor = '#595A5C';
}

function switchDivsEF(event) {
    document.getElementById('divE').style.display = 'none';
    document.getElementById('divF').style.display = 'block';
    document.body.style.backgroundColor = '#2D2E2F';
}

function switchDivsGH(event) {
    document.getElementById('divG').style.display = 'none';
    document.getElementById('divH').style.display = 'block';
    document.body.style.backgroundColor = '#151515';
}

window.onload = function() {
    var elementA = document.getElementById('divA');
    var elementC = document.getElementById('divC');
    var elementE = document.getElementById('divE');
    var elementG = document.getElementById('divG');

    var bgColor = ''; // Variable to store the current background color

    var mouseOutA = function() {
        if (!bgColor) {
            document.body.style.backgroundColor = '';
            document.body.style.transition = 'background-color 1s ease';
        }
    };
    var mouseOutC = function() {
        if (!bgColor) {
            document.body.style.backgroundColor = '';
            document.body.style.transition = 'background-color 1s ease';
        }
    };
    var mouseOutE = function() {
        if (!bgColor) {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
            document.body.style.transition = 'background-color 1s ease, color 1s ease';
        }
    };
    var mouseOutG = function() {
        if (!bgColor) {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
            document.body.style.transition = 'background-color 1s ease';
        }
    };

    elementA.addEventListener('mouseover', function() {
        document.body.style.backgroundColor = '#858585';
        document.body.style.transition = 'background-color 2s ease';
    });
    elementA.addEventListener('mouseout', mouseOutA);
    elementA.addEventListener('click', function() {
        bgColor = '#858585'; // Set the background color
        document.body.style.backgroundColor = bgColor;
        elementA.removeEventListener('mouseout', mouseOutA);
    });

    elementC.addEventListener('mouseover', function() {
        document.body.style.backgroundColor = '#494949';
        document.body.style.transition = 'background-color 2s ease';
    });
    elementC.addEventListener('mouseout', mouseOutC);
    elementC.addEventListener('click', function() {
        bgColor = '#494949'; // Set the background color
        document.body.style.backgroundColor = bgColor;
        elementC.removeEventListener('mouseout', mouseOutC);
    });

    elementE.addEventListener('mouseover', function() {
        document.body.style.backgroundColor = '#303030';
        document.body.style.color = '#f6f6f6';
        document.body.style.transition = 'background-color 2s ease, color 2s ease';
    });
    elementE.addEventListener('mouseout', mouseOutE);
    elementE.addEventListener('click', function() {
        bgColor = '#303030'; // Set the background color
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = '#f6f6f6';
        elementE.removeEventListener('mouseout', mouseOutE);
    });

    elementG.addEventListener('mouseover', function() {
        document.body.style.backgroundColor = '#141414';
        document.body.style.color = '#f6f6f6';
        document.body.style.transition = 'background-color 2s ease';
    });
    elementG.addEventListener('mouseout', mouseOutG);
    elementG.addEventListener('click', function() {
        bgColor = '#141414'; // Set the background color
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = '#f6f6f6';
        elementG.removeEventListener('mouseout', mouseOutG);
    });
};



window.addEventListener('DOMContentLoaded', (event) => {
    let downtownHeight = document.querySelector('.downtown').offsetHeight;
    document.documentElement.style.setProperty('--downtown-height', `${downtownHeight}px`);
});

window.addEventListener('resize', (event) => {
    let downtownHeight = document.querySelector('.downtown').offsetHeight;
    document.documentElement.style.setProperty('--downtown-height', `${downtownHeight}px`);
});