import React from "react";
import Link from "next/link";

const Courses = ({ courses }) => {
  return (
    <div className="">
      {courses.map((course) => (
        <div className="card my-2 p-2 " key={course.id}>
          <h2 className="card-title">{course.title}</h2>
          <small className="text-info font-bold">Level: {course.level}</small>
          <p className="card-text">{course.description}</p>
          <Link href={course.link} target="blank">
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
