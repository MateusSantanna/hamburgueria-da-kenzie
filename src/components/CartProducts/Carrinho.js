import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  width: 20rem;
  height: 100px;
  background-color: purple;
  margin: auto;
  margin-top: 1rem;

  img {
    height: 70px;
    width: 70px;
    left: 15px;
    top: 25px;
    border-radius: 0px;
    background: #e0e0e0;
    border-radius: 5px;
    margin-top: 1rem;
    margin-left: 1rem;
  }
`;

export const ListaCards = styled.li`
  list-style: none;

  h2 {
    height: 30px;
    width: 170px;
    top: 5px;
  }

  p {
    height: 16px;
    width: 170px;
    color: #828282;
  }
`;

export const ButtonRemover = styled.button`
  color: #bdbdbd;
  height: 15px;
  width: 51px;
  left: 292px;
  top: 7px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;
