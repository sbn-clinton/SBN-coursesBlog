import { useState } from "react";

const CourseSearch = ({ getSearchResult }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your search logic here
    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses = await res.json();
    getSearchResult(courses);
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline">
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search Courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default CourseSearch;
