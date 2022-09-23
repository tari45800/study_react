import React, {useState} from "react";
import From from "./components/From";
import List from "./components/List";



export default function App(){


  // useState초기값
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");
  

  //state 부분이 겹치기 때문에 여기에서 사용하는것이 효율적이다.
  const handleSubmit = (e) => {
    // 서브밋을 했을 때 새로고침을 방지하는 용도
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    }

    setTodoData(prev => [...prev, newTodo]);
    setValue("");
  }


  // --------------------------------------------------


    return(
      <div className="flex justify-center items-center w-screan h-screan bg-blue-100"> 
        <div>

          <div>
            <h1>할 일 목록</h1>
          </div>  
          
          <List todoData={todoData} setTodoData={setTodoData}/>
          <From value={value} setValue={setValue} handleSubmit={handleSubmit}/>

        </div>
      </div>
    )


  // --------------------------------------------------

  
}
