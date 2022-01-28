// import { useState } from "react";

// , handleComment 
function CommentBox({ cat}) {

    const { comments } = cat
    console.log("cat||||: ", cat);
    console.log("comments: ", comments);
    

    // const [commentData, setCommentData] = useState({
        
    //     comments: [],
    // })

    // function handleChange(e) {
        
    //     let targetName = e.target.name;
    //     let targetValue = e.target.value;

    //     setCommentData({
    //         ...commentData, [targetName]: targetValue
    //     });
    // }

    // function handleSubmit(e, cat) {
    //     console.log("cat????: ", cat);
        
    //     e.preventDefault();

    //     let newId = comments.length + 1;

    //     const newComment ={
    //         id: newId,
    //         comments: commentData,
           
    //     }

    //     handleComment(newComment, cat);

    //     setCommentData({
    //         comments: []
            
    //     });
    // }

    return(
        // onSubmit={handleSubmit}
        <form >
            <input 
                type="text" 
                placeholder="Comment" 
                name="comments"
                className="input"
                // onChange={handleChange}
                // value={commentData.comments}
            />
            <input 
                type="submit" 
                value="Submit"
                className="input"
            />
        </form>
    )
}

export default CommentBox