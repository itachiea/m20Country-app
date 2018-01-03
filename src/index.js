import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';

render(
    <div>
        <Provider store={store}>
            <h1>Inicjalizacja projektu</h1>
        </Provider>
        <DevTools store={store}/>   
    </div>,
    document.getElementById('root')
);