import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Firstpage() {
  return (
    <div>
        <h1 className='mb-2 text-warning'>Cyber Security</h1>
        <form>
            <div className='row mb-2'>
                <div className='col d-flex justify-content-end'>
                <label className='text-secondary'>Phone Number 1:</label>
                </div>
                <div className='col d-flex justify-content-start'>
                <input type="text"/> 
                </div>
            </div>
            <div className='row mb-2'>
                <div className='col d-flex justify-content-end'>
                <label className='text-secondary'>Phone Number 2:</label>
                </div>
                <div className='col d-flex justify-content-start'>
                <input type="text"/> 
                </div>
            </div>

            <div className='row mb-2'>
                <div className='col d-flex justify-content-end'>
                <label className='text-secondary'>IMEI 1 :
                </label>
                </div>
                <div className='col d-flex justify-content-start'>
                <input type="text"/> 
                </div>
            </div>
            <div className='row mb-2'>
                <div className='col d-flex justify-content-end'>
                <label className='text-secondary'>IMEI 2 :
                </label>
                </div>
                <div className='col d-flex justify-content-start'>
                <input type="text"/> 
                </div>
            </div>
            <div className='row mb-2'>
                <div className='col'>
                </div>
                <div className='col d-flex justify-content-start'>
                
                <Button variant="outline-primary me-2">Back</Button>
                <Link to='/secondpage'><Button variant="outline-secondary">Next</Button></Link>
                </div>
            </div>
         

        </form>
    </div>
  )
}

export default Firstpage