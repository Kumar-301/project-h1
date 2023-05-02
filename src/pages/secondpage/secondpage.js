import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Secondpage() {
  return (
    <>
          <form>
             <div className='row mb-2 mt-4'>
                <div className='col d-flex justify-content-end'>
                <label className='text-secondary'>Enter Your Phone Screen Lock :</label>
                </div>
                <div className='col d-flex justify-content-start'>
                <input type="text"/> 
                </div>
            </div>
            <div className='row mb-2'>
                <div className='col'>
                </div>
                <div className='col d-flex justify-content-start'>
                <Link to="/firstpage"><Button variant="outline-primary me-2">Back</Button></Link>
                <Link to="/thirdpage"><Button variant="outline-secondary">Next</Button></Link>
                </div>
            </div>
            </form>
    </>
  )
}

export default Secondpage;