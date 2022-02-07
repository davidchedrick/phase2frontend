import { useState } from "react";

function CommentBox({ cat, handleComment, setIsClicked }) {

    const [commentData, setCommentData] = useState({comments: ""});

    function handleChange(e) {
        let targetName = e.target.name;
        let targetValue = e.target.value;

        setCommentData({
            ...commentData, [targetName]: targetValue
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newComment ={...commentData}
        handleComment(newComment, cat);
        setCommentData("");
        setIsClicked(false)
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