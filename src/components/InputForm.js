import React, {useState} from 'react'
import styled from 'styled-components';
import check from '../images/icon-check.svg'

function InputForm({ darkMode, addTodo}) {

  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <Form onSubmit={ e => {
        e.preventDefault();
        addTodo(e.target.elements.todo.value,isCompleted);
        e.target.elements.todo.value = '';
    }}>
        <Completeicon 
            darkMode={darkMode}
            isCompleted={isCompleted}
            onClick={()=>setIsCompleted(!isCompleted)}
            >
            {isCompleted && <img src={check} alt=''/>}
        </Completeicon>

        <Input
            darkMode={darkMode}
            name='todo'
            placeholder='Create a new todo…'
        />
        
    </Form>
  )
}

const Form = styled.form`
    position: relative;
    margin-top:48px;
    @media (max-width: 375px){
        margin-top:40px;
    }
`
const Input = styled.input`
    width: 100%;
    height: 64px;
    background: ${props => props.darkMode ? "#25273D" : "#ffffff"};
    box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
    border-radius: 5px;
    border: none;
    font-family: Josefin Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.25px;
    padding: 23px 72px;
    color: ${props => props.darkMode ? "#C8CBE7"  :"#393A4B"};
    ::placeholder{
        color: ${props => props.darkMode ? "#767992"  :"#9495A5"};
    }
    @media (max-width: 375px){
        padding: 18px 52px;
        font-size: 12px;
    }
`
const Completeicon = styled.div`
    height: 24px;
    width: 24px;
    border-radius: 50%;
    border:1px solid ${props => props.darkMode? "#393A4B" : "#E3E4F1"};
    position: absolute;
    top: 20px;
    left: 24px;
    background: ${props => props.isCompleted ? "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)":""};
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default InputForm