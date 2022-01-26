
import { Container, ListGroupItem } from "react-bootstrap";

function Comments ({ commentList }) {
    

    const { comment } = commentList
    return (
        <Container>
            <ListGroupItem className="d-flex justify-content-between align-items-start">
                {comment}
            
            </ListGroupItem>
        </Container>
    );

}



export default Comments;