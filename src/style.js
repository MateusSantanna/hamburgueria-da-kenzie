import styled from "styled-components";

export const PaiDeTodos = styled.div`
  display: flex;
`;

export const PaiDoCarrinho = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  margin-top: 3rem;
`;

export const CarrinhoCompleto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;
  width: 365px;
  height: 450px;
  overflow-x: scroll;
`;

export const CarrinhoTitulo = styled.div`
  color: #ffffff;
  background: #27ae60;
  border-radius: 5px 5px 0px 0px;
  font-weight: 900;
  font-size: large;
  width: 365px;
  height: 65px;
  line-height: 55px;
`;
