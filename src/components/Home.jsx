import styled from "styled-components";
import Navbar from "./Navbar";
import { useState } from "react";
import Form from "./Form";
import Footer from "./Footer";
import UpdateForm from "./UpdateForm";
import { mobil, tablet } from "../responsibe.js";

function Home() {
  const [check, setCheck] = useState(1);

  return (
    <Container>
      <Top>
        <Navbar setCheck={setCheck} check={check} />
      </Top>
      <Center>
        <ContainerForm>
          {check === 1 ? <UpdateForm /> : <Form setCheck={setCheck} />}
        </ContainerForm>
      </Center>
      <Right>
        <Footer />
      </Right>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Home;
