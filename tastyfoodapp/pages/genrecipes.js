import React, { useState, useEffect } from 'react';
import gptCall from './api/gptCall';

export default function GenRecipes() {
    const [ingredient1, setIngredient1] = useState('');
    const [ingredient2, setIngredient2] = useState('');
    const [ingredient3, setIngredient3] = useState('');
    const [ingredient4, setIngredient4] = useState('');
    const [ingredient5, setIngredient5] = useState('');
    const [recipes, setRecipes] = useState([]); // This will store individual recipes
    const [favorites, setFavorites] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false); // State to toggle favorites visibility

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedFavorites = localStorage.getItem('favorites');
            if (savedFavorites) {
                setFavorites(JSON.parse(savedFavorites));
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }, [favorites]);

    const getResponse = async () => {
        const temp = `Given the ingredients ${ingredient1}, ${ingredient2}, ${ingredient3}, ${ingredient4}, ${ingredient5}. Give me 5 recipes that can be made with these ingredients.`;
        const responseData = await gptCall(temp);
        setRecipes(responseData.split('\n')); // Assuming responseData is a string of recipes separated by newlines
    };

    const addToFavorites = (recipe) => {
        if (!favorites.includes(recipe)) {
            setFavorites([...favorites, recipe]);
        } else {
            alert("This recipe is already in your favorites!");
        }
    };

    const removeFromFavorites = (recipe) => {
        const updatedFavorites = favorites.filter(fav => fav !== recipe);
        setFavorites(updatedFavorites);
    };

    const toggleFavorites = () => {
        setShowFavorites(!showFavorites);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-2xl font-bold">Generating Recipes</h1>
            <p className="text-center">What ingredients would you like to generate recipe with?</p>
            <form className="space-y-4">
            <input type="text" placeholder="Ingredient 1" value={ingredient1} onChange={(e) => setIngredient1(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
               <input type="text" placeholder="Ingredient 2" value={ingredient2} onChange={(e) => setIngredient2(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
               <input type="text" placeholder="Ingredient 3" value={ingredient3} onChange={(e) => setIngredient3(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
               <input type="text" placeholder="Ingredient 4" value={ingredient4} onChange={(e) => setIngredient4(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
               <input type="text" placeholder="Ingredient 5" value={ingredient5} onChange={(e) => setIngredient5(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </form>
            <button onClick={getResponse} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Find a Recipe!
            </button>
            <button onClick={toggleFavorites} className="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                View Favorites
            </button>
            {recipes.length > 0 && (
                <div className="mt-4">
                    <h2 className="text-xl font-bold">Generated Recipes:</h2>
                    {recipes.map((recipe, index) => (
                        <div key={index} className="mb-2">
                            <p>{recipe}</p>
                            <button onClick={() => addToFavorites(recipe)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                                Save to Favorites
                            </button>
                        </div>
                    ))}
                </div>
            )}
            {showFavorites && (
                <div className="mt-4">
                    <h2 className="text-xl font-bold">Your Favorite Recipes:</h2>
                    {favorites.map((fav, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <p>{fav}</p>
                            <button onClick={() => removeFromFavorites(fav)} className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}
