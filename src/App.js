import logo from './logo.svg';
import './App.css';
import FC from "./Components/FunctionalComp"
import Click from "./Components/Click"
import ParentComp from "./Components/ParentComp"
import Counter from "./Components/Counter"
import {ClassComp, ClassComp1} from './Components/ClassComp';

function App() {
  return <div>
            <h1>Hello world!</h1>
            <h1>This is my first ReactApp!</h1>
            <FC />
            <ClassComp />
            <ClassComp1 />
            <Click />
            <Counter />
            <ParentComp />
        </div>
}

export default App;