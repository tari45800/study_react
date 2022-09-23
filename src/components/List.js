import React from 'react'

export default function List({todoData, setTodoData}) {

 
  // css --------------------------------------------------

  // 기능 --------------------------------------------------

  const handleCompleChange = (id) => {

    let newTodoData = todoData.map((data) => {
      if (data.id == id){
        data.completed = !data.completed;
      }
      return data;
    }) 

    setTodoData(newTodoData);
  }


  const handleClick = (id) => {
    let newTodoData = todoData.filter(data => data.id !== id);
    setTodoData(newTodoData);
  }
  

  return (
    <div>
      {/* 할일 목록 */}
      {todoData.map(data => (
        <div key={data.id}>
          <input 
            type="checkbox" 
            defaultChecked={false}
            onClick={() => handleCompleChange(data.id)}
          />
          
          {data.title}
          
          <button 
            onClick={() => handleClick(data.id)}>
            x
          </button>

        </div>
      ))}
    </div>
  )
}
