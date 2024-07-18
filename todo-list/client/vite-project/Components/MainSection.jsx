import TodoTable from "./TodoTable"
import Spinner from "./Spinner"
import loading from "./TodoTable"

export default function MainSection(){

    // const

    return(
         
    <main className="main">

        {/* Section container */}
        <section className="todo-list-container">
            <h1>Todo List</h1>

            <div className="add-btn-container">
                <button className="btn">+ Add new Todo</button>
            </div>

            <div className="table-wrapper">
                 
                <TodoTable/>
            </div>
        </section>
    </main>
    )
}