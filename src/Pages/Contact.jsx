import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setEmail, setMessage, resetForm } from '../features/contact/contactSlice';

function Contact() {
  const dispatch = useDispatch();
  const { name, email, message } = useSelector((state) => state.contact);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here (e.g., send data to backend)
    console.log({ name, email, message });
    dispatch(resetForm());
  };

  return (
    <div className="container mb-5">
      <h1>Hubungi saya disini</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nama</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            value={name} 
            onChange={(e) => dispatch(setName(e.target.value))} 
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email saya</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            value={email} 
            onChange={(e) => dispatch(setEmail(e.target.value))} 
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Kirim pesan mu disini kak</label>
          <textarea 
            className="form-control" 
            id="message" 
            rows="5" 
            value={message} 
            onChange={(e) => dispatch(setMessage(e.target.value))} 
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <div className="mt-5">
        <h3>Informasi lebih lanjutnya disini</h3>
        <p>
          
        </p>
        <ul>
          <li>Email: Affafahmizain@gmail.com</li>
          <li>Phone: 087850706038</li>
        </ul>
        <p>
          Address:<br />
          Jalan Imam Bonjol No.207 Kecamatan Semarang Utara
        </p>
      </div>

      <div className="mt-5">
        <h3>Cari tau sosmed disini</h3>
        <p>Info berita update lainnya:</p>
        <ul>
          <li><a href="https://instagram.com/tanahlongsor" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
