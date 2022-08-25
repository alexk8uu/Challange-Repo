import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser} from "../redux/FormRedux";
import { mobil, tablet } from "../responsibe.js";

function Form({ setCheck }) {
  const data = useMemo(
    () => [
      { id: 1, name: "Pedro", age: 20, career: "Ingeniería", hobbie: "Futbol" },
      {
        id: 2,
        name: "Rodrigo",
        age: 22,
        career: "Arquitectura",
        hobbie: "Bajo eléctrico",
      },
      {
        id: 3,
        name: "Romina",
        age: 21,
        career: "Abogacía",
        hobbie: "Acrobacia",
      },
      {
        id: 4,
        name: "Ana",
        age: 23,
        career: "Contadora",
        hobbie: "Astronomía",
      },
    ],
    []
  );

  const userActionColum = [
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <DeletedButtom onClick={() => handleDelete(params.row)}>
            Delete
          </DeletedButtom>
        );
      },
    },
  ];

  const handleDelete = (row) => {
    dispatch(deleteUser(row));
  };

  const rows = useSelector((store) => store.form);
  const dispatch = useDispatch();

  useEffect(() => {
    let isEmpty = Object.entries(rows.row).length === 0;
    isEmpty &&
      data.map((row) => {
        return dispatch(addUser(row));
      });
  }, [dispatch, rows.row, data]);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "name", headerName: "Nombre", width: 200 },
    { field: "age", headerName: "Edad", width: 100 },
    { field: "career", headerName: "Carrera", width: 150 },
    { field: "hobbie", headerName: "Hobbie", width: 150 },
  ];



  return (
    <Container>
      <ContainerForm>
        {rows.row ? (
          <DataGrid
            rows={rows.row}
            columns={columns.concat(userActionColum)}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        ) : (
          <Loading>Cargando</Loading>
        )}
      </ContainerForm>
    </Container>
  );
}

const DeletedButtom = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 5px;
  border-radius: 5px;
  color: crimson;
  border: 1px dotted rgba(220, 20, 60, 0.6);
  cursor: pointer;
`;

const Loading = styled.h4``;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 10px;
`;

const ContainerForm = styled.div`
  height: 400px;
  width: 800px;

  ${tablet({
    width: "600px",
  })}

  ${mobil({
    width: "400px",
  })}
`;

export default Form;
