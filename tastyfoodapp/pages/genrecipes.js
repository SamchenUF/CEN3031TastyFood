import React from 'react';

const GenRecipes = () => {
  function handleClick(){
    console.log('Button clicked!');
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-2xl font-bold">Generate Recipes</h1>
        <p className="text-center">What ingredients would you like to generate a recipe with?</p>
        <input type="text" name="" placeholder="Ingredient 1" value=""></input>
        <p></p>
        <input type="text" name="" placeholder="Ingredient 2" value=""></input>
        <p></p>
        <input type="text" name="" placeholder="Ingredient 3" value=""></input>
        <p></p>
        <input type="text" name="" placeholder="Ingredient 4" value=""></input>
        <p></p>
        <input type="text" name="" placeholder="Ingredient 5" value=""></input>
        <p></p>
        {/* Button with onClick event */}
        <button onClick={handleClick} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Find a Recipe!  
      </button>
    </main>
  );
};
