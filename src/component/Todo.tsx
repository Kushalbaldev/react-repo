import React, {useState} from "react"

const Todo = () => {

    const [tasks,setTasks]=useState([]);
    const[newTask,setNewTask]=useState("");

    function handleInputChange(event:any){
        setNewTask(event.target.value);
    }

    
    function addTask(){
        if(newTask.trim().length!=0)
    setTasks(t=>[...t,newTask]);
    setNewTask("");
}

    
    function removeTask(index:number){
        const updateTask= tasks.filter((_,i)=>i!==index);
        setTasks(updateTask)

    }

    function moveTaskUp(index:number){
        if(index>0){
            const updateTasks=[...tasks];
            [updateTasks[index],updateTasks[index-1]]=[updateTasks[index-1],updateTasks[index]];
            setTasks(updateTasks);
        }

    }

    function moveTaskDown(index:number){
        if(index<tasks.length-1){
            const updateTasks=[...tasks];
            [updateTasks[index],updateTasks[index+1]]=[updateTasks[index+1],updateTasks[index]];
            setTasks(updateTasks);
        }

    }


  return (
    <div className="to-do-list">
        <h1>Todo List</h1>
        <div className="mid-div">
        <input type="text" className="form-control" placeholder="Enter a task" value={newTask} onChange={handleInputChange}/>
            
            <button type="button" className="btn btn-success" onClick={addTask}>Add</button>
        </div>

        <ol>
            {tasks.map((item,index)=> <li key={index}>
                
                <span className="text">{item}</span>
                <button type="button" className="btn btn-danger" onClick={()=>removeTask(index)}>Delete</button>
                <button type="button" className="btn btn-info" onClick={()=>moveTaskUp(index)}>⬆️ </button>
                <button type="button" className="btn btn-info" onClick={()=>moveTaskDown(index)}>⬇️ </button>
                
                </li>)} 
        </ol>

    </div>
  )
}

export default Todo
