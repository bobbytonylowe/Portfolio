/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {Card, Image, Icon, Button, Grid } from "semantic-ui-react";

import "./index.css";

const Recipe = ({
  Titles,
  Cuisine,
  Ingredients,
  Matching_ingred,
  Ingredients_to_buy,
  Image_link,
  Links,
}) => {
  return (
    
    <Card
      className="Card"
      style={{display: 'flex'}}
      
    >
      <Image className="recipe-image" src={Image_link} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{Titles}</Card.Header>
        <Card.Meta>{Cuisine}</Card.Meta>
        <Card.Description className = 'Card.Description'>
          {Ingredients.length < 100
            ? `${Ingredients}`
            : `${Ingredients.substring(0, 250)}... 
            
            `}
        </Card.Description>

        
        
      </Card.Content>
      <div>
           

        <a className = 'view-recipe-button' href={Links} target="_blank" rel="noopener noreferrer">
          
          <button class="ui inverted black button">View Recipe</button>
        </a>
        </div>
      <div> 

         
      </div>
      <Card.Content extra>
        <a>
          <Icon className = 'matching-ingred' name="food" />
          Matching Ingredients {Matching_ingred}
        </a>
        <div>
          <a>
            <Icon name="shopping basket" />
            Ingredients to purchase: {Ingredients_to_buy}
          </a>
        </div>
        
      </Card.Content>
    </Card>
    
  );
};

export default Recipe;
