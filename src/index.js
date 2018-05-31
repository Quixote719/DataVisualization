import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import Dynamic from './dynamicChart.js';
import Events from './echartEvents.js'
import DataTable from './Datatable.js'



ReactDOM.render(<div><Dynamic /><Events /><DataTable /></div>, document.getElementById('root'));
