
import './App.css'
import Summary from './component/summary'
import TextNote from './component/textNote'
import Utility from './component/utility'
import { useReducer } from 'react'

const initialState = {
  text:"",
  numWords: 0,
  numChars: 0,
  readTime: 0,
};

const reducer = (state, action) =>{
  switch (action.type){
    case "UPDATE_TEXT":
      const updateNumberOfWords =  action.payload.split(" ").filter((word) => word.trim().length > 0).length;
      
      return{
        ...state,
        numChars: action.payload.length,
        numWords: updateNumberOfWords,
        readTime: 0.008*updateNumberOfWords,
        text: action.payload,
      };
      case "CONVERT_UPPCASE":
      return {
        ...state,
        text: state.text.toUpperCase(),
      };
    case "CONVERT_LOWERCASE":
      return {
        ...state,
        text: state.text.toLowerCase(),
      };
    case "CLEAR_TEXT":
      return initialState;
    default:
      return state;
}
};

function App() {
     const [state, dispatch] = useReducer (reducer, initialState);

  return (
    <>
     <TextNote state={state} dispatch={dispatch}/>
     <Utility dispatch={dispatch}/>
     <Summary state={state}/>
    </>
  )
}

export default App
