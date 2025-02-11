import React, { useState } from 'react';
import QaList from './components/QaList';
import Title from './components/Title';
import FormInput from './components/FormInput';
import './App.css';
import { Container,Row,Col } from 'react-bootstrap';
import { question } from './data';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [data,setData] = useState(question);
  // Add and Upadate New Item
  const updatedItem = ()=>{
    localStorage.setItem("items",JSON.stringify(...[question]));
    setData([...question]);
    notify("!تمت الإضافة بنجاح", "success");

  }
  // Delete All Questions
  const deleteAllQuestions = ()=>{
    localStorage.removeItem("items");
    question.splice(0,question.length);
    setData([]);
    notify("!تمت حذف الكل بنجاح", "success");
  }

  // Delete One Item 
  const deleteOneItem = (items) =>{
    localStorage.setItem("items",JSON.stringify(...[items]));
     setData([...items])
     notify("!تمت حذف السؤال بنجاح", "success");
     if(items.length <=0){
      deleteAllQuestions()
     }
  }

  // To push one item 
  const notify = (message, type) => {
      if (type === "Error") {
      toast.error(message)
      } else if (type === "success") {
      toast.success(message)
      }
    };



  return (
    <div className="App">
      <Container className='py-5'>
         <Row className=''>
        {/*  <Title title="أضف سؤالك من هنا"/> */}
            <Col className='' md={4}> 
                <h2>أسئلة وأجوبة شائعة</h2>
            </Col>
            <Col className=' h-100 py-3' md={8}> 
                    <FormInput DisplayData={updatedItem} notify={notify
                    }/>
                <Row>
                  <Col className='d-flex flex-column align-items-center mt-3' xs={12}>
                        
          
                          <QaList data={data} deleteOneItem={deleteOneItem}/>

                     {
                      localStorage.getItem("items") !== null ? ( <button className='mt-3 w-100 py-2 btn btn-light bg-danger text-white ' onClick={deleteAllQuestions}> مسح الكل</button>) : ""
                      }

                  </Col>
                </Row>
            
            
            </Col>

         </Row>
         <ToastContainer rtl/>
      </Container>
    

    </div>
  );
}

export default App;
