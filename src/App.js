import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import NProcess from "nprogress"

/**
 * 容器
 */
class App extends Component {
    render() {
        return <Layout id="app">
            <div className="header">
                <h4>header</h4>
            </div>
            <div className="main">
                <div className="sub">
                    <h4>sub</h4>
                </div>
                <div className="main-inner">
                    <Button onClick={this.test1.bind(this)} type="primary">ceshi anz</Button>
                    <Button onClick={this.test2.bind(this)} type="primary">ceshi anz</Button>
                    <div className="footer">
                        <h4>footer</h4>
                    </div>
                </div>

            </div>

        </Layout>
    }
    test1() {
        NProcess.start();
    }
    test2() {
        NProcess.set(0.4);
        setTimeout(() => {
            NProcess.done();

        }, 1000);
    }
}

export default App;
