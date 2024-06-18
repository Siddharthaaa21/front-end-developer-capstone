import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    let valid = true;

    if (!formData.name) {
      tempErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email) {
      tempErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      valid = false;
    }
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
      valid = false;
    }
    if (!formData.date) {
      tempErrors.date = "Date is required";
      valid = false;
    }
    if (!formData.time) {
      tempErrors.time = "Time is required";
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      // You can add code here to send form data to your server
      alert('Booking successful!');
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
        {errors.date && <span className="error">{errors.date}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="time">Time</label>
        <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} />
        {errors.time && <span className="error">{errors.time}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="guests">Number of Guests</label>
        <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} min="1" />
      </div>
      <button type="submit">Book Table</button>
    </form>
  );
};

export default BookingForm;
