import React, { useState } from "react";

function FormPage({ cats, handleAddCat }) {


    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        favorite: false,
        comments: [],
    })

    function handleFormData(e) {
        let targetName = e.target.name;
        let targetValue = e.target.value;

        setFormData({
            ...formData, [targetName]: targetValue
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        let newId = cats.length + 1;

        const newCat ={
            id: newId,
            title: formData.title,
            description: formData.description,
            image: formData.image
        }

        handleAddCat(newCat);

        setFormData({
            title: "",
            description: "",
            image: "",
        });
    }

    return(
        <div>
            <h1>New Cats!</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    name="title"
                    className="input"
                    onChange={handleFormData}
                    value={formData.title}
                />
                <input 
                    type="text" 
                    placeholder="Description" 
                    name="description"
                    className="input"
                    onChange={handleFormData}
                    value={formData.description}
                />
                <input 
                    type="text" 
                    placeholder="Image" 
                    name="image"
                    className="input"
                    onChange={handleFormData}
                    value={formData.image}
                />
                

                <input 
                    type="submit" 
                    value="Submit"
                    className="input"
                />
            </form>

            <p>{formData.title} {formData.content}</p>
        </div>  
    )
    

}

export default FormPage; 