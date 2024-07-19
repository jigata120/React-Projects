import TodoTable from "./TodoTable"
import Spinner from "./Spinner"
import loading from "./TodoTable"
import { useState } from "react"

export default function MainSection(){
    const [showed,showForm] = useState(false)

    // const
    function openForm(){
        showForm(true)
      }
    const closeForm =  ()=>{
        showForm(false)

    }
    return(
         
    <main className="main">

        {/* Section container */}
        <section className="todo-list-container">
            <h1>Todo List</h1>

            <div className="add-btn-container">
                <button className="btn" onClick={openForm}>+ Add new Todo</button>
            </div>

            <div className="table-wrapper">
                 
                <TodoTable show = {showed}   closeForm={closeForm}/>
            </div>
        </section>
    </main>
    )
}