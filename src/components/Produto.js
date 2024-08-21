// Produto.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  width: 200px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); //adciona borda no card
  background-color: #fff;
`;

const Imagem = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
`;

const Titulo = styled.h2`
  color: #333;
  font-size: 18px;
  margin: 12px 0 8px;
`;

const Descricao = styled.p`
  color: #666;
  font-size: 14px;
`;


const Produto = ({ produto }) => {
  return (
    <CardContainer>
      <Imagem src={produto.imageUrl} alt={produto.title} />
      <Titulo>{produto.title}</Titulo>
      <Descricao>{produto.description}</Descricao>
    </CardContainer>
  );
};

export default Produto;