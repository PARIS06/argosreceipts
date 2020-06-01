import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import theme from './components/UI/Theme';


//Store
import configureStore, { history } from './store';
import { ConnectedRouter } from 'connected-react-router';

export const store = configureStore();

// Render
ReactDOM.render(   
      <Provider store={store}>
            <BrowserRouter>
                  <ConnectedRouter history={history}>
                        <ThemeProvider theme={theme}>
                              <App />
                        </ThemeProvider>
                  </ConnectedRouter>
            </BrowserRouter>
      </Provider>,
   document.getElementById('root')
);

