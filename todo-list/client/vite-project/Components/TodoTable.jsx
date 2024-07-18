import {useEffect, useState} from "react"
import Spinner from "./Spinner";
export default function TodoTable(){
    const BaseUrl = "http://localhost:3030/jsonstore/todos"

    const [tasks,UpdateTasks] = useState([])
    const [loading, setLoading] = useState(true);

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
                        <button className="btn todo-btn">Change status</button>
                        </td>
                    </tr>                
            )
            UpdateTasks(HTMLTasks);
            setLoading(false)
            console.log(HTMLTasks)
        }

        fetchTasks();
     
    },[])
 
    return(

        <div>
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