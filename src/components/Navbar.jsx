import styled from "styled-components";

function Navbar({ setCheck, check }) {
  return (
    <Container>
      <Wrapper>
        <Left onClick={() => setCheck(0)}>
          <ContainerLeft check={check}>Consultar Usuarios</ContainerLeft>
        </Left>
        <Right onClick={() => setCheck(1)}>
          <ContainerRight check={check}>Agregar Usuarios</ContainerRight>
        </Right>
      </Wrapper>
    </Container>
  );
}

const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.check === 0 ? "white" : "black")};
  background-color: ${(props) => (props.check === 0 ? "#3b8952" : "white")};
  border-radius: 5px;
  padding: 5px;
  font-weight: 500;
  width: auto;
  height: auto;
  border: 1px solid;
`;
const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.check === 1 ? "white" : "black")};
  background-color: ${(props) => (props.check === 1 ? "#03484c" : "white")};
  border-radius: 5px;
  padding: 5px;
  font-weight: 500;
  width: auto;
  height: auto;
  border: 1px solid;
`;

const Container = styled.div`
  background-color: #0f684b;
  height: 100px;
  border-bottom: 0.5px solid rgba(230, 227, 227);
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
`;

const Left = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Right = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export default Navbar;
