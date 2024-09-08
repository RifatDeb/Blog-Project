import './cont.scss'
import React from 'react';

const Cont = () => {
  return (
    <div className='from'>
          
          <form >
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
    
          <label>Subject</label>
          <textarea name="user_subject" />
          
          <label>Message</label>
          <textarea name="user_message" />
    
          <input type="submit"/>
        </form>
        </div>
  
  )
}

export default Cont
