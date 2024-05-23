function Summary ({state}){
    return(
        <>
        <div className="sum-cont">
        <p>Number of words : {state.numWords}</p>
        <p>Number of Characters : {state.numChars}</p>
        <p>Reading Time : {state.readTime}</p>
        </div>
        
        </>
    );
}

export default Summary;