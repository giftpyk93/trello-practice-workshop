import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 10px;
`;

const TitleText = styled.div`
    font-size: 18px;
    font-weight: bold;
`

const HeaderTitle = styled(TitleText)`
    font-size: 20px;
`

const Text = styled.div`
    font-size: 16px;
    color: gray;
`

class Card extends Component {
  render() {
    return (
      <Container>
        <HeaderTitle>card name</HeaderTitle>
        <Text>
          in list <a href=".">to do</a>
        </Text>
        <TitleText>description</TitleText>
        <Text>description text</Text>
        <TitleText>attachment</TitleText>
      </Container>
    );
  }
}

export default Card;
