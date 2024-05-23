function TextNote ({state, dispatch}) { 
    const handleTextChange = (e) => {
        dispatch({
          type: "UPDATE_TEXT",
          payload: e.target.value,
        });
      };

    return(
        <>
        <div className="text-cont">
        <h1>Textify</h1>
         <textarea name="note-pad" id="textarea" rows={15} cols={100} placeholder="Enter The Text" value={state.text} onChange={handleTextChange}></textarea>
        
        </div>
       
        </>
    );
}

export default TextNote;
