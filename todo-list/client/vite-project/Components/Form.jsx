export default function Form({
    closeForm,
    setLoading,
    ReadyToRenred,
    render
}){

    let text = ''
    let isCompleted = false
    function setTaskText(value ) {
        text = value
        console.log(text)
    }
    function setIsCompleted(value) {
        isCompleted = value
        console.log(isCompleted)

    }

    const BaseUrl = "http://localhost:3030/jsonstore/todos";

    async function postTask(e) {
        e.preventDefault()
        
        e.preventDefault(); 
        setLoading(true)
        try {
            const response = await fetch(BaseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( 
                {
                    text,
                    isCompleted
                 }
                ),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log('Posted task:', data);
            setLoading(false)
            closeForm()
            ReadyToRenred(!render)
            return data;
            
        } catch (error) {
            console.error('Error posting task:', error);
        }
    }


    return(
// onSubmit={handleSubmit}
            <form  onSubmit={postTask} className="loading-container"  >
                <input
                    type="text"
                    placeholder="Task Text"
                    // value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    required
                />
                <label>
                    Completed:
                    <input
                        type="checkbox"
                        // checked={isCompleted}
                        onChange={(e) => setIsCompleted(e.target.checked)}
                    />
                </label>
                <button type="submit" >Submit</button>
                <button onClick={closeForm} >Close</button>

            </form>

    )
}