"use client";
import { useState, useEffect } from "react";
import LoadingPage from "./loading";
import React from "react";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="mb-5">
      <h1> Welcome To SBN-cyberTech</h1>
      <CourseSearch getSearchResult={(result) => setCourses(result)} />
      <Courses courses={courses} />
    </div>
  );
};

export default Home;
