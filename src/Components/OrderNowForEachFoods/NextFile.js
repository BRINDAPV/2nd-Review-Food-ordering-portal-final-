import React from 'react';

const NextFile = ({ selectedFoods }) => {
  return (
    <div>
      <h1>Selected Food Details</h1>
      {selectedFoods.length > 0 ? (
        selectedFoods.map((selectedFood) => (
          <div key={selectedFood.id}>
            <img src={selectedFood.imageUrl} alt={selectedFood.foodName} style={{ maxWidth: '100%' }} />
            <h3>Food Name: {selectedFood.foodName}</h3>
            <p>Restaurant: {selectedFood.Restaurant}</p>
            <p>Available: {selectedFood.available ? 'Yes' : 'No'}</p>
            <p>Price: ${selectedFood.price}</p>
            {/* Add other details as needed */}
          </div>
        ))
      ) : (
        <p>No food selected</p>
      )}
    </div>
  );
};

export default NextFile;
