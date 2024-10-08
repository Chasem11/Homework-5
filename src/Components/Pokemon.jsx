import React from 'react';

const Pokemon = ({ data }) => {
  return (
    <div className="pokemon-card">
      <img src={data.sprites.front_default} alt={data.name} className="pokemon-sprite" />
      <h2 className="pokemon-name">{data.name}</h2>
      <div className="pokemon-types">
        {data.types.map(typeInfo => (
          <span key={typeInfo.type.name} className={`pokemon-type ${typeInfo.type.name}`}>
            {typeInfo.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;