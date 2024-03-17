import "./App.css";
import Card from "./components/Card";

function App() {

  let myObj = {
    name : "pratap",
    age : 27
  }

  let myArr = [1 , 2, 3, 4]
  return (
    <div>
      <h1 className="bg-green-400 text-black rounded-xl mb-5">Tailwind Test</h1>
      <Card username = 'chai aur code'  btnText = 'Click Me' someObject ={myObj} someArray = {myArr}/>
      <Card username = 'some name' />
    </div>
  );
}

export default App;
