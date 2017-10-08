import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import todos from './components/todos';


ReactDOM.render(<App initData={todos}/>, document.getElementById('root'));
registerServiceWorker();
