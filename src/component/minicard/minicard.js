import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import {
  Row,
  Icon
} from 'antd';

const Container = styled.div`
  margin: 10px 0;
  border: 2px solid lightgray;
  border-radius: 5px;
  padding: 10px; 
` 

const LabelTag = styled.div`
  height: 3px !important;
  width: 30px !important;
  background-color: ${props => props.color};
  float: left;
  margin-right: 3px;
`
LabelTag.PropTypes = {
  color: PropTypes.string.isRequired
}

const TitleCard = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin: 5px 0;
`

const MyIcon = styled(Icon)`
  margin-right: 5px;
`
const DetailText = styled.div`
  font-size: 14px;
  color: gray;
  display: inline;
  margin-right: 10px;
`

class MiniCard extends Component {
  render() {
    const data = this.props.data
    const labels = data.label
    const attach = data.attachmentNo
    const list = data.checkList
    return (
      <Container>
        <Row>
          { labels !== [] ? labels.map(label => <LabelTag color={label} />) : null }
        </Row>
        <TitleCard>this.props.cardName</TitleCard>
        <Row>
          { attach !== 0 ? <DetailText><MyIcon type="paper-clip" />{attach}</DetailText> : null }
          { list !== 0 ?  <DetailText><MyIcon type="check-square-o" />{list}</DetailText> : null }
        </Row>
      </Container>
    )
  }
}

MiniCard.PropTypes = {
  data: PropTypes.any
}

export default MiniCard