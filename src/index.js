import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
// import {Router, Route, Link} from 'react-router';

import Home from 'pages/Home/Home';
// import Shop from 'pages/Shop/Shop';
// import MyRouter from 'pages/router/router.js';


// 模块热替换
// if (module.hot) {
//     module.hot.accept(Home,function(){
//         console.log('hot replace home')
//     });
// }


// ReactDOM.render(

// <Router>
//     <Route path="/" component={MyRouter}>
//       <Route path="home" component={Home} />
//       <Route path="shop" component={Shop} />
//     </Route>
//   </Router>
//     ,
//     document.getElementById('App')
// )

ReactDOM.render(
  <Home />,
  document.getElementById('App')
)