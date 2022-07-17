import { useRef,useState } from "react";

const SimpleInput = (props) => {
const nameInputRef = useRef();
const [enteredName, setEnteredName] = useState('');

const [enteredNameIsValid, setEnteredNameIsValid]= useState(true);

const nameInputHandler = event=>{
  setEnteredName(event.target.value);
};
 const formSubmissionHandler = event =>{
  event.preventDefault();

  if (enteredName.trim()===''){
    setEnteredNameIsValid(false);
    return;
  }
 
 console.log(enteredName);
 const enteredValue =nameInputRef.current.value;
 
 console.log(enteredValue)
 };
 const nameInputClasses = enteredNameIsValid ? 'form-control': 'form-control invalid'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
       <input
       ref={nameInputRef}
       type='text'
       id="name"
       onChange={nameInputHandler}
       value= {enteredName}
       />
       {!enteredNameIsValid && <p className="error-text">Name must not be empty</p>}
       </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form> 
  );
};


export default SimpleInput;
