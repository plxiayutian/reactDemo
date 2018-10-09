import React from 'react';
import ComponentBodyChild from './childindex';

const defaultProps={
    username:'这是一个默认的用户名'
};

export default class ComponentBodyIndex extends React.Component{
    //初始化构造函数
    constructor(){
        super(); //调用基类的所有初始化方法
        this.state={
            username:"Aaron",
            age:25
        }
    }
    changeUserInfo(age){
        this.setState({age:age});
    }
    handleChildValueChange(event){
        this.setState({username:event.target.value});
    }
    render() {
        return (
            <div>
                <p>接收到的父页面的属性：UserId:{this.props.userid}--Username:{this.props.username}</p>
                <p>{this.state.username}---{this.state.age}</p>
                <input type="button" value="提交" onClick={this.changeUserInfo.bind(this,35)}></input>
                <ComponentBodyChild handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
        );
    }
}
// ComponentBodyIndex.propTypes={
//     userid:React.PropTypes.number.isRequired
// };
ComponentBodyIndex.defaultProps=defaultProps;