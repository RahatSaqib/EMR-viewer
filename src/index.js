import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import WebFontLoader from 'webfontloader'
import {Provider} from 'react-redux'
import store from './store'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

WebFontLoader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons'],
    },
})

//store.subscribe(() => console.log('store updated:', store.getState()));

const theme = createMuiTheme({
    overrides: {
        MuiFormControlLabel: {
            label: {
                fontSize: '0.85em'
            },
        },
        MuiFormLabel: {
            root: { 
                '&$focused': {
                    color:'#CCCCCC',
                },   
            }
         
        }
    },
    palette: {
        primary: {
            main: '#004d40',
        },
        secondary: {
            main: '#888888',
        },
        type: 'dark',
    },
  })

  
ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme = { theme }>
            <App />
        </MuiThemeProvider>
    </Provider>, 
    document.getElementById('root')
)

serviceWorker.register()
 