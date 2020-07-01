import React from 'react'
import { Image, Item } from 'semantic-ui-react'
import './Projects.css';
import FOODAI from "./FOODAI.PNG";
import calc from "./calc.jpg";
import glasto from "./glasto.jpg";
import chatbot from "./chatbot.jpg";
import chem from "./chem.png";

import Capture from "./Capture.PNG";
import {
    Link
  } from "react-router-dom";


const ItemExampleItems = () => (
    <Item.Group>
    <div className="page">
    <h1 style={{  'font-weight': "bold",
                  'font-family': 'Raleway' 
                  }} > Data Science Projects</h1>
    
</div>   

{/* <link href={'www.google.com'}> pp</link> */}
{/* <a className = 'vien' href={'www.google.com'}></a> */}

    <Item>
      <Item.Image src= {FOODAI}/>
      <Item.Content>
      
        <Item.Header style={{ 'font-size': '25px', 'font-family': 'Raleway' }} as='a'>
        <Link to = '/splitwise'>
            Splitwise
        </Link>  
        </Item.Header>
    
        <Item.Meta>Split wise coding project</Item.Meta>
        <Item.Description>
        <Item.Image style={{width: "300px"}}  src= {calc}/>
        </Item.Description>
        <Item.Extra>View more...</Item.Extra>
      </Item.Content>
    </Item>



    <Item>
      <Item.Image src= {FOODAI} />

      <Item.Content>
      <a href="https://github.com/bobbytonylowe/Get-me-to-Glastonbury---Route-planner/blob/master/Get%20me%20to%20Glastonbury!%20route%20planner.ipynb">
        <Item.Header style={{ 'font-size': '25px', 'font-weight': 'bold', 'font-family': 'Raleway' }} as='a'>Get me to glastonbury</Item.Header>
        </a>
        <Item.Meta>Description</Item.Meta>
        
        <Item.Description>
        <Item.Image style={{width: "300px"}}  src= {glasto}/>
        </Item.Description>

        <Item.Extra>View more...</Item.Extra>
      </Item.Content>
    </Item>



    <Item>
      <Item.Image src= {FOODAI} />

      <Item.Content>
      <a href="https://github.com/bobbytonylowe/Recipe_Chatbot/blob/master/RecipeChatBot.ipynb">
        <Item.Header style={{ 'font-size': '25px', 'font-weight': 'bold', 'font-family': 'Raleway' }} as='a'>Recipe Chat bot</Item.Header>
        </a>
        <Item.Meta>Description</Item.Meta>
        
        <Item.Description>
        <Item.Image style={{width: "300px"}}  src= {chatbot}/>
        </Item.Description>

        <Item.Extra>View more...</Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src= {FOODAI} />

      <Item.Content>
      <a href="https://github.com/bobbytonylowe/PhD-Compound-Analysis/blob/master/PhD%20analysis.ipynb">
        <Item.Header style={{ 'font-size': '25px', 'font-weight': 'bold', 'font-family': 'Raleway' }} as='a'>Chemistry Visualisation</Item.Header>
        </a>
        <Item.Meta>Description</Item.Meta>
        
        <Item.Description>
        <Item.Image style={{width: "300px"}}  src= {chem}/>
        </Item.Description>

        <Item.Extra>View more...</Item.Extra>
      </Item.Content>
    </Item>




  </Item.Group>
)

export default ItemExampleItems