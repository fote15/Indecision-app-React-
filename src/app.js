import validator from 'validator';
import ReactDOM from 'react-dom';
import React from 'react';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

  ReactDOM.render(<div> <IndecisionApp options={['pervy','vtory']}/></div> , document.getElementById('app'));
