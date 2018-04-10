import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Icon
} from 'antd'

import MiniCard from '../minicard/minicard'

const Container = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px gray;
  width: 300px;
  float: left;
  margin-right: 30px;
`

const TitleText = styled.div`
  font-size: 18px;
`

const MyIcon = styled(Icon)`
  color: lightgray;
  margin-right: 10px; 
`

const CardContainer = styled.div``

const AddCard = styled.div`
  text-align: center;
  padding: 15px;
  color: gray;
  width: 100%;
`

class Lane extends Component {
  constructor(props) {
    super(props)
  }
  clickitem = () => alert('Card clicked!')

  render() {
    const data = this.props.data
    const cards = data.card
    return (
      <Container>
        <TitleText>
          <MyIcon type="pushpin-o" />
          { data.laneName }
        </TitleText>
        <CardContainer>
          { cards !== [] ? cards.map(card => <MiniCard data={card} />) : null }
        </CardContainer>
        <AddCard onClick={() => alert('add card!!!')}>Add Card</AddCard>
      </Container>
    )
  }
}

Lane.PropTypes = {
  data: PropTypes.any
}


export default Lane