import { create } from "zustand";

const useCourseStore = create((set) => ({
  courses: [],
  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, course],
    })),
  removeCourse: (id) =>
    set((state) => ({
      courses: state.courses.filter((course) => course.id !== id),
    })),
  toggleCourseStatus: (id) =>
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === id
          ? { ...course, completed: !course.completed }
          : course
      ),
    })),
}));

export default useCourseStore;
