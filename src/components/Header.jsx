import reactImage from "../assets/react-core-concepts.png"

const WORDS = ["Fundamental", "Crucial", "Core"];

let genRandomInt = (max) => {return(Math.floor(Math.random()*max))}

export default function Header() {
    return (
      <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {WORDS[genRandomInt(3)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }