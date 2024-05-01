import { useState, useSyncExternalStore } from "react";

const title = "Bonjour les gens";
const style = { color: "red", backgroundColor: "blue" };
const showTitle = true;
const todos = ["Presenter React", "Présenter le JSX", "Créer des composants"];

function App() {
  // const handleClick = (e) => {
  //   console.log(e);
  //   alert("J'ai cliqué sur le titre");
  // };
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      <p>Compteur : {count} </p>
      <button onClick={increment}>Incrémenter</button>




    {/* <Title color = 'purple'>Mon composant</Title> */}
      {/* {showTitle && (
        <h1 onClick={handleClick} id="title" className="title" style={style}>
          {title}
        </h1>
      )} */}
      {/* <input type="text" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, in
        voluptatibus recusandae fugit ut perferendis sed eos distinctio? Numquam
        temporibus eius harum animi laudantium? Quaerat doloribus alias dolores
        vitae quibusdam?
      </p>
      <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))}
      </ul> */}
    </>
  );
}

function Title({color, children}) {
  return <h1 style={{color:color}}>{children}</h1>
}

export default App;
