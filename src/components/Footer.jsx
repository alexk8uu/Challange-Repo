import styled from "styled-components";

function Footer(props) {
  return (
    <Container>
      <Wrapper>
        <Left>LEFT</Left>
        <Right>RIGTH</Right>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div``;
const Left = styled.div``;
const Right = styled.div``;

const Container = styled.div`
  min-height: 120px;
  background-color: #0f684b;
  border-top: 0.5px solid rgba(230, 227, 227);
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
`;

export default Footer;
