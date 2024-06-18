
import React, { useState } from 'react'

function BookingForm(props){
  const [date,setDate]=useState("");
  const [time,setTime]=useState("");
  const [guest,setGuest]=useState("");
  const [occasion,setOccasion]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    props.submitForm(e);
  }

  const handleChange=(e)=>{
    setDate(e);
    props.dispatch(e);

  }

  return (
    <header>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset className='formField'>
                    {/* DATE */}
                    <div>
                        <label htmlFor='book-date'>Choose Date:</label>
                        <input id='book-date' value={date} onChange={(e)=>handleChange(e.target.value)} 
                        type='date' required/>
                    </div>

                    {/* TIME */}
                    <div>
                        <label htmlFor='book-time'>Choose Time:</label>
                        <select id='book-time' value={time} onChange={(e)=>setTime(e.target.value)} required>
                           <option value="">Select Time:</option>
                           {
                            props.availableTimes.availableTimes.map(availableTimes=>{return <option key={availableTimes}>{availableTimes}</option> })
                           }
                        </select>
                    </div>

                    {/* GUEST */}
                    <div>
                        <label htmlFor='book-guests'>Number of Guests:</label>
                        <input id='book-guests' min="1" value={guest} onChange={(e)=>{setGuest(e.target.value)}} type={'number'} placeholder={0} max={10} required />
                    </div>

                    {/* OCCASION */}
                    <div>
                       <label htmlFor='book-occasion'>Occasion:</label>
                       <select id='book-occasion' key={occasion} value={occasion} onChange={e=>setOccasion(e.target.value)} required>
                            <option value="">Select an Option</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Date</option>
                        </select>
                    </div>

                    <div className='btnReceive'>
                        <input aria-label="On Click" type={"submit"} value={"Make Your Reservation"}/>        
                    </div>
                </fieldset>
            </form>
        </section>
    </header>
  )
}

export default BookingForm;

