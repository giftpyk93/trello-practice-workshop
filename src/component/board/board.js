import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Icon,
  Row,
  Col
} from 'antd';

import Lane from '../lane/lane'

const Container = styled.div`
  flex: 1;
`

const HeaderBoard = styled(Row)`
  background-color: white;
  font-size: 20px;
  box-shadow: 0 4px 12px lightgray;
  padding: 10px;
  color: gray;
`

const MyIcon = styled(Icon).attrs({
  iconColor: props => props.color || "black",
})`
  padding: 15px;
  font-weight: bold;
  color: ${props => props.iconColor};
`

const GridCol = styled(Col).attrs({
  alignItem: props => props.align || "center",
})`
  justify-content: ${props => props.alignItem};
  align-items: center;
`

const BoardTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`

const BoardContainer = styled.div`
  padding: 30px 50px;
`

const LaneContainer = styled.div`
  padding: 20px 0;
`

const mockData = {
  userName: "Gift",
  boardName: "Planner Board",
  lane: [
    {
      laneName: "To do",
      card: [
        {
          cardName: "stage 1 - planning",
          label: ["red", "lightgreen"],
          attachmentNo: 4,
          checkList: 3,
        },
        {
          cardName: "stage 1 - prepared",
          label: ["blue", "lightgreen"],
          attachmentNo: 1,
          checkList: 1,
        },
      ]
    },
    {
      laneName: "Doing",
      card: [],
    },
    {
      laneName: "Done",
      card: [
        {
          cardName: "stage 0 - research",
          label: ["orange"],
          attachmentNo: 0,
          checkList: 1,
        }
      ]
    }
  ],
}

class Board extends Component {
  render() {
    const lanes = mockData.lane
    return (
      <Container>
        <HeaderBoard>
          <GridCol span={8} align="left">
            <MyIcon type="appstore-o" color="lightgray"/>
            Board
          </GridCol>
          <GridCol span={8} align="center">trello</GridCol>
          <GridCol span={8} align="right">Hello, {mockData.userName}!</GridCol>
        </HeaderBoard>
        <BoardContainer>
          <BoardTitle>
            <MyIcon type="plus-square" color="blue"/>
            {mockData.boardName}
          </BoardTitle>
          <LaneContainer>
            {lanes.map(lane => <Lane data={lane} />)}
          </LaneContainer>
        </BoardContainer>
      </Container>
    )
  }
}

export default Board