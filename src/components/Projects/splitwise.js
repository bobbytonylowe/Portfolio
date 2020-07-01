import React, { useState, useEffect } from "react";
import { Input, Button,Image } from "semantic-ui-react";
import { Route, NavLink, Switch } from "react-router-dom";
import SplitwiseText from "./splitwise-text";
import Capture from "./Capture.PNG";
import Capture1 from "./Capture1.PNG";
import Capture2 from "./Capture2.PNG";
import Capture3 from "./Capture3.PNG";

const Splitwise = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('Baz,0,Matt,127,Caitlin,50,Bobby,8');

  useEffect(() => {
    async function getRecipes() {
      console.log("???");
      const response = await fetch(
        `/splitwise/${query}`
      );

      const data = await response.json();
      setRecipes(data.pay);
    }

    getRecipes();
  }, [query]);

  return (

    <div className="page">
<h1>

</h1>
    <h3> 
    Example: Matt is owed £127, Caitlin is owed £50 and I am owed £8
    </h3>
    <h4>
    Format: 'Baz,0,Matt,127,Caitlin,50,Bobby,8'
    </h4>
    
      <Input
        className="Search-bar"
        icon="pound sign"
        placeholder="Type ..."
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
      onClick={() => setQuery(search)}>Calculate
      </button>

      <div
        className="recipe_generator-recipes"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: 30,
        }}
      >
        {recipes.map((pay) => (

          <SplitwiseText
          payees={pay.payees}
          />

        ))}

      </div>
    

    <div> 
    <h1>  </h1>
      <h1> Code </h1>
      <Image src={Capture1} />
      <Image src={Capture2} />
      <Image src={Capture3} />


    </div>
    </div>
  );
};
export default Splitwise;

// 