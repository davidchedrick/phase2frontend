import { useParams } from "react-router-dom";


function Edit({ cat }) {
    console.log("catedit: ", cat);
    const id = useParams().id
    console.log("id: ", id);

    return (
        <>catcatcat</>
    );

}

export default Edit;