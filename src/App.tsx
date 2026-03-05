import React from 'react';
import { Routes,Route } from "react-router-dom";
import './styles/App.css';
import Aside from "./components/Aside";
import Calendar from "./components/Calendar";
import AllTasks from "./components/AllTasks";
import Today from "./components/Today";
import "./styles/normalize.css"
import "./styles/variables.css"
import ModelWindowAddTask from "./components/ModelWindowAddTask";

function App() {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="App">
            <Aside setIsOpen={setIsOpen} />
            { isOpen && <ModelWindowAddTask  setIsOpen={setIsOpen}/> }
            <Routes>
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/all" element={<AllTasks/>} />
                <Route path="*" element={<Today />} />
            </Routes>
        </div>
    );
}

export default App;
