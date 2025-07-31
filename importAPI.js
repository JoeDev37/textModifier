
const googleFontSelection = document.getElementById('fontSelection');
const defaultGoogleFontOutput = document.getElementById('defaultOutput');

async function importAPI() {

    const apikey = 'AIzaSyBsHj7jSQwCZNBN8iR7YjOh036zVTtZRHQ'
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apikey}`;

    try{
        const response = await fetch(url);
        const data = await response.json()
        
        if(!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
        }

        data.items.forEach(font => {
            const option  = document.createElement('option');
            option.value = font.family;
            option.textContent = font.family;
            googleFontSelection.appendChild(option)
        })

        googleFontSelection.addEventListener('change', () => {
            const font = googleFontSelection.value;
            const link = document.createElement('link');
            link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/ /g, '+')}&display=swap`;
            link.rel = 'stylesheet';
            document.head.appendChild(link);

            defaultGoogleFontOutput.style.fontFamily = `${font}, sans-serif`

        })

    }
    catch(error) {
        console.error(error.message)
    }
}

importAPI();

