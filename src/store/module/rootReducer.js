import { combineReducers } from 'redux';

import login from './login/reducer';
import veterinario from './veterinario/reducer';
import historico from './historico/reducer';

export const rootReducer = combineReducers({
    login,
    veterinario,
    historico,
});
