import React, { useState } from 'react'
import {Modal,Button} from 'react-bootstrap'

const AddTalent = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [NewTalent,SetNewTalent] = useState({
        id:"",
        title:"",
        Description:"",
        PosterURL:"",
        rating:"",
    })
    const handlechange =(e) =>{
        SetNewTalent({...NewTalent,[e.target.name]:e.target.value})}
    
    const handleSave =()=>{
          props.handleTalentAdd(NewTalent)
            SetNewTalent({
                id:"",
                title:"",
                Description:"",
                PosterURL:"",
                rating:"", 
            })
            setShow(false) 
    }
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                ADD NEW TALENTS
            </Button>
            <Modal show={show} animation={false} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="texte" name="id" placeholder="id" onChange={handlechange} value={NewTalent.id}  ></input>
                    <input type="texte" name="title" placeholder="Title" onChange={handlechange} value={NewTalent.title}></input>
                    <input type="texte" name="Description" placeholder="Description" onChange={handlechange} value={NewTalent.Description}></input>
                    <input type="texte" name="PosterURL" placeholder="URL" onChange={handlechange} value={NewTalent.PosterURL}></input>
                    <input type="texte" name="rating" placeholder="Rating" onChange={handlechange} value={NewTalent.rating}></input>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal> 
        </div>
    )
}

export default AddTalent
