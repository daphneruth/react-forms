      import {  useState } from "react";

      const SimpleInput = (props) => {
      
      const [enteredName, setEnteredName] = useState('');
      const [enteredNameTouched, setEnteredNameTouched]= useState(false);
      const [enteredEmail, setEnteredEmail] = useState('');
      const [enteredEmaiTouched, setEnteredEmailTouched]= useState(false);
      

      
      const enteredNameIsValid = enteredName.trim() !=='';
      const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

      const enteredEmailIsValid = enteredEmail.includes('@');

      const enteredEmailIsInvalid= !enteredEmailIsValid && enteredEmaiTouched;

      let formIsValid = false;
      
        if(enteredNameIsValid) {
          formIsValid = true;
      
      };
      const nameInputHandler = event=>{
        setEnteredName(event.target.value);
      };

      const emailInputHandler = event=>{
        setEnteredEmail(event.target.value);
      }

      const nameInputBlurHandler = event => {
         setEnteredNameTouched(true);
        
        }
        const emailInputBlurHandler = event=>{
          setEnteredEmail(event.target.value);
  
        }
      

      const formSubmissionHandler = event =>{
        event.preventDefault();
        setEnteredNameTouched(true);

        if (!enteredNameIsValid){
          
          return;
        }
      
      console.log(enteredName);
      setEnteredName('');
      setEnteredNameTouched(false);
      setEnteredEmail('');
      setEnteredEmailTouched(false);
      
      
      };
      
      const nameInputClasses = nameInputIsInvalid 
        ? 'form-control invalid'
        : 'form-control';
        
        const emailInputClasses = enteredEmailIsInvalid
        ? 'form-control invalid'
        : 'form-control';

        return (
          <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
              <label htmlFor='name'>Your Name</label>
            <input
          
            type='text'
            id="name"
            onChange={nameInputHandler}
            onBlur= {nameInputBlurHandler}
            value= {enteredName}
            />
            {nameInputIsInvalid &&(
               <p className="error-text">Name must not be empty</p>)}
            </div>
            <div className="form-actions">
              <button disabled={!formIsValid}> Submit</button>
            </div>

            <div className={emailInputClasses}>
              <label htmlFor='email'>Your Email</label>
            <input
          
            type='email'
            id="email"
            onChange={emailInputHandler}
            onBlur= {emailInputBlurHandler}
            value= {enteredEmail}
            />
            {emailInputClasses && 
            (<p className="error-text">please enter a valid email </p>)}
            </div>
            <div className="form-actions">
              <button disabled={!formIsValid}> Submit</button>
            </div>
          </form> 
        );
        
        }
      
      export default SimpleInput;
    
