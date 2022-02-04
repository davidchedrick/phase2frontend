
function Editer({ cat }) {
 
    function handleSubmit(e) {
     
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="body"
                // value={messageBody}
                // onChange={(e) => setMessageBody(e.target.value)}
            />
            <input type="submit" value="Update" />
        </form>
    );

}

export default Editer;