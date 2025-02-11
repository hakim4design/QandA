import React from 'react'
import { Accordion } from 'react-bootstrap'; 
import { question } from '../data';


const QaList = ({data, deleteOneItem}) => {
// To Delete One Item from Array 
 const dataLocal = JSON.parse(localStorage.getItem("items"));
const onDeleteItem = (ID)=>{
    if(localStorage.getItem("items") != null){
        const index = question.findIndex((item)=> item.id === ID );
            question.splice(index, 1);
            deleteOneItem(question);
  
}

}
return (
    <Accordion className='w-100' dir="rtl" >
    {
        dataLocal !== null ? ( dataLocal.map( (item,index)=> {
                return ( 
                    <Accordion.Item className='w-100' eventKey={item.id} key={index}>
                        <Accordion.Header>{item.Q}</Accordion.Header>
                        <Accordion.Body className='d-flex justify-content-between'>
                        <h5>{item.ans} </h5>
                        <button onClick={()=> onDeleteItem(item.id)} className='btn btn-danger me-2'>مسح</button>
                        </Accordion.Body>
                    </Accordion.Item>
              

                )

        })) : <h2 className='text-center'>لا يوجد أسئلة الآن</h2> }
</Accordion>

)}

export default QaList;
