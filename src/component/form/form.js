import React from 'react'
import '../form/form.css';
const form = (props) => {
  return (
    <div className="overlay">
        <form className='form'>
            <div className="model_header">
                <button className='close_button'>&times;</button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="mainbody">
            <label className="lebal" for="Dashbboard Type">Dashbboard Type</label>
            
            <br />
            <select className="select" name="" id="">
              <option value="Select">select</option>
              <option value="saab">select</option>
            </select>
                
            </div>

            <br />

            <div className="mainbody">
            <label className="lebal" for="Dashbboard Type">Dashbboard Group</label>
            
            <br />
            <select className="select" name="" id="">
              <option value="Select">select</option>
              <option value="saab">Test Demo</option>
              <option value="saab">Page Builder Demo</option>
              <option value="saab">Metabase</option>
            </select>
                
            </div>

            <br />

            <div className="mainbody">
            <label className="lebal" for="Dashbboard Type">Dashbboard Name</label>
            
            <br />
            <select className="select" name="" id="">
              <option value="Select">select</option>
              <option value="saab">Dashbboard 1</option>
              <option value="saab">Dashbboard 2</option>
              <option value="saab">Dashbboard 3</option>
              <option value="saab">Dashbboard 4</option>
            </select>
                
            </div>

            <br />

            <div className="mainbody">
            <label className="lebal1" for="Dashbboard Type">Dashbboard ID</label>
            
            <br />
            <select className="select" name="" id="">
              <option value="Select">select</option>
              <option value="saab">select</option>
            </select>
                
            </div>

            <br />

            <div className="mainbody">
            <label className="lebal2" for="Dashbboard Type">Roll ID</label>
            
            <br />
            <select className="select" name="" id="">
              <option value="Select">select</option>
              <option value="saab">Admin</option>
            </select>
                
            </div>


           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
            <div className="footer">
                <button className='footerbtn'>Save</button>
                <button className='footerbtn2'>Cancel</button>
            </div>

            <br />
            <br />
        </form>
    </div>
  )
}

export default form