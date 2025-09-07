# Minimal LMS System

A **Learning Management System (LMS)** built with **Next.js (TypeScript)**, **Express.js**, and **MongoDB**. This system allows admins to manage courses, modules, and lectures, while users can view courses, watch lectures, download notes, and track their progress.

[Live Demo](https://learning-management-vert.vercel.app/) 
---

## Features

### Admin Dashboard (Authentication Required)
1. **Course Management**
   - Upload courses with Thumbnail, Title, Price, and Description.
   - Edit/Delete courses.
   - Dynamic routing to Module & Lecture Management for each course.

2. **Module & Lecture Management**
   - Add modules with Title and auto-increment Module Number.
   - Add lectures under modules with:
     - Title
     - Video URL (YouTube embedded links)
     - Multiple PDF notes
   - Edit/Delete modules and lectures.
   - Lecture list view with filters by Course and Module.

---

### User Panel
1. **Course Details Page**
   - Display course thumbnail, title, price, and description dynamically.
   - Additional static info sections like reviews and instructor details.

2. **Lecture Page**
   - Expandable modules with numbered lecture lists.
   - Search bar to filter lectures by title.
   - Locked lectures: Sequential unlocking for structured learning.
   - Video streaming via embedded YouTube links.
   - PDF notes: View/download multiple PDFs per lecture.

3. **Progress Tracking**
   - Visual progress bar or checkmarks for completed lectures.

---

## Tech Stack

- **Frontend:** Next.js (TypeScript), Tailwind CSS
- **Backend:** Express.js with MVC architecture
- **Database:** MongoDB (Mongoose ODM)

---

## Installation

### Prerequisites
- Node.js v18+
- npm

### Clone the Repository
```bash
git clone https://github.com/nayeem-miah/learning-management-system.git
cd learning-management-system
