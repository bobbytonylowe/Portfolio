/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {Card, Image, Icon, Button, Grid } from "semantic-ui-react";

// import "./index.css";

const SplitwiseText = ({
  payees
}) => {
  return (
    
    <Card
      className="Card"
      style={{display: 'flex'}}>

      <Card.Content>
        <Card.Header><ul>{payees}</ul></Card.Header>
      </Card.Content>
      
      <div> 
      </div>
    </Card>
    
  );
};

export default SplitwiseText;
