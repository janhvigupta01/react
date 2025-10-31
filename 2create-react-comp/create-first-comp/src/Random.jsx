function Random(){
    let number = Math.random()*10;
    return <h3 style={{'background-color': '#776691'}}>Random Number: {Math.round(number)}</h3>;
}
export default Random;