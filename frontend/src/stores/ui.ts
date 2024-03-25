import type { Writable } from 'svelte/store';
import { writable} from 'svelte/store';

class UIState {
    darkMode:  Writable<boolean>

    constructor(){
        this.darkMode = writable(false)}
} 

export const uiState = new UIState()
