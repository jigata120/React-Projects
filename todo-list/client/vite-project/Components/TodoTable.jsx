import {useEffect, useState} from "react"
import Spinner from "./Spinner";
import Form from "./Form";
export default function TodoTable({
  show,
  closeForm
}){
    const BaseUrl = "http://localhost:3030/jsonstore/todos"

    const [tasks,UpdateTasks] = useState([])
    const [loading, setLoading] = useState(true);
    const [render,ReadyToRenred] = useState(false)
    const Render = ()=>{ReadyToRenred(!render)}   

    async function GetTasks(){
        setLoading(true)
        const response = await fetch(BaseUrl);
        const data = await response.json();
        return data
    }
    

    useEffect(()=>{
        async function fetchTasks() {
            const fetchedTasks = await GetTasks();
            let HTMLTasks =Object.entries(fetchedTasks).map(([key, task]) => 
                    <tr className={task["isCompleted"]?"todo is-completed":"todo"} key={key}>
                        <td>{task["text"]}</td>
                        <td>{task["isCompleted"]?"Completed":"Not Complited"}</td>
                        <td className="todo-action">
                        <button onClick={() => updateTask(task["_id"],task["text"],!task["isCompleted"])} className="btn todo-btn">Change status</button>
                        </td>
                    </tr>                
            )
            UpdateTasks(HTMLTasks);
            setLoading(false)     
        }

        fetchTasks();
     
    },[render])
   

    async function updateTask(id,text,isCompleted) {
      try {
          const response = await fetch(`${BaseUrl}/${id}`, {
              method: 'PUT', 
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                text,
                isCompleted
              }),
          });
  
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          console.log("daw")
          ReadyToRenred(!render)
           
          return data;
      } catch (error) {
          console.error( error);
      }
    }
 
    

    return(

        <div>
            {show && <Form 
            closeForm={closeForm} 
            setLoading={setLoading} 
            ReadyToRenred={ReadyToRenred}
            render={render}
            />}
            {!loading || <Spinner/>}  
            <table className="table">
            

          <thead>
            <tr>
              <th className="table-header-task">Task</th>
              <th className="table-header-status">Status</th>
              <th className="table-header-action">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks}
          </tbody>
        </table>
        </div>
    )
}