import React, { Component } from 'react'
import { Button } from "antd";

class Home extends Component{
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
                <Button className="w-[500px] text-red-500" onClick={this.change.bind(this,'Nihao')}>{this.state.name}</Button>
                <div>Home</div>
            </div>
        )
    }
}

export default Home
