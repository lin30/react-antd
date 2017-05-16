import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

// require.ensure(dependencies, callback, chunkName)
// 这是 webpack 提供的方法，这也是按需加载的核心方法。
// 第一个参数是依赖，第二个是回调函数，第三个就是上面提到的 chunkName，用来指定这个 chunk file 的 name。

const IndexPage = (nextState, cb)=> {
    require.ensure([], (require)=> {
        cb(null, require("./routes/IndexPage").default)
    }, "IndexPage")
}
const Users = (nextState, cb)=> {
    require.ensure([], (require)=> {
        cb(null, require("./routes/Users").default)
    }, "Users")
}
const RouteConfig = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute getComponent={IndexPage}/>
            <Route path="/IndexPage" getComponent={ IndexPage }/>
            <Route path="/Users" getComponent={ Users }/>
        </Route>
    </Router>
);

export default RouteConfig;
