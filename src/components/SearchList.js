import React from 'react';
import Card from './Card';

function SearchList({ data }) {
  const filtered = data.map(sailing => <Card key={sailing.id} sailing={sailing._source} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;