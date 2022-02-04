import { useState } from "react";
import { v4 as uuid } from "uuid";

function CommentBox({ cat, handleComment }) {

    const { comments } = cat
    
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
        e.preventDefault();
        let id = uuid();

        const newComment ={
            ...commentData,
            id
        }

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