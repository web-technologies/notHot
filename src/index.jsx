/**
 * Created by Рашид on 24.02.2018.
 */
// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './containers/App'
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
// import reducer from './reducers'
// console.log('deffdddd3')
// const middleware = [ thunk ]
// if (process.env.NODE_ENV !== 'production') {
//     middleware.push(createLogger())
// }
// if(process.env.NODE_ENV === 'development'){
//
//     console.log('dev')
// }
// const store = createStore(
//     reducer,
//     applyMiddleware(...middleware)
// )
//
//
//
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );
// console.log(module)
//  if (module.hot) {
//      console.log('Accepting the updated printMe module!');
//        module.hot.accept('./containers/App.jsx', function() {
//              console.log('Accepting the updated printMe module!');
//
//            })
//      }

// import React from 'react';
// import { render } from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import App from './containers/App';
// const renderApp = Component => {
//     render(
//         <AppContainer>
//             <Component />
//         </AppContainer>,
//         document.getElementById('root')
//     );
// }
//
// renderApp(App);
//
// if (module.hot) {
//     module.hot.accept('./containers/App', () => { renderApp(App); });
// }

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './containers/App'

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./containers/App', () => { render(App) })
}


