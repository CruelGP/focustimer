import state from './state.js'

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
}

export function reset(){
    state.isRunning = false
    document.documentElements.classList.remove('running')
}

export function set(){
    
}

export function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle('music-on')
}