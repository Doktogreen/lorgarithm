import React,{useState} from 'react'
import {Button, Modal,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const AddJob = ({addJob}) => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
    const [newJob, setNewJob] = useState({
         id: Math.random(),
        image:"",
        rating: 0,
        name:"" ,
        date: "",
        type: "",
        description:""})
        const handelNewJob = (e)=>setNewJob({...newJob,[e.target.name]: e.target.value});
    return (
        <div>
          
          <>
      <Button variant="primary" onClick={handleShow}>
        Add new Job   
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add film</Modal.Title>
        </Modal.Header>
            <input placeholder="Image URL"  value={newJob.image} name="image" onChange ={handelNewJob}/>
            <input placeholder="Rating" value={newJob.rating} name="rating"  onChange  ={handelNewJob}/>
            <input placeholder="Name" value={newJob.name} name="name" onChange = {handelNewJob} />
            <input placeholder="Date" value={newJob.date} name="date" onChange ={handelNewJob}/>
            <input placeholder="Type" value={newJob.type} name="type" onChange ={handelNewJob}/>
            <input placeholder="Description" value={newJob.description} name="description" onChange={handelNewJob}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addJob(newJob);setNewJob({
            id: Math.random(),
            image:"",
            rating: 0,
            name:"" ,
            date: "",
            type: "",
            description:""
          });handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
       
        </div> 
    )
}

export default AddJob