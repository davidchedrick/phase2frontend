import { useState } from "react";


function CommentBox({ cat, handleComment }) {

    const { comments } = cat
    console.log("cat||||: ", cat);
    console.log("comments||||: ", comments);
    

    const [commentData, setCommentData] = useState({
        
        comments: {
            comment: ""
        },
    })

    function handleChange(e) {
        
        let targetName = e.target.name;
        let targetValue = e.target.value;

        setCommentData({
            ...commentData, [targetName]: targetValue
        });
    }

    function handleSubmit(e) {
       
        console.log("cat????: ", cat);
        
        e.preventDefault();

        let newId = comments.length + 1;

        const newComment ={
            id: newId,
            comment: commentData,
           
        }

        handleComment(newComment);

        setCommentData({
            comments: []
            
        });
    }

    return(
        
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Comment" 
                name="comments"
                className="input"
                onChange={handleChange}
                value={commentData.comments}

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