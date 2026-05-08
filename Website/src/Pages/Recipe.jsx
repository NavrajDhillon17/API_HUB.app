import React from 'react'
import {useEffect,useState} from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import recipeBg from '../images/recipe.jpg'
export default function Recipe() {
    const [dish,setDish]=useState("");
    const [search,setSearch]=useState("");
    const [error,setError]=useState("");
    const [data,setData]=useState(null);
    const [selectedMeal, setSelectedMeal] = useState(null);
    useEffect(()=>{
        if(!search && search.trim()===""){
            setData(null);
            setError("");
            return;
        }
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
          .then(res=>res.json()).then(result=>{
            if(!result.meals){
                setError("Recipe not found");
                setData(null);
            }
            else{
                setData(result.meals);
                setError("");
            }
          })
        .catch(err => {
            console.log(err);
            setError("Something went wrong");
        });
    },[search]);

    const checkRecipe = (id) => {
        const recipe = data.find(meal => meal.idMeal === id);

        if (recipe) {

            const ingredients = [];

            for (let i = 1; i <= 20; i++) {
                const ingredient = recipe[`strIngredient${i}`];
                const measure = recipe[`strMeasure${i}`];

                if (ingredient && ingredient.trim() !== "") {
                    ingredients.push({
                        ingredient,
                        measure
                    });
                }
            }

            setSelectedMeal({
                name: recipe.strMeal,
                instructions: recipe.strInstructions,
                ingredients
            });
        }
        else {
            alert("Recipe not found");
        }
    };
return (
    <>
        {!data && 
        <div style={{
          minHeight: '100vh',
          backgroundImage: `url(${recipeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}>
        <div className="d-flex flex-column justify-content-center hero" style={{ minHeight: '100vh', background: 'rgba(0,0,0,0.45)', paddingBottom: '30px' }}>
        <div>
            <h1 className="text-center fw-bold p-5" style={{ color: '#fff', textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>🧑‍🍳 Find the Recipe of your favorite dish 🎀</h1>
        </div>
        <div className="d-flex justify-content-center mb-4 mt-2">
            <input type="text" className="form-control w-50 rounded-pill shadow-sm border-0 px-4" style={{ height: '55px' }} placeholder="Enter the dish name (e.g. Pasta)" value={dish} onChange={(e)=>setDish(e.target.value)} 
             onKeyDown={(e)=>{
                if(e.key==="Enter"){
                    setSearch(dish);
                }
             }}/>
        </div>
        <div className="container text-center align-items-center mt-5">
            <div className="row justify-content-center g-4">
                <div className="col-md-12 col-lg-8">
                    <div className="glass-card text-center p-5 shadow-sm">
                        <h2 className="fw-bold" style={{ color: '#555' }}>🍲 Discover Delicious Recipes</h2>
                        <p className="text-secondary fs-5 mt-3">Search for meals, cuisines, or ingredients to begin.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        }
        {data && (
            <div style={{
          minHeight: '100vh',
          backgroundImage: `url(${recipeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}>
        <div style={{ minHeight: '100vh', background: 'rgba(0,0,0,0.45)', paddingBottom: '50px', paddingTop: '100px' }}>
        <div>
            <h1 className="text-center fw-bold p-5" style={{ color: '#fff', textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>🥗 Cook Something Delicious Today ✨</h1>
        </div>
        <div className="d-flex justify-content-center mb-5">
            <input type="text" className="form-control w-50 rounded-pill shadow-sm border-0 px-4" style={{ height: '55px' }} placeholder="Enter another dish name..." value={dish} onChange={(e)=>setDish(e.target.value)} 
             onKeyDown={(e)=>{
                if(e.key==="Enter"){
                    setSearch(dish);
                }
             }}/>
        </div>
            <div className="container">
                <div className="row">
                    {data.map((meal) => (
                        <div className="col-md-4 mb-4" key={meal.idMeal}>
                            <div className="glass-card h-100 shadow-sm p-3 text-center">
                                <img src={meal.strMealThumb} className="card-img-top rounded-4 mb-3" alt={meal.strMeal} />
                                <div className="card-body p-0">
                                    <h5 className="card-title fw-bold" style={{ color: '#555' }}>{meal.strMeal}</h5>
                                    <button className="btn-cute mt-3" onClick={()=>checkRecipe(meal.idMeal)}>Check Recipe 🍽️</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
        ) 
        }
        {error && <div className="cute-bg-alt pt-5 text-center vh-100"><p className="text-danger fw-bold fs-4 pt-5 mt-5">{error} 😢</p></div>}

        {selectedMeal && (
            <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(10px)",
                zIndex:9999
            }}>
            <div className="glass-card p-5"
            style={{
                width: "70%",
                maxHeight: "85vh",
                overflowY: "auto",
                background: "rgba(255, 255, 255, 0.95)",
                border: "2px solid #fff"
            }}>

            <div className="text-end">
                <button className="btn btn-outline-danger rounded-pill fw-bold" onClick={() => setSelectedMeal(null)}>✖ Close</button>
            </div>

            <h2 className="text-center fw-bold cute-title mb-4">{selectedMeal.name}</h2>
            <h4 className="fw-bold" style={{ color: '#555' }}>🥗 Ingredients</h4>
            <ul className="list-group mb-4 border-0 shadow-sm rounded-4">
                {selectedMeal.ingredients.map((item, index) => (
                    <li key={index} className="list-group-item border-0 border-bottom text-secondary fw-bold" style={{ backgroundColor: 'rgba(0,0,0,0.02)' }}>{item.ingredient} — {item.measure}</li>
                ))}
            </ul>
            <h4 className="mt-4 fw-bold" style={{ color: '#555' }}>📖 Instructions</h4>
            <p className="text-secondary lh-lg">{selectedMeal.instructions}</p>

            </div>
        </div>
    )}
    </>
  )
}
