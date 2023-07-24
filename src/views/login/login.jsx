import React, { Component } from 'react'
import { Button } from "antd";

class Login extends Component{

    state = {
        name: '張三',
        age: 18
    }

    change = (e) => {
        this.setState({name: e})
    }

    render() {
        return(
            <div>
                <Button className="text-red-500 w-[500px]" onClick={this.change.bind(this,'Nihao')}>{this.state.name}</Button>
            </div>
        )
    }
}

export default Login
