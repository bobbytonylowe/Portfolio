import React, { useEffect } from 'react';
import fig1 from './fig1.png';
import fig4 from './fig4.PNG';
import fig3 from './fig3.png';
import fig5 from './fig5.PNG';
import fig6 from './fig6.PNG';
import line from './line.PNG';
import file from './file.png';
import react from './react.png';
import Capture from './Capture.PNG'
import blowe from './blowe.jpeg'
import ski from './ski.jpg'
import './home.css';
import Aos from 'aos'; 
import 'aos/dist/aos.css';
import {
    Link
  } from "react-router-dom";
  import { Grid, Image, Segment, Item} from 'semantic-ui-react'
  import email from "./email2.png";
  import git from "./git2.svg";
  import linkedin from "./linkedin2.png";
  import ig from "./ig.png";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration:3000 });


  }, []  );
  
    return(


        <div className="page">
          <div >
          <h1 style={{  'font-weight': "bold",
                  'font-family': 'Raleway' 
                  }} > Robert Lowe (PhD)</h1>
          <div style={{'font-size': '25px'}} data-aos = 'fade-right'>

          <Image style={{'width': '95px', 
            'position': 'relative', 
            'margin-top': "-10px", 
            'text-align': 'center', 
            'margin-left': "590px",
            }} src={line} />
          </div>
          <div style={{'font-size': '25px'}} data-aos = 'flip-up'>
          <a href="https://www.linkedin.com/in/robert-lowe-99b44277/detail/contact-info/">
        <Image style={{width: "40px", 'margin-left': "450px", 'margin-top': "-62px"}}src={email} />
        </a>

        <a href="https://github.com/bobbytonylowe">
        <Image style={{width: "38px", 'margin-left': "400px", 'margin-top': "-38px"}}src={git} />
        </a>
        <a href="https://www.linkedin.com/in/robert-lowe-99b44277/">
        <Image style={{width: "38px", 'margin-left': "790px", 'margin-top': "-38px"}}src={linkedin} />
        </a>
        <a href="https://www.instagram.com/bobbytonylowe/">
        <Image style={{width: "38px", 'margin-left': "840px", 'margin-top': "-38px"}}src={ig} />
        </a>
        </div>
          <h2 style={{
                  'font-family': 'Raleway' 
                  }}>Data Science Portfolio</h2>
          <h3> Hello everyone and welcome to my website portfolio. Find here my skills and some of my data science projects!</h3>
          </div>
          

          <Grid stackable columns={2}>
    <Grid.Column>
      <Segment>
      {/* <Image style={{width: "20px", 'margin-left': "70px", 'margin-top': "150px"}} src={react} /> */}
        <Image src={blowe} />
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
      <Image src={ski} />
      </Segment>
    </Grid.Column>
  </Grid> 
  <div>
  <h2> </h2>
  </div>

  <div style={{'font-size': '25px'}} data-aos = 'fade-left'>
    <h1 style={{  'font-weight': "bold",
                  'font-family': 'Raleway' 
                  }} >
   Skill Set
   </h1>

  
   </div>
   <div style={{'font-size': '25px'}} data-aos = 'fade-right'>
   <Image style={{'width': '95px', 
                  'position': 'relative', 
                  'margin-top': "0px", 
                  'text-align': 'center', 
                  'margin-left': "590px",
                  }} src={line} />
</div>
<div style={{'font-size': '25px'}} data-aos = 'fade-left'>
  <Grid stackable columns={2}>
    <Grid.Column>
      <Segment>
        <Image src={fig4} />
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
        <Image src={fig6} />
      </Segment>
    </Grid.Column>
  </Grid> 
  </div>

  <div style={{'font-size': '25px'}} data-aos = 'fade-right'>
    <h1 style={{  'font-weight': "bold",
                  'font-family': 'Raleway' 
                  }} >
   Experience
   </h1>
   </div>
   <div style={{'font-size': '25px'}} data-aos = 'fade-left'>
   <Image style={{'width': '95px', 
                  'position': 'relative', 
                  'margin-top': "0px", 
                  'text-align': 'center', 
                  'margin-left': "590px",
                  }} src={line} />
</div>


   <Grid stackable columns={2}>
    <Grid.Column>
      <Segment>
        <div style={{'font-size': '18px',
                      'font-weight':'bold',
                      'position': 'left'}}>
      - Random forest regression model 
      </div>
      <div style={{'font-size': '18px',
                      'font-weight':'bold',
                      'position': 'left'}}>
      - Sentiment analysis 
      </div>
    
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
      <div style={{'font-size': '18px',
                      'font-weight':'bold'}}>
      - RFM segmentation 
      </div>
      <div style={{'font-size': '18px',
                      'font-weight':'bold',
                      'position': 'left'}}>
      - Sentiment analysis 
      </div>
      <div style={{'font-size': '18px',
                      'font-weight':'bold',
                      'position': 'left'}}>
      - Recommendation engine 
      </div>
      </Segment>
    </Grid.Column>
  </Grid> 
  <Image style={{'width': '900px', 
                  'position': 'relative', 
                  'margin-top': "0px", 
             
                  'margin-left': "200px",
                  }} src={file} />


           
<div>
  
</div>
<div data-aos = 'zoom-in-down' data-aos-offset="500"
            data-aos-duration="100400">

<Link to = '/splitwise'>
<h1 style={{'position': 'absolute', 
            'top': '-210px',
            'left': '480px'}}>Cooking</h1>
</Link> 
</div>

<div data-aos = 'zoom-in-down' data-aos-offset="500"
            data-aos-duration="100400">
<h1 style={{'position': 'absolute', 
            'top': '-385px',
            'font-size': '18px',
            'left': '527px'}}>Football</h1>
</div>

<div data-aos = 'zoom-in-down' data-aos-offset="500"
            data-aos-duration="100400">
<Link to = '/splitwise'>
<h1 style={{'position': 'absolute',
            'font-size': '15px',
            'top': '-447px',
            'left': '519px'}}>Running</h1>
</Link> 
</div>

<div data-aos = 'zoom-in-down' data-aos-offset="500"
            data-aos-duration="100400">
<Link to = '/projects'>
<h1 style={{'position': 'absolute', 
            'top': '-420px',
            'left': '633px'}}>Coding</h1>
</Link> 
</div>

<div data-aos = 'zoom-in-down' data-aos-offset="500"
            data-aos-duration="100400">
<Link to = '/projects'>
<h1 style={{'position': 'absolute', 
            'top': '-400px',
            'left': '395px'}}>Music</h1>
</Link> 
</div>



<div data-aos = 'zoom-in-down' data-aos-offset="500"
            data-aos-duration="100400">
<Link to = '/recipe_generator'>
<h1 style={{'position': 'absolute', 
            'top': '-440px',
            'left': '850px'}}>Food</h1>
</Link> 
</div>

<div data-aos = 'zoom-in-down' data-aos-offset="500"
            data-aos-duration="100400">
<h1 style={{'position': 'absolute', 
            'font-size': '17px',
            'top': '-285px',
            'left': '629px'}}>Cycling</h1>
</div>

<div data-aos = 'zoom-in-down' data-aos-offset="500"
            data-aos-duration="100400">
<h1 style={{'position': 'absolute', 
            'top': '-285px',
            'left': '720px'}}>Travelling</h1>
</div>

<div data-aos = 'zoom-in-down' data-aos-offset="500"
            data-aos-duration="100400">
<h1 style={{'position': 'absolute', 
            'top': '-190px',
            'left': '684px'}}>Guitar</h1>
</div>


{/* 



  <Item>
     
      <Item.Content>
      
        <Item.Header style={{ 'font-size': '25px', 'font-family': 'Raleway' }} as='a'>
        <Link to = '/splitwise'>
            Splitwise
        </Link>  
        </Item.Header>
    
        <Item.Meta>Split wise coding project</Item.Meta>
        <Item.Description>
        <Item.Image style={{'height': "10px", 'width':'50px'}}  src= {file}/>
        </Item.Description>
        <Item.Extra>View more...</Item.Extra>
      </Item.Content>
    </Item> */}



        </div>   
    )
}

export default Home;