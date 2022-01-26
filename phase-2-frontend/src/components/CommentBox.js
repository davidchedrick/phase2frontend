import { useState } from "react";


function CommentBox({ cat }) {

    // const { comments } = cat

    // const [CommentData, setCommentData] = useState({
    //     comments: "",
    // })

    // function handleCommentData(e) {
    //     let targetName = e.target.name;
    //     let targetValue = e.target.value;

    //     setCommentData({
    //         ...CommentData, [targetName]: targetValue
    //     });
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     let newId = comments.length + 1;

    //     const newComment ={
    //         id: newId,
    //         title: CommentData.comments,
           
    //     }

    //     handleComment(newComment);

    //     setCommentData({
    //         comments: ""
            
    //     });
    // }

    return(
        // onSubmit={handleSubmit}
        <form >
            <input 
                type="text" 
                placeholder="Comment" 
                name="Comment"
                className="input"
                // onChange={handleCommentData}
                // value={CommentData.comments}
            />
        </form>
    )
}

export default CommentBox