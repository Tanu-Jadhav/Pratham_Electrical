import axios from "axios";
import { useEffect, useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/reviews")
      .then(res => setReviews(res.data));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Customer Reviews</h2>
      {reviews.map(r => (
        <div className="card mb-2" key={r._id}>
          <div className="card-body">
            <h5>{r.name} ⭐ {r.rating}</h5>
            <p>{r.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
