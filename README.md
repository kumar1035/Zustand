# 📚 My Course List (React + Zustand)

A simple course management app built with **React** and **Zustand** for state management.  
This project lets you add, mark as completed, and delete courses — with persistent storage.

---

## 🚀 Features
- **Add new courses** with a simple form.
- **Mark courses as completed** with a checkbox.
- **Delete courses** individually.
- **Persistent state** using Zustand (data remains after refresh).
- **Dynamic styling**:
  - ✅ Completed → Green background
  - ❌ Incomplete → Dark gray background
- Fully component-based architecture.

---

## 🛠 Tech Stack
- **React** – UI library
- **Zustand** – State management
- **CSS** – Styling

---

## 📂 Folder Structure
src/
│
├── app/
│ └── courseStore.jsx # Zustand store
│
├── components/
│ ├── CourseForm.jsx # Add course form
│ └── CourseList.jsx # List of courses with actions
│
├── App.js # Main app container
├── index.js # Entry point
└── App.css / index.css # Styles


---

## ⚡ How It Works
1. **State Management with Zustand**  
   - A central store (`courseStore.jsx`) manages the list of courses and actions (add, delete, toggle completion).
   - Components subscribe to only the parts of the state they need, improving performance.
   
2. **Component Flow**
CourseForm → dispatch addCourse() → Store updates
CourseList → reads courses from Store
Checkbox/Delete Button → dispatch toggleCourse()/removeCourse()


3. **Persistent Storage**
- The store uses Zustand's middleware to store courses in `localStorage`.

---

## 📦 Installation & Setup
```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install

# Start development server
npm start


'''bash

Conclusion – Zustand Overview & Key Takeaways

Zustand is a lightweight, unopinionated state management library for React that makes managing global and component-level state simple and efficient. It is built around React hooks, allowing developers to consume state directly in components without unnecessary boilerplate.

🔹 Why Zustand Works Well

1.Unopinionated – Gives freedom to structure your store as you want, without enforcing strict patterns like Redux.

2.Hooks-based API – Uses React hooks (useStore) for reading and updating state, making it easy and familiar for React developers.

3.Minimal Boilerplate – No need for actions, reducers, or context wrappers; store setup is quick and clean.

4.Performance Friendly – Components only re-render when the part of the state they use changes.

5.Persistent State Support – Can store data in localStorage or sessionStorage for persistence across reloads.
