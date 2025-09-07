import React from "react";
import useCourseStore from "../app/courseStore";

const CourseList = () => {
  const courses = useCourseStore((state) => state.courses);
  const removeCourse = useCourseStore((state) => state.removeCourse);
  const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus);

  if (!courses.length) {
    return <p>No courses available. Add one!</p>;
  }

  return (
    <ul>
      {courses.map((course) => (
        <li
          key={course.id}
          className="course-item"
          style={{
            backgroundColor: course.completed ? "#00ff00" : "#1e1e1e",
            color: course.completed ? "black" : "white",
          }}
        >
          <span className="course-item-col-1">
            <input
              checked={course.completed}
              type="checkbox"
              onChange={() => toggleCourseStatus(course.id)}
            />
          </span>
          <span>{course.title}</span>
          <button
            onClick={() => removeCourse(course.id)}
            className="delete-btn"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
