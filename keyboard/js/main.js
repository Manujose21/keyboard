
const keyShadow = (key)=>{ 
        keyPress = key.dataset.key
        key.classList.add('active')
        setInterval(()=>{
        key.classList.remove('active')
         }, 500)  
         write.textContent = 'se pulso '+ key.dataset.key
}
const gamingMoodActive = ()=>{
    if(keyPress == "F4" && moodGaming == false){
        moodGaming = true
        keyboard.classList.add('gamer')
    }
    else if(keyPress == "F4" && moodGaming == true){
        moodGaming = false
        keyboard.classList.remove('gamer')

    }
}
const typeTheme = ()=>{
    if(theme == 'light'){
        theme = 'dark'
        keyboard.classList.add(theme)
        btnTheme.textContent = 'light-theme'

    }else if(theme != 'light'){
        keyboard.classList.remove(theme)
        theme = 'light'
        btnTheme.textContent = 'dark-theme'
    }
}
const keys = document.querySelectorAll('[data-key]')
const write = document.getElementById('write')
const keyboard = document.querySelector('.keyboard-container')
const btnTheme = document.querySelector('.btn-theme')
let keyPress
let moodGaming = false;
let theme = 'light'

globalThis.addEventListener('keydown', (event)=>{
    keys.forEach(key =>{
        if(event.key == key.dataset.key){
            keyShadow(key)
        }
    })
    gamingMoodActive()
})
keys.forEach(key=>{
    key.addEventListener('click', (event)=>{
        console.log()
        if(event.target.dataset.key == key.dataset.key){
           keyShadow(key);
        }
    })
})
btnTheme.addEventListener('click', ()=>{
    typeTheme()
})
