import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: rgb(93, 117, 103);
  border: 1px solid rgb(108, 140, 122);
  margin: 10px 0 10px 0;
  color: white;
  padding: 20px;
`

function MenuItem( { item }) {
  return (
    <Card>
      <h1>{item.name}</h1>
      <p>{item.course}</p>
      <p>{item.technique}</p>
      <p>{item.ingredients}</p>
    </Card>
  )
}

export default MenuItem;