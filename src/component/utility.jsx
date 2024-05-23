function Utility ({dispatch}){
    const convertToUppercase = () => {
        dispatch({
          type: "CONVERT_UPPCASE",
        });
      };
      const convertToLowercase = () => {
        dispatch({
          type: "CONVERT_LOWERCASE",
        });
      };
      const clearText = () => {
        dispatch({
          type: "CLEAR_TEXT",
        });
      };

    return (
        <>
         <div className="utl-cont">
            <button onClick={convertToUppercase}>UPPERCASE</button>
            <button onClick={convertToLowercase}>lowercase</button>
            <button onClick={clearText} ><i>Clear Text</i></button>
         </div>
        </>
    )
}

export default Utility;