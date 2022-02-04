import { useState } from "react";
import { v4 as uuid } from "uuid";

function CommentBox({ cat, handleComment }) {

    const { comments } = cat
    console.log("cat in comment box: ", cat);
    console.log("comments| in comment box: ", comments);
    

    const [commentData, setCommentData] = useState({
        
        comments: []
    })

    function handleChange(e) {
        
        let targetName = e.target.name;
        let targetValue = e.target.value;

        setCommentData({
            ...commentData, [targetName]: targetValue
        });
    }

    function handleSubmit(e) {
       
        console.log("cat in submit : ", cat);
        
        e.preventDefault();

        let id = uuid();

        const newComment ={
            ...commentData,
            id
           
        }
        console.log("newComment: ", newComment);

        handleComment(newComment, cat);
        

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