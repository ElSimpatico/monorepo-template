import React from 'react';
import ReactDom from 'react-dom';
import { HelloWorld } from 'ui-core';

const rootElement = document.getElementById('root');

ReactDom.render(<HelloWorld />, rootElement);
