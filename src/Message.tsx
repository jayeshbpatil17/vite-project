// Two ways to create component 
//1 . Class Base
//2 . Method / Function Based - we used in it.

//Always use PascalCasing 
function Message(){
    // JSX : JavaScript XML
    const name = 'Jayesh Patil';
    if(name)
    return <h1>Hello {name}</h1>;
    else
    return <h1>Bye</h1>
}

export default Message;