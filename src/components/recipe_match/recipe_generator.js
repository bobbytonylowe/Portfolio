import React, { useState, useEffect } from "react";
import { Input, Button, Image} from "semantic-ui-react";
import { Route, NavLink, Switch } from "react-router-dom";
import Recipe from "./Recipe";
import Capture from "./Capture.PNG";
import logo from "./logo.png";

const About = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(['paneer', 'onion']);

  useEffect(() => {
    async function getRecipes() {
      console.log("???");
      const response = await fetch(
        `/recipes/${query}`
      );
      // `/recipes/${query}`);
      const data = await response.json();
      setRecipes(data.Recipes);
    }

    getRecipes();
  }, [query]);

  return (
    <div className="page">
     <Image style={{ 'width': '360px', 'height': '100px', 'margin-left': '465px', 'margin-top': '-40px' }} src={logo} />
      <h2>Type ingredients and click search recipes</h2>
      <h5>Type more than one ingredient separated by a comma e.g. paneer, onion</h5>
      
      <Input
        className="Search-bar"
        icon="search"
        placeholder="Type ingredients..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <NavLink to="/Next1" activeClassName="next">
        <Switch>
          <Route path="/Next" component={search} />
        </Switch>
      </NavLink>
     
    
      <button 
      class="ui inverted black button"
      
      content="Search"
      onClick={() => setQuery(search)}
      >Search Recipes</button>
      <div
        className="recipe_generator-recipes"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: 30,
        }}
      >
        {recipes.map((Recipes) => (
          <Recipe
            Titles={Recipes.Title}
            Cuisine={Recipes.cuisine}
            Ingredients={Recipes.Ingredients}
            Matching_ingred={Recipes.Matching_ingred}
            Ingredients_to_buy={Recipes.Ingredients_to_buy}
            Image_link={Recipes.Image_link}
            Links={Recipes.Link}
          />
        ))}
      </div>
    </div>
  );
};
export default About;
