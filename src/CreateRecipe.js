import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreateRecipe = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [info, setInfo] = useState('');
    const [confirm, setConfirm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const recipe = {title, about: info, author};
        const timeValue = 1000

        setConfirm('Adding Recipe...');
        setTimeout(() => {
            fetch('http://localhost:5000/recipes', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(recipe)
            }).then(() =>{
                setConfirm('New recipe added.');
                setTimeout(() =>{
                    setConfirm(prevConfirm => prevConfirm + " Redirecting to Home Page in" + timeValue/1000 + " seconds");
                    setTimeout(() =>{
                        navigate('/');}, timeValue);
                }, timeValue)
            })
            

        }, timeValue);
    }    




    return ( 
        <div className="recipe-form">
            <h1>Add New Recipe</h1>
            <form onSubmit={handleSubmit}>
                <label>Recipe Name</label>
                <input 
                    type="text" 
                    placeholder="Recipe Name"
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <label>Recipe Details</label>
                <textarea 
                    required
                    placeholder="Recipe Details" 
                    value={info}
                    onChange={(e) => setInfo(e.target.value)}
                ></textarea>
                <label>Recipe Author</label>
                <input 
                    type="text"
                    placeholder="Recipe Author" 
                    required 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button>Add Recipe</button>
            </form>
            <div>{confirm}</div>
        </div>
     );
}
 
export default CreateRecipe;