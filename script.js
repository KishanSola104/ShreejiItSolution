// script.js

// Filtering
document.getElementById('techFilter').addEventListener('change', function () {
  const selected = this.value;
  const rows = document.querySelectorAll('#projectTable tr');

  rows.forEach(row => {
    const tags = row.getAttribute('data-tags');
    if (selected === 'all' || tags.includes(selected)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});

// Modal Show Function
function showDetails(title, description, techs) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDescription').innerText = description;
  document.getElementById('modalTech').innerText = techs;
  document.getElementById('modal').classList.remove('hidden');
}

// Modal Close
document.getElementById('closeBtn').addEventListener('click', function () {
  document.getElementById('modal').classList.add('hidden');
});

// Close modal on outside click
window.addEventListener('click', function (e) {
  const modal = document.getElementById('modal');
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});



//Project Definations

const projects = [
  {
    title: "Hotel Management System",
    description: "A system to manage hotel booking, rooms, and customer records.",
    technologies: ["ASP.NET", "PHP", "Python"]
  },
  {
    title: "Online Namkeen Shop",
    description: "An e-commerce system to sell namkeen products online.",
    technologies: ["PHP", "Python", "ASP.NET"]
  },
  {
    title: "Student Attendance System",
    description: "Track student attendance for classes with login roles.",
    technologies: ["ASP.NET", "VB.NET"]
  },
  {
    title: "Online Book Store",
    description: "A modern bookstore system with cart and order features.",
    technologies: ["MERN Stack", "Python"]
  },
  {
    title: "Hostel Management System",
    description: "A web system to manage hostels and student entries.",
    technologies: ["ASP.NET", "PHP"]
  },
  {
    title: "Online Examination System",
    description: "Conduct exams online with automatic result generation.",
    technologies: ["ASP.NET", "MERN Stack"]
  },
  {
    title: "Library Management System",
    description: "Manage books, issue and return with fine calculation.",
    technologies: ["PHP", "VB.NET"]
  },
  {
    title: "Job Portal Website",
    description: "Platform for job seekers and employers to connect.",
    technologies: ["MERN Stack", "Python"]
  },
  {
    title: "E-Learning Platform",
    description: "Online platform for courses and video lectures.",
    technologies: ["PHP", "Python"]
  },
  {
    title: "Inventory Management System",
    description: "Manage stock and product details for small businesses.",
    technologies: ["ASP.NET", "VB.NET"]
  },
  {
    title: "Online Food Ordering System",
    description: "Order food online from local restaurants.",
    technologies: ["MERN Stack", "PHP"]
  },
  {
    title: "Expense Tracker",
    description: "Track personal expenses and generate monthly reports.",
    technologies: ["Python", "ASP.NET"]
  },
  {
    title: "Weather Forecast Application",
    description: "Display weather info based on user location.",
    technologies: ["MERN Stack", "Python"]
  },
  {
    title: "Online Voting System",
    description: "Secure online platform for elections.",
    technologies: ["ASP.NET", "VB.NET"]
  },
  {
    title: "Social Media Website",
    description: "Basic platform to post updates and interact with friends.",
    technologies: ["MERN Stack", "PHP"]
  },
  {
    title: "Car Rental System",
    description: "Rent cars online with booking and payment.",
    technologies: ["ASP.NET", "Python"]
  },
  {
    title: "Online Ticket Booking",
    description: "Book movie or travel tickets online.",
    technologies: ["PHP", "MERN Stack"]
  },
  {
    title: "Clinic Management System",
    description: "Manage patient records and appointments.",
    technologies: ["VB.NET", "ASP.NET"]
  },
  {
    title: "Real Estate Listing Site",
    description: "List properties for sale or rent.",
    technologies: ["MERN Stack", "PHP"]
  },
  {
    title: "Personal Portfolio Website",
    description: "Showcase personal projects and resume.",
    technologies: ["MERN Stack", "Python"]
  },
  {
    title: "Online Grocery Store",
    description: "E-commerce site for grocery items.",
    technologies: ["PHP", "ASP.NET"]
  },
  {
    title: "Fitness Tracker App",
    description: "Track workouts and fitness goals.",
    technologies: ["Python", "MERN Stack"]
  },
  {
    title: "Blogging Platform",
    description: "Create, edit, and publish blog posts.",
    technologies: ["PHP", "VB.NET"]
  },
  {
    title: "Courier Management System",
    description: "Track and manage courier deliveries.",
    technologies: ["ASP.NET", "Python"]
  },
  {
    title: "Online Resume Builder",
    description: "Create and download professional resumes.",
    technologies: ["MERN Stack", "PHP"]
  },
  {
    title: "Blood Bank Management System",
    description: "Manage blood donors and requests.",
    technologies: ["ASP.NET", "Python"]
  },
  {
    title: "Online Auction System",
    description: "Bid on products in an online auction.",
    technologies: ["PHP", "MERN Stack"]
  },
  {
    title: "Travel Agency Website",
    description: "Book tours and travel packages online.",
    technologies: ["VB.NET", "ASP.NET"]
  },
  {
    title: "Chat Application",
    description: "Real-time text messaging app.",
    technologies: ["MERN Stack", "Python"]
  },
  {
    title: "Online Quiz Application",
    description: "Create and take quizzes online.",
    technologies: ["PHP", "ASP.NET"]
  },
  {
    title: "Inventory Billing System",
    description: "Manage product billing and invoices.",
    technologies: ["VB.NET", "Python"]
  },
  {
    title: "Event Management System",
    description: "Organize and manage events and registrations.",
    technologies: ["MERN Stack", "PHP"]
  },
  {
    title: "E-Waste Management System",
    description: "Track and manage e-waste collection.",
    technologies: ["Python", "ASP.NET"]
  },
  {
    title: "School Management System",
    description: "Manage students, teachers, and classes.",
    technologies: ["PHP", "VB.NET"]
  },
  {
    title: "Online Pharmacy",
    description: "Order medicines online with prescriptions.",
    technologies: ["MERN Stack", "ASP.NET"]
  },
  {
    title: "Weather Alert System",
    description: "Notify users about severe weather conditions.",
    technologies: ["Python", "PHP"]
  },
  {
    title: "Online Donation Platform",
    description: "Collect and manage charitable donations.",
    technologies: ["ASP.NET", "MERN Stack"]
  },
  {
    title: "Recipe Sharing Website",
    description: "Share and browse cooking recipes.",
    technologies: ["PHP", "Python"]
  },
  {
    title: "Task Management System",
    description: "Create and assign tasks with deadlines.",
    technologies: ["MERN Stack", "VB.NET"]
  },
  {
    title: "Online Learning Management System",
    description: "Manage courses, students, and assessments.",
    technologies: ["ASP.NET", "PHP"]
  },
  {
    title: "Complaint Management System",
    description: "Register and track complaints.",
    technologies: ["VB.NET", "Python"]
  },
  {
    title: "Library Book Reservation",
    description: "Reserve books online before pickup.",
    technologies: ["PHP", "MERN Stack"]
  },
  {
    title: "Online Banking System",
    description: "Basic online banking operations.",
    technologies: ["ASP.NET", "Python"]
  },
  {
    title: "Digital Notice Board",
    description: "Display notices and announcements online.",
    technologies: ["MERN Stack", "PHP"]
  },
  {
    title: "Online Survey System",
    description: "Create and analyze surveys.",
    technologies: ["PHP", "VB.NET"]
  },
  {
    title: "Appointment Booking System",
    description: "Book appointments with professionals.",
    technologies: ["ASP.NET", "Python"]
  },
  {
    title: "Online Chatbot",
    description: "Chatbot for customer service support.",
    technologies: ["Python", "MERN Stack"]
  },
  {
    title: "Online Portfolio Builder",
    description: "Build and customize personal portfolios.",
    technologies: ["PHP", "ASP.NET"]
  },
  {
    title: "Blood Donation App",
    description: "Connect donors with recipients.",
    technologies: ["MERN Stack", "Python"]
  },
  {
    title: "Online Food Recipe App",
    description: "Find and share recipes.",
    technologies: ["PHP", "VB.NET"]
  },
  {
    title: "Online Car Service Booking",
    description: "Book vehicle servicing appointments.",
    technologies: ["ASP.NET", "PHP"]
  },
  {
    title: "Movie Recommendation System",
    description: "Suggest movies based on user preferences.",
    technologies: ["Python", "MERN Stack"]
  },
  {
    title: "Online Ticket Reservation System",
    description: "Reserve tickets for events and travel.",
    technologies: ["PHP", "ASP.NET"]
  },
  {
    title: "Weather Information Portal",
    description: "Get detailed weather reports.",
    technologies: ["MERN Stack", "Python"]
  },
  {
    title: "Online Shopping Cart",
    description: "Basic cart system for e-commerce sites.",
    technologies: ["PHP", "VB.NET"]
  },
  {
    title: "Online Exam Proctoring System",
    description: "Monitor exams with webcam and time limits.",
    technologies: ["ASP.NET", "Python"]
  },
  {
    title: "Job Tracking System",
    description: "Track job applications and interviews.",
    technologies: ["MERN Stack", "PHP"]
  },
  {
    title: "Online Music Streaming",
    description: "Stream and create playlists of music.",
    technologies: ["PHP", "Python"]
  },
  {
    title: "Gym Management System",
    description: "Manage gym memberships and attendance.",
    technologies: ["ASP.NET", "VB.NET"]
  },
  {
    title: "Online Event Ticketing",
    description: "Sell tickets for concerts and events.",
    technologies: ["MERN Stack", "PHP"]
  },
  {
    title: "Food Delivery App",
    description: "Order and deliver food locally.",
    technologies: ["Python", "ASP.NET"]
  },
  {
    title: "Online Resume Analyzer",
    description: "Analyze resumes for keywords and skills.",
    technologies: ["PHP", "MERN Stack"]
  },
  {
    title: "Student Portal",
    description: "Access course material and grades.",
    technologies: ["ASP.NET", "Python"]
  },
  {
    title: "Online Complaint Registration",
    description: "Submit and track complaints online.",
    technologies: ["VB.NET", "PHP"]
  },
  {
    title: "Restaurant Management System",
    description: "Manage orders, tables, and billing.",
    technologies: ["MERN Stack", "ASP.NET"]
  },
  {
    title: "Online Appointment Scheduler",
    description: "Schedule appointments with reminders.",
    technologies: ["Python", "PHP"]
  },
  {
    title: "Vehicle Parking System",
    description: "Manage parking lot availability and billing.",
    technologies: ["ASP.NET", "MERN Stack"]
  },
  {
    title: "Online Quiz Maker",
    description: "Create quizzes with timer and results.",
    technologies: ["PHP", "Python"]
  },
  {
    title: "Personal Budget Planner",
    description: "Plan monthly budgets and savings.",
    technologies: ["MERN Stack", "VB.NET"]
  },
  {
    title: "Online Doctor Consultation",
    description: "Consult doctors via video or chat.",
    technologies: ["ASP.NET", "PHP"]
  },
  {
    title: "School Fee Management System",
    description: "Manage student fees and receipts.",
    technologies: ["VB.NET", "Python"]
  },
  {
    title: "Online Store for Handicrafts",
    description: "Sell handmade crafts online.",
    technologies: ["MERN Stack", "PHP"]
  },
  {
    title: "Inventory Barcode System",
    description: "Track products with barcode scanning.",
    technologies: ["ASP.NET", "Python"]
  },
  {
    title: "Online Voting Registration",
    description: "Register voters and check eligibility.",
    technologies: ["PHP", "MERN Stack"]
  },
  {
    title: "Real-Time Chat Room",
    description: "Multi-user chat room with notifications.",
    technologies: ["MERN Stack", "Python"]
  },
  {
    title: "Online Exam Scheduler",
    description: "Schedule exams and notify students.",
    technologies: ["ASP.NET", "PHP"]
  },
  {
    title: "Tourist Guide Website",
    description: "Information and booking for tourist places.",
    technologies: ["VB.NET", "Python"]
  },
  {
    title: "Job Skill Assessment",
    description: "Test and rate skills for job applicants.",
    technologies: ["MERN Stack", "PHP"]
  },
  {
    title: "Online Complaint Tracking",
    description: "Track the status of complaints online.",
    technologies: ["ASP.NET", "Python"]
  },
  {
    title: "Digital Library",
    description: "Access and download e-books.",
    technologies: ["PHP", "MERN Stack"]
  },
   {
    title: "Daily Habit Tracker",
    description: "Users can create and track daily habits with reminders.",
    technologies: ["Python", "MERN Stack"]
  },
  {
    title: "Simple Voting Poll",
    description: "Create and participate in quick polls with real-time results.",
    technologies: ["PHP", "ASP.NET"]
  },
  {
    title: "Book Recommendation System",
    description: "Suggest books based on user interests and ratings.",
    technologies: ["Python", "MERN Stack"]
  },
  {
    title: "Minimal Expense Splitter",
    description: "Split bills and expenses between friends easily.",
    technologies: ["PHP", "ASP.NET"]
  },
  {
    title: "Meditation Timer",
    description: "A timer app with guided meditation sessions.",
    technologies: ["MERN Stack", "Python"]
  },
  {
    title: "Recipe Nutrition Calculator",
    description: "Calculate nutritional values of ingredients in recipes.",
    technologies: ["Python", "PHP"]
  },
  {
    title: "Simple Habit Journal",
    description: "Log daily moods and habits with text entries.",
    technologies: ["ASP.NET", "MERN Stack"]
  },
  {
    title: "Local Events Calendar",
    description: "Users can view and add events happening nearby.",
    technologies: ["PHP", "Python"]
  },
  {
    title: "Pet Adoption Platform",
    description: "List pets available for adoption with contact info.",
    technologies: ["MERN Stack", "PHP"]
  },
  {
    title: "Minimal To-Do List",
    description: "Create, update, and delete tasks with priority tags.",
    technologies: ["ASP.NET", "VB.NET"]
  },
  {
    title: "Simple URL Shortener",
    description: "Generate shortened URLs and track click counts.",
    technologies: ["Python", "MERN Stack"]
  },
  {
    title: "Daily Quote App",
    description: "Display daily motivational quotes with sharing options.",
    technologies: ["PHP", "ASP.NET"]
  },
  {
    title: "Book Club Management",
    description: "Manage book club meetings, members, and reading lists.",
    technologies: ["MERN Stack", "Python"]
  },
  {
    title: "Lost and Found Board",
    description: "Post and find lost or found items locally.",
    technologies: ["PHP", "ASP.NET"]
  },
  {
    title: "Simple Polling App",
    description: "Create multiple-choice polls and view results in charts.",
    technologies: ["MERN Stack", "Python"]
  },
  {
    title: "Plant Care Reminder",
    description: "Schedule watering and care reminders for plants.",
    technologies: ["Python", "ASP.NET"]
  },
  {
    title: "Language Learning Flashcards",
    description: "Create and practice flashcards for new vocabulary.",
    technologies: ["PHP", "MERN Stack"]
  },
  {
    title: "Simple Meditation Tracker",
    description: "Track meditation duration and streaks.",
    technologies: ["ASP.NET", "Python"]
  },
  {
    title: "Neighborhood Help Board",
    description: "Post and request help within a local community.",
    technologies: ["PHP", "MERN Stack"]
  },
  {
    title: "Daily Journal App",
    description: "Write daily journal entries with optional photo uploads.",
    technologies: ["MERN Stack", "Python"]
  },
  {
    title: "Simple Weather Widget",
    description: "Show current weather info for any city.",
    technologies: ["ASP.NET", "Python"]
  },
  {
    title: "Goal Tracker",
    description: "Set personal goals and mark progress over time.",
    technologies: ["PHP", "MERN Stack"]
  },
  {
    title: "Simple Recipe Organizer",
    description: "Save and categorize favorite recipes.",
    technologies: ["MERN Stack", "Python"]
  },
  {
    title: "Mood Tracker App",
    description: "Log daily moods and generate monthly mood charts.",
    technologies: ["ASP.NET", "PHP"]
  },
  {
    title: "Simple Fitness Log",
    description: "Log workout exercises and reps with dates.",
    technologies: ["Python", "MERN Stack"]
  },
  {
    title: "Daily Water Intake Tracker",
    description: "Track daily water consumption with reminders.",
    technologies: ["PHP", "ASP.NET"]
  },
  {
    title: "Simple Expense Splitter for Roommates",
    description: "Split and settle shared expenses between roommates.",
    technologies: ["MERN Stack", "Python"]
  },
  {
    title: "Minimal Event RSVP",
    description: "Invite people to events and track RSVPs.",
    technologies: ["ASP.NET", "PHP"]
  },
  {
    title: "Simple Habit Streak Counter",
    description: "Track how many days a habit is maintained consecutively.",
    technologies: ["Python", "MERN Stack"]
  },
  {
    title: "Flashcard Quiz App",
    description: "Create and take quizzes using flashcards.",
    technologies: ["PHP", "ASP.NET"]
  },
  {
    title: "Simple Donation Tracker",
    description: "Track donations and generate reports for nonprofits.",
    technologies: ["MERN Stack", "Python"]
  },
  {
    title: "Daily Affirmations App",
    description: "Show daily positive affirmations to users.",
    technologies: ["Python", "PHP"]
  }
];



function loadProjects(filter = "all") {
  const tableBody = document.getElementById("projectTable");
  tableBody.innerHTML = ""; // Clear previous rows

  let count = 1;
  projects.forEach((project) => {
    const tags = project.technologies.map(t => t.toLowerCase().replace(/\s+/g, '')).join(" ");

    if (filter === "all" || tags.includes(filter)) {
      const tr = document.createElement("tr");
      tr.setAttribute("data-tags", tags);

      const td1 = document.createElement("td");
      td1.textContent = count++;

      const td2 = document.createElement("td");
      td2.className = "clickable";
      td2.textContent = project.title;
      td2.onclick = () => showDetails(project.title, project.description, project.technologies.join(", "));

      tr.appendChild(td1);
      tr.appendChild(td2);
      tableBody.appendChild(tr);
    }
  });
}


document.getElementById("techFilter").addEventListener("change", function () {
  const filter = this.value.toLowerCase().replace(/\s+/g, '');
  loadProjects(filter);
});


document.addEventListener("DOMContentLoaded", function () {
  loadProjects(); // Load all on start
});
