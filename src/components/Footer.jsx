import styled from "styled-components";

function Footer(props) {
  return (
    <Container>
      <Wrapper>
        <Left>Fredy Alejandro Carrizo</Left>
        <Right>Full Stack Developer</Right>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: white;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: white;
`;

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
