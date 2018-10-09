var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentBodyIndex from './components/bodyindex';
import ComponentFooter from './components/footer';
class Index extends React.Component{
    // componentWillMount(){//组件将要加载
    //     console.log("index--componentWillMount");
    // }
    // componentDidMount(){//组件已经加载完成
    //     console.log("index--componentDidMount");
    // }
    render(){
        return (
            <div>
                <ComponentHeader/>
                <ComponentBodyIndex username="PengLei"/>
                <ComponentFooter/>
            </div>
        )
    }
}
ReactDOM.render(
    <Index/>,
    document.getElementById('divMain')
);
// 实现热更新
if(module.hot){
    module.hot.accept();
}
