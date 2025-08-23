import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Filter } from "bad-words";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAj4hbemsnaFT6kaX3uffXiTf93ZdQQeWs",
  authDomain: "reviews-7bc09.firebaseapp.com",
  projectId: "reviews-7bc09",
  storageBucket: "reviews-7bc09.firebasestorage.app",
  messagingSenderId: "1087527214005",
  appId: "1:1087527214005:web:b08ba8e386994a1e3017fc",
  measurementId: "G-9503YFZX7X",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

interface Review {
  id?: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

const reviewsPerPage = 5;
const filter = new Filter();

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [formData, setFormData] = useState({ name: "", rating: "", comment: "" });
  const [formMessage, setFormMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-gray-700");
  const [currentSort, setCurrentSort] = useState("date-desc");
  const [pageStack, setPageStack] = useState<firebase.firestore.QueryDocumentSnapshot[]>([]);
  const [firstVisible, setFirstVisible] = useState<firebase.firestore.QueryDocumentSnapshot | null>(null);
  const [lastVisible, setLastVisible] = useState<firebase.firestore.QueryDocumentSnapshot | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, rating, comment } = formData;

    if (!name || !rating || !comment) {
      setFormMessage("Please fill in all fields.");
      setMessageColor("text-red-600");
      return;
    }

    // Profanity check
    if (filter.isProfane(name) || filter.isProfane(comment)) {
      setFormMessage("Please avoid using inappropriate language.");
      setMessageColor("text-red-600");
      return;
    }

    try {
      const newReview: Review = {
        name,
        rating: parseInt(rating),
        comment,
        date: new Date().toISOString().split("T")[0],
        verified: false,
      };
      await db.collection("reviews").add(newReview);
      setFormMessage("Thank you for your review!");
      setMessageColor("text-green-500");
      setFormData({ name: "", rating: "", comment: "" });
      setPageStack([]);
      loadReviews("first");
    } catch (error) {
      console.error("Error submitting review:", error);
      setFormMessage("Error submitting review.");
      setMessageColor("text-red-600");
    }
  };

  const getOrderParams = (sortVal: string): [string, firebase.firestore.OrderByDirection] => {
    switch (sortVal) {
      case "date-asc": return ["date", "asc"];
      case "date-desc": return ["date", "desc"];
      case "rating-asc": return ["rating", "asc"];
      case "rating-desc": return ["rating", "desc"];
      default: return ["date", "desc"];
    }
  };

  const loadReviews = async (direction: "first" | "next" | "prev" = "first") => {
    const [orderField, orderDirection] = getOrderParams(currentSort);
    let query: firebase.firestore.Query = db.collection("reviews").orderBy(orderField, orderDirection).limit(reviewsPerPage);

    if (direction === "next" && lastVisible) query = query.startAfter(lastVisible);
    else if (direction === "prev" && firstVisible && pageStack.length > 1) {
      const prevStack = [...pageStack]; prevStack.pop();
      const prevCursor = prevStack[prevStack.length - 1];
      query = db.collection("reviews").orderBy(orderField, orderDirection).startAt(prevCursor).limit(reviewsPerPage);
      setPageStack(prevStack);
    } else if (direction === "first") setPageStack([]);

    try {
      const snapshot = await query.get();
      if (snapshot.empty) { setReviews([]); return; }
      const loadedReviews: Review[] = snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Review) }));
      setReviews(loadedReviews);
      setFirstVisible(snapshot.docs[0]);
      setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
      if (direction === "first") setPageStack([snapshot.docs[0]]);
      if (direction === "next") setPageStack(prev => [...prev, snapshot.docs[0]]);
    } catch (error) {
      console.error("Error loading reviews:", error);
    }
  };

  useEffect(() => { loadReviews("first"); }, [currentSort]);

  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center py-16 px-6">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-sky-500/20 to-indigo-700/20 blur-3xl pointer-events-none"></div>
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">Customer Reviews</h2>

        <div className="w-full flex flex-col lg:flex-row gap-8 h-[80vh] lg:h-[70vh]">
          
          {/* Centered Form */}
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-3xl shadow-2xl w-full max-w-md">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="bg-gray-900 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white w-full" />
              <select name="rating" value={formData.rating} onChange={handleChange} className="bg-gray-900 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white w-full">
                <option value="">Select rating</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
              <textarea name="comment" placeholder="Your Review" rows={5} value={formData.comment} onChange={handleChange} className="bg-gray-900 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white w-full resize-none" />
              <button type="submit" className="bg-gradient-to-r from-purple-500 to-sky-500 hover:from-sky-500 hover:to-purple-500 font-medium py-3 rounded-xl transition-transform duration-300 transform hover:scale-105 text-white">Submit Review</button>
              {formMessage && <p className={`mt-2 text-center ${messageColor} font-medium`}>{formMessage}</p>}
            </form>
          </div>

          {/* Reviews Section */}
          <div className="flex-1 flex flex-col h-full bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl shadow-inner overflow-hidden">
            
            {/* Sort Bar */}
            <div className="flex justify-center items-center gap-2 p-2 bg-gradient-to-r from-gray-800 to-gray-700 border-b border-gray-700">
              <label className="text-purple-400 font-semibold" htmlFor="sortSelect">Sort by:</label>
              <select id="sortSelect" value={currentSort} onChange={(e) => setCurrentSort(e.target.value)} className="bg-gray-900 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="date-desc">Date: Newest first</option>
                <option value="date-asc">Date: Oldest first</option>
                <option value="rating-desc">Rating: High to Low</option>
                <option value="rating-asc">Rating: Low to High</option>
              </select>
            </div>

            {/* Reviews List */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {reviews.length === 0 && <p className="text-gray-400 text-center mt-4">No reviews found.</p>}

              {reviews.map((review) => (
                <div key={review.id} className="bg-gray-900 p-5 rounded-xl shadow-md border border-gray-700">
                  <h3 className="font-semibold text-lg">{review.name} <small className="text-gray-400 text-sm">({review.date})</small></h3>
                  <p>Rating: {"⭐".repeat(review.rating)} ({review.rating}/5)</p>
                  <p>{review.comment}</p>
                </div>
              ))}

              {/* Pagination */}
              <div className="flex justify-center gap-4 mt-6">
                <button onClick={() => loadReviews("prev")} className="bg-gray-700 px-4 py-2 rounded-md disabled:opacity-50" disabled={pageStack.length <= 1}>Previous</button>
                <button onClick={() => loadReviews("next")} className="bg-gray-700 px-4 py-2 rounded-md disabled:opacity-50" disabled={reviews.length < reviewsPerPage}>Next</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
