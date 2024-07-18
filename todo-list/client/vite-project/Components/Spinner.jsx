export default function Spinner(){
    return(
        // Loading spinner - loading when fetching the data from the server
        <div className="loading-container">
            <div className="loading-spinner">
                <span className="loading-spinner-text">Loading</span>
            </div>
        </div>
    )
}
