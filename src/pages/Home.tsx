import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import PokemonList from "../components/pokemonList";
import usePokemons from "../hooks/usePokemons";
import { IndexedType } from "../interfaces/pokemon.interface";


const Home = () => {
    const [searchValue, setSearchValue] = useState("");
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
      };
      
     

    const {
    pokemons,
    hasMorePokemon,
    fetchNextPage,
    pokemonTypes,
    setSelectedType,
    selectedType,
    setPokemons,
  } = usePokemons();


  const handleSelectType = (type: IndexedType | null) => {
    if (type) {
      setSelectedType(type);
    } else {
      setPokemons([]);
      setSelectedType(null);
    }
  };
  var filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <Container>
       <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Search Pokemon..."
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px',
          backgroundColor: 'lightblue',
          color: 'white',
          width: '300px',
         margin: '20px' ,

        }}
      />
      <Grid container spacing={2} mt={1}>
        <Grid
          container
          item
          xs={12} 
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {pokemonTypes.map((type) => (
            <Button
              variant="contained"
              sx={{
                "&.MuiButton-contained": {
                  background: type.color,
                },
                m: 1,
              }}
              onClick={() => handleSelectType(type)}
            >
              {type.name}
            </Button>
          ))}
          <Button
            variant="contained"
            sx={{
              m: 1,
            }}
            onClick={() => handleSelectType(null)}
          >
            ALL
          </Button>
        </Grid>
        <Grid
          container
          item
          xs={12} 
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <PokemonList pokemons={filteredPokemons} ></PokemonList>
          {hasMorePokemon ? (
            <Button variant="contained" onClick={fetchNextPage}>
              Load more Pokemon
            </Button>
          ) : null}
        </Grid>
       
      </Grid>
     
      

    </Container>
  );
};

export default Home;
