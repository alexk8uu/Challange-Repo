import styled from "styled-components";
import { useForm } from "react-hook-form";
import { mobil, tablet } from "../responsibe.js";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/FormRedux.js";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useEffect, useState } from "react";

function UpdateForm(props) {

  const updateUser = useSelector((store) => store.form.userEdit);
  const [add, setAdd] = useState(false);
  const [user, setUser] = useState();

  console.log("ESTO ES UPDATE",updateUser)

  const {
    register,
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: updateUser
  });


  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log("ESTA ES LA DATA", data);
    dispatch(addUser(data));
    reset();
    setAdd(true);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>Añade un nuevo usuario</Title>
          <PersonAddIcon sx={{ fontSize: 70, color: "white" }} />
        </Left>
        <Rigth>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormContainer>
              <InputContainer>
                <Text>Nombre:</Text>
                <Input
                  placeholder="Fredy"
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && <b>Nombre requerido</b>}
              </InputContainer>
              <InputContainer>
                <Text>Edad:</Text>
                <Input
                  placeholder="25"
                  type="number"
                  min="0"
                  {...register("age", { required: true })}
                />
                {errors.age?.type === "required" && <b>Edad requerida</b>}
              </InputContainer>
              <InputContainer>
                <Text>Carrera:</Text>
                <Input
                  placeholder="Full Stack Developer"
                  type="text"
                  {...register("career", { required: true })}
                />
                {errors.career?.type === "required" && <b>Carrera requerida</b>}
              </InputContainer>
              <InputContainer>
                <Text>Hobbie:</Text>
                <Input
                  placeholder="Programar"
                  type="text"
                  {...register("hobbie", { required: true })}
                />
                {errors.hobbie?.type === "required" && <b>Hobbie requerido</b>}
              </InputContainer>
              <Buttom type="submit">Añadir</Buttom>
              {add ? (
                <AddUserText>Usuario Agregado Exitosamente</AddUserText>
              ) : (
                <></>
              )}
            </FormContainer>
          </Form>
        </Rigth>
      </Wrapper>
    </Container>
  );
}

const Text = styled.div`
  height: 42px;
  width: 10%;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  background-color: crimson;
  border-radius: 25px 0px 0px 25px;
  padding: 0 25px;
`;

const AddUserText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: white;
`;

const FormContainer = styled.div`
  padding: 30px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 65vh;
  padding: 10px;
`;
const Wrapper = styled.div`
  width: 800px;
  height: auto;
  background-color: #03484c;
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  background-color: crimson;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Rigth = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h3`
  text-align: center;
  color: white;
  font-weight: 500;
`;
const Form = styled.form`
  width: 100%;
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  b {
    margin-left: 10px;
    font-size: 12px;
    color: white;
  }
`;
const Input = styled.input`
  text-align: center;
  border: none;
  height: 40px;
  width: 40%;
  border-radius: 0 25px 25px 0;
`;
const Buttom = styled.button`
  font-size: 15px;
  font-weight: 500;
  width: 100px;
  height: 35px;
  border: 0.5px solid lightblue;
  border-radius: 10px;
`;

export default UpdateForm;
