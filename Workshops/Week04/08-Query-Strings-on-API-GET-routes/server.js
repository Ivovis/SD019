import express from "express";
const app = express();

// routes here
app.get("/api/pokemon", function (req, res) {
  console.log("Query string: ", req.query);

  const queryStringColour = req.query.colour;
  let allPokemon = [
    { name: "pikachu", colour: "yellow" },
    { name: "charmander", colour: "orange" },
    { name: "Squirtle", colour: "blue" },
  ];

  if (queryStringColour) {
    allPokemon = allPokemon.filter(function (pokemon) {
      return pokemon.colour === queryStringColour;
    });
  }

  res.json(allPokemon);
});

app.listen(3000, function () {
  console.log("Server up on port 3000");
});
