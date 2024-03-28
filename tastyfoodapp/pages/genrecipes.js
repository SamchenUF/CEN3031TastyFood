import React, { useState } from 'react';
import gptCall from './/api/gptCall';
export default function GenRecipes() {
  // State variables to manage input values
  const [ingredient1, setIngredient1] = useState('');
  const [ingredient2, setIngredient2] = useState('');
  const [ingredient3, setIngredient3] = useState('');
  const [ingredient4, setIngredient4] = useState('');
  const [ingredient5, setIngredient5] = useState('');
  const [prompt, setPrompt] = useState('');
  const [message, setMessage] = useState('');

  function handleClick() {
    console.log('Button clicked!');
    // You can access the ingredient values here and perform further actions
    console.log('Ingredient 1:', ingredient1);
    console.log('Ingredient 2:', ingredient2);
    console.log('Ingredient 3:', ingredient3);
    console.log('Ingredient 4:', ingredient4);
    console.log('Ingredient 5:', ingredient5);
  }
  const getResponse = async () => {
    const temp = 'Given the ingredients ' + ingredient1 + ", " + ingredient2 + ", " + ingredient3 + ", " + ingredient4 + ", " + ingredient5 + ". Give me 5 recipes that can be made with these ingredients.";
    const responseData = await gptCall(prompt);
    //const { output } = responseData;
    setMessage(responseData);
    //setMessage(output);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">Generating Recipes</h1>
      <p className="text-center">What ingredients would you like to generate recipe with?</p>
      <form>
        <input
          type="text"
          placeholder="Ingredient 1"
          value={ingredient1}
          onChange={(e) => setIngredient1(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p></p>
        <input
          type="text"
          placeholder="Ingredient 2"
          value={ingredient2}
          onChange={(e) => setIngredient2(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p></p>
        <input
          type="text"
          placeholder="Ingredient 3"
          value={ingredient3}
          onChange={(e) => setIngredient3(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p></p>
        <input
          type="text"
          placeholder="Ingredient 4"
          value={ingredient4}
          onChange={(e) => setIngredient4(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p></p>
        <input
          type="text"
          placeholder="Ingredient 5"
          value={ingredient5}
          onChange={(e) => setIngredient5(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p></p>
        {/* Button with onClick event */}
      </form>
      <div>
      <button type ='button' onClick={getResponse} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Find a Recipe!
      </button>
      {message && <p>{message}</p>}
      </div>
    </main>
  );
}
