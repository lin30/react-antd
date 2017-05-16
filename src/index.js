import './index.scss';
import {IndexRoute, Router, Route, hashHistory} from 'react-router';
import {render} from 'react-dom';
import React from 'react';

// 关于移动端 click 事件
// https://github.com/ant-design/ant-design-mobile/wiki/FAQ
import FastClick from './utils/fastclick';
FastClick.attach(document.body);

import {Provider} from 'react-redux';
import store from './redux/store'
import router from './router'
render(
    (
        <Provider store={store}>
            {router}
        </Provider>
    ), document.getElementById('app')
);