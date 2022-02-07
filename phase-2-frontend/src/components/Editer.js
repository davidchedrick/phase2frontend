import { useState } from "react";

function Editer({ cat, handleUpdate }) {
    console.log("cat: in editer ", cat);
    
    const [updateData, setUpdateData] = useState({description: ""});

    function handleUpdateData(e) {
        let targetName = e.target.name;
        let targetValue = e.target.value;
        setUpdateData({...updateData, [targetName]: targetValue});
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newData = {
            ...updateData
        }
        handleUpdate(newData, cat.id);
        console.log("cat in submit: ", cat);
        setUpdateData({description: cat.description});
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="description"
                value={updateData.description}
                onChange={handleUpdateData}
            />
            <input type="submit" value="Update" />
        </form>
    );

}

export default Editer;