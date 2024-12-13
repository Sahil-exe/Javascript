let app=document.querySelector("#app")

let title=React.createElement("h1",
{class:"title"},
    "John Doe");
let about=React.createElement("p",{
    class:"about"   
},"hello guys wibcwivgwv");

let card=React.createElement("div",{
    class:"card"

},title,about);
function Card(){
    return <div className="card">
        <h1>John Does</h1>

    </div>
}
function Nav(){
    return <div class="Nav"></div>
}
//a function that returns jsx is not known as Component
//every component is capital
ReactDOM.createRoot(app).render(card);


