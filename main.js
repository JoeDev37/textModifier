
const input = document.getElementById('input')
const copyText = document.getElementById('copyText');
const fontSize = document.getElementById('fontSize');
const pickColor = document.getElementById('pickColor');
const defaultOutput = document.getElementById('defaultOutput');
const fontSelection = document.getElementById('fontSelection');
const copiedTextBtn = document.getElementById('copiedTextBtn');
const clickToDisplay = document.getElementById('clickToDisplay');


input.addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
        defaultOutput.textContent = input.value;
    }
})

pickColor.addEventListener('input', () => {
    defaultOutput.style.color = pickColor.value;
});

clickToDisplay.addEventListener('click', () => {
    let input = document.getElementById('input').value;

    if (input == '' || input == undefined || input == null) {
        alert('type something to see the output');
        defaultOutput.textContent = '';
    } else {
        defaultOutput.textContent = input
    }

    defaultOutput.style.color = pickColor.value;
    
});

fontSize.addEventListener('input', () => {
    defaultOutput.style.fontSize = fontSize.value + 'px'
})

fontSelection.addEventListener('change', () => {
    defaultOutput.style.fontFamily = fontSelection.value;
})

copyText.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(defaultOutput.textContent)

        copiedTextBtn.style.visibility = 'visible'

            setTimeout(() => {
                copiedTextBtn.style.visibility = 'hidden';
                console.log('copied!')
            }, 2000);
    }
    catch(error) {
        console.error(error);
    }

})
