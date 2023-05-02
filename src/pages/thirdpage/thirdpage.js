import Button from 'react-bootstrap/Button';
import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
function Thirdpage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      
      <div className='mb-2 mt-4 d-flex justify-content-center'>
        <div>
                <div className='text-center'>
                    <h4 className="text-info">Which data you want from your mobile</h4>
                    
                </div>
                <div>
              
                      <p className='order-list' onClick={handleShow}>1.Photos</p>
                      <p className='order-list' onClick={handleShow}>2.Videos</p>
                      <p className='order-list' onClick={handleShow}>3.Messages</p>
                      <p className='order-list' onClick={handleShow}>4.Call Logs</p>
                </div>
        
            </div>
            </div>
          <div className='row mb-2'>
                <div className='col'>
                </div>
                <div className='col d-flex justify-content-start'>
                <Link to="/secondpage"><Button variant="outline-primary me-2">Back</Button></Link>
               
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Mobile is in working</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      </>
  )
}

export default Thirdpage;