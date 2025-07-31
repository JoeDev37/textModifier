
const themes = document.getElementById('themes');
const icons = document.getElementById('icons');
const theme = document.getElementById('theme');
const child01 = document.getElementById('child01');
const child02 = document.getElementById('child02');
const child03 = document.getElementById('child03');
const container = document.getElementById('container');
const inputColorChange = document.getElementById('input');
const display = document.getElementById('display');
const copyTextButton = document.getElementById('copyText');

themes.addEventListener('click', () => {

        const isDark = themes.classList.contains('dark-mode-button');

          themes.classList.toggle('dark-mode-button');
          themes.classList.toggle('light-mode-button');

        icons.src = isDark ? 'icons/sun.svg' : 'icons/moon.svg';

    console.log('...')

    const bgColor = getComputedStyle(document.body).backgroundColor;

    if(bgColor === 'rgb(17, 17, 27)') {
        document.body.style.backgroundColor = '#313244';
        // theme.style.backgroundColor = '#11111b'
        // child01.style.backgroundColor = '#313244'
        // child02.style.backgroundColor = '#313244'
        // child03.style.backgroundColor = '#313244'
        // container.style.backgroundColor = '#cdd6f4'
        // inputColorChange.style.backgroundColor = '#313244'
        // display.style.backgroundColor = '#cdd6f4'
        // copyTextButton.style.backgroundColor = '#11111b'

        const bg11111b = [theme, copyTextButton];
        const bg313244 = [child01, child02, child03];
        const bgCdd6f4 = [container, display];

        bg11111b.forEach(e => e. style.backgroundColor = '#11111b');
        bg313244.forEach(e => e.style.backgroundColor = '#313244');
        bgCdd6f4.forEach(e => e.style.backgroundColor = '#cdd6f4');
    } else {
        document.body.style.backgroundColor = '#11111b';
        // theme.style.backgroundColor = '#313244'
        // child01.style.backgroundColor = '#11111b'
        // child02.style.backgroundColor = '#11111b'
        // child03.style.backgroundColor = '#11111b'
        // container.style.backgroundColor = '#313244'
        // inputColorChange.style.backgroundColor = '#cdd6f4'
        // display.style.backgroundColor = '#313244'
        // copyTextButton.style.backgroundColor = '#313244'

        const bg11111b = [child01, child02, child03];
        const bg313244 = [theme, container, display, copyTextButton];

        bg11111b.forEach(e => e.style.backgroundColor = '#11111b');
        bg313244.forEach(e => e.style.backgroundColor = '#313244');
    }


    
});
