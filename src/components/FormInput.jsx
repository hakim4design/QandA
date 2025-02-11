import React, { useState } from 'react'
import { Row,Col, Form, Button } from 'react-bootstrap';
import { question } from '../data';
const FormInput = ({DisplayData,notify}) => {
  
    const [Qu,setQu] = useState("");
    const [An,setAn] = useState("");
        const AddItems = ()=>{
          if(Qu === "" || An === ""){
            notify("يجب تسجيل بيانات أولاً","Error");
            return;
  
          }
         question.push({id:Math.random(),Q:Qu, ans:An});
        setQu("");
        setAn("");
        DisplayData();
        console.log(question);
        
        }

  return (
    <Row className='mt-3'>
        <Col className='ba-warning' xs={5}>
            <Form.Control
                onChange={(e)=>{setQu(e.target.value)}}
                value={Qu}
                type="text"
                placeholder="ادخل السؤال هنا"
                aria-label="Disabled input example"
            /> 
            </Col>
            <Col xs={5}>
                    <>
                    <Form.Control
                          onChange={(e) => {setAn(e.target.value)}}
                          value={An}
                        type="text"
                        placeholder="ادخل الجواب هنا"
                        aria-label="Disabled input example"
                        
                    />
                    </>
          </Col>
        <Col xs={2}><Button onClick={AddItems} variant="success">إدخال</Button></Col>
    </Row>
  )
}

export default FormInput