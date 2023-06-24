import React, { useState } from 'react';

interface Pokemon {
  name: string;
  id: number;
}

interface PokemonSearchProps {
  pokemonList: Pokemon[];
}

const PokemonSearch: React.FC<PokemonSearchProps> = ({ pokemonList }) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>(pokemonList);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
  
    setSearchValue(value);

    const filtered = pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPokemon(filtered);
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Search Pokemon"
        
      />
      {filteredPokemon.map(pokemon => (
        <div key={pokemon.id}>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default PokemonSearch;