export default function Event(){
    function handleOnclick(){
        console.log("Button clicked ")
    }
    return( <button onClick={handleOnclick}>
        Click the button
    </button>)
};