

function Editer({ cat }) {
    console.log("cat: ", cat);

    function handleSubmit(e) {
        
        console.log(6556565);
        

        
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