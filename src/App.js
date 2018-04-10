import React, { Component } from 'react';
import styled from 'styled-components'
import logo from './logo.svg';
import './App.css';
import { Modal } from 'antd';

import Card from './component/card/card'
import Board from './component/board/board'

const ModalCard = styled(Modal)`
  .ant-modal-content {
    background-color: lightgray;
  }
`
class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }

  handleClose = () => {
    this.setState({ showModal: false })
  }

  handleOpen = () => {
    this.setState({ showModal: true })
  }

  render() {
    return (
      <div className="App">
        <ModalCard
          visible={this.state.showModal}
          onCancel={this.handleClose}
          footer={null}
        >
          <Card />
        </ModalCard>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Board />
        {/* <button onClick={this.handleOpen}>open card</button> */}
      </div>
    );
  }
}

export default App;
