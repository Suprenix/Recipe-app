import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const EditData = () => {

    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [info, setInfo] = useState('');
    const [confirm, setConfirm] = useState('');
    const [isPending,setIsPending] = useState(true);
    const navigate = useNavigate();

    const url = 'http://localhost:5000/recipes/' + id
    useEffect(() =>{
        fetch(url)
        .then(res => {
            if (!res.ok ){
                navigate('Notfound');
                throw Error('Could not fetch data');
            }
            return res.json();
        })
        .then(data => {
            setTitle(data.title);
            setAuthor(data.author);
            setInfo(data.about);
            setIsPending(false);
        })
        .catch(err =>{
            console.log(err.message)
        })
    }, [url] )

    const handleSubmit = (e) =>{
        e.preventDefault();
        const recipe = {title, about: info, author};
        const timeValue = 1000

        setConfirm('Editing Recipe...');
        setTimeout(() => {
            fetch('http://localhost:5000/recipes/' + id, {
                method: 'PUT',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(recipe)
            }).then(() =>{
                setConfirm('Edit Complete');
                setTimeout(() =>{
                    setConfirm("You will be redirected to Edit Recipes Page in " + timeValue/1000 + " seconds");
                    setTimeout(() =>{
                        navigate('/edit');}, timeValue);
                }, timeValue)
            })
            

        }, timeValue);
    }    




    return ( 
        <div className="recipe-form">
            <h1>Edit Recipe</h1>
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
                <button>Confirm Edit</button>
            </form>
            <div>{confirm}</div>
        </div>
     );
}
 
export default EditData;
