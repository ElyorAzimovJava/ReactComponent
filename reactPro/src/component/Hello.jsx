const name = "Elyor";
function displayWowMessage(){
    return "Wow";
}
function Hello(){
    return <div>
        <h1>Hello from A component! {name}</h1>
        <h2>{displayWowMessage()}</h2>
    </div>
}
export default Hello;