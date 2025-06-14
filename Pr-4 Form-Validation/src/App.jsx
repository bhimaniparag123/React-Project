import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    image: "",
    phone: "",
    gender: "",
    occupation: "",
    review: "",
    rating: 0,
  });

  const [hover, setHover] = useState(0);
  const [error, setError] = useState("");
  const [reviews, setReviews] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, image, phone, gender, occupation, review, rating } = form;

    if (!username || !email || !image || !phone || !gender || !occupation || !review || rating === 0) {
      setError("Please fill out all fields including star rating.");
      return;
    }

    if (isEdit) {
      const updatedReviews = [...reviews];
      updatedReviews[editIndex] = form;
      setReviews(updatedReviews);
      setIsEdit(false);
      setEditIndex(null);
    } else {
      setReviews([form, ...reviews]);
    }

    setForm({
      username: "",
      email: "",
      image: "",
      phone: "",
      gender: "",
      occupation: "",
      review: "",
      rating: 0,
    });
    setHover(0);
    setError("");
  };

  const handleDelete = (index) => {
    const filtered = reviews.filter((_, i) => i !== index);
    setReviews(filtered);
  };

  const handleEdit = (index) => {
    const selected = reviews[index];
    setForm(selected);
    setHover(selected.rating);
    setIsEdit(true);
    setEditIndex(index);
  };

  return (
    <div className="container">
      <h1>🌟Submit Your Review</h1>

      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Full Name"
          value={form.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Profile Image URL"
          value={form.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />
        <select name="gender" value={form.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          name="occupation"
          placeholder="Occupation"
          value={form.occupation}
          onChange={handleChange}
        />
        <textarea
          name="review"
          placeholder="Write your review here..."
          value={form.review}
          onChange={handleChange}
        ></textarea>

        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= (hover || form.rating) ? "filled" : "empty"}
              onClick={() => setForm({ ...form, rating: star })}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            >
              ★
            </span>
          ))}
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">{isEdit ? "Update Review" : "Submit Review"}</button>
      </form>

      <h2>Submitted Reviews</h2>
      <div className="review-row">
        {reviews.map((rev, index) => (
          <div className="review-card" key={index}>
            <img src={rev.image} alt="User" className="user-image" />
            <h3>{rev.username}</h3>
            <p className="email">{rev.email}</p>
            <p><strong>Phone:</strong> {rev.phone}</p>
            <p><strong>Gender:</strong> {rev.gender}</p>
            <p><strong>Occupation:</strong> {rev.occupation}</p>
            <p>{rev.review}</p>
            <p className="stars">{"★".repeat(rev.rating)}</p>
            <div className="card-actions">
              <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;