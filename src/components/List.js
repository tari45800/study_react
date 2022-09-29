import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

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

      <DragDropContext>
        <Droppable droppableId='todo'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableI={data.id.toString()}
                  index={index}
                >
                {(provided, snapshot) => (
                <div key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                  <div className='flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded'>
                    <div className='items-center'>
                      <input 
                        type="checkbox" 
                        defaultChecked={false}
                        onClick={() => handleCompleChange(data.id)}
                        className='mr-2'
                        />

                      <span className={data.completed ? "line-through" : undefined}>
                        {data.title}
                      </span>
                    </div>

                    <div className='items-center'>
                      <button 
                        onClick={() => handleClick(data.id)}>
                        x
                      </button>
                    </div>            

                  </div>
                </div>
               )} 
              </Draggable>
            ))}
          </div>
        )}
        </Droppable>
      </DragDropContext>

    </div>
  )
}
