// Helper function to encode file paths with spaces
const encodePath = (path) => path.replace(/ /g, "%20");

export const ligandWorkspace = {
  title: "Ligand Work-Space",
  subtitle: "Multi-College Learning Management System",
  category: "Production & Client Projects",
  year: "2025 – 2026",
  role: "Full-Stack Developer",
  overview:
    "A production MERN learning management platform serving more than 700 students across multiple colleges. It centralizes attendance, homework, fees, examinations, projects, academic content and administrative operations in one role-aware system.",
  images: [
    "Admin Dashboard",
    "Student Workspace",
    "Attendance & Homework",
    "Examination Module",
    "Fee Management",
    "Project Groups",
  ],
  imagePaths: [
    "/ligand-workspace.jpg",
    "/ligand-workspace.jpg",
    "/ligand-workspace.jpg",
    "/ligand-workspace.jpg",
    "/ligand-workspace.jpg",
    "/ligand-workspace.jpg",
  ],
  features: [
    "700+ students across multiple colleges",
    "Attendance, homework and fee management",
    "Secure examination delivery",
    "College, student and pass-out management",
    "Project groups and academic content distribution",
    "Role-based administrative dashboards",
  ],
  architecture: [
    {
      title: "Frontend",
      text: "React dashboards and role-based academic workflows.",
    },
    {
      title: "Backend",
      text: "Node.js and Express REST services with protected routes.",
    },
    {
      title: "Database",
      text: "MongoDB models and aggregation-driven reporting.",
    },
    { title: "Security", text: "JWT authentication and role authorization." },
    {
      title: "Operations",
      text: "Centralized college, exam, fee and project administration.",
    },
  ],
  challenges: [
    {
      challenge: "Large academic scope",
      solution:
        "Separated features into focused modules with shared authentication and administration.",
    },
    {
      challenge: "Multi-college management",
      solution:
        "Introduced college-aware data and centralized role-based controls.",
    },
  ],
  stack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "REST APIs",
    "Vercel",
  ],
  outcomes: [
    "Delivered a real LMS used by 700+ students.",
    "Implemented production-grade academic and administrative workflows.",
    "Strengthened experience designing large MERN systems.",
  ],
  liveUrl: "https://liganddevelopers.vercel.app",
};

export const ekalavya = {
  title: "Ekalavya",
  subtitle: "Multi-Role Academic Notes Platform",
  category: "Production & Client Projects",
  year: "2025",
  role: "Full-Stack Developer",
  overview:
    "A MERN academic platform connecting students, faculty and administrators through structured digital note distribution. Notes are organized by university, course, semester and subject, with faculty approval and dedicated dashboards for every role.",
  images: [
    "Ekalavya Landing Page",
    "Student Notes Workspace",
    "Faculty Note Editor",
    "Faculty Profile",
    "Academic Management",
    "Admin Dashboard",
  ],
  imagePaths: [
    "/ekalavya.jpg",
    "/ekalavya.jpg",
    "/ekalavya.jpg",
    "/ekalavya.jpg",
    "/ekalavya.jpg",
    "/ekalavya.jpg",
  ],
  features: [
    "Student, Faculty and Admin experiences",
    "Faculty registration and approval workflow",
    "University, course, semester and subject hierarchy",
    "Rich-text note creation with image support",
    "Academic note discovery and distribution",
    "Feedback, contacts and user governance",
  ],
  architecture: [
    {
      title: "Frontend",
      text: "React role-based layouts, routing, dashboards and rich editor.",
    },
    {
      title: "Backend",
      text: "Express REST APIs for users, faculty, notes and academics.",
    },
    {
      title: "Database",
      text: "MongoDB models for users, faculty, notes and academic hierarchy.",
    },
    { title: "Security", text: "JWT and separate role-aware middleware." },
    { title: "Media", text: "Cloudinary-backed image upload workflow." },
  ],
  challenges: [
    {
      challenge: "Academic hierarchy",
      solution:
        "Modeled university → course → semester → subject relationships.",
    },
    {
      challenge: "Faculty trust",
      solution: "Added administrator approval gating before faculty access.",
    },
  ],
  stack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Cloudinary",
    "REST APIs",
  ],
  outcomes: [
    "Built an end-to-end structured note-distribution platform.",
    "Implemented safe multi-role access and faculty governance.",
    "Created reusable academic-management workflows.",
  ],
};

export const cyberAttackPredictor = {
  title: "Cyber Attack Predictor",
  subtitle: "Machine Learning Security Platform",
  category: "Full-Stack & AI Projects",
  year: "2025",
  role: "ML & Full-Stack Developer",
  overview:
    "A machine-learning security system trained on a 150 MB dataset with nearly 800,000 network records and 40 security attributes. It analyzes network and website parameters to identify malicious activity and abnormal account behavior.",
  images: [
    "Threat Analysis Dashboard",
    "Network Parameter Form",
    "Prediction Result",
    "Security Alerts",
    "Account Review",
    "Model Evaluation",
  ],
  imagePaths: [
    "/projects/cyberAttackPredictor/main.png",
    "/projects/cyberAttackPredictor/home.png",
    "/projects/cyberAttackPredictor/Data%20StoreRetrievalUpdate.png",
    encodePath("/projects/cyberAttackPredictor/on screen Data Report.png"),
    encodePath("/projects/cyberAttackPredictor/On-Screen Reports (2).png"),
    "/projects/cyberAttackPredictor/view.png",
  ],
  features: [
    "Analysis of 40 network and website parameters",
    "Real-time Flask prediction API",
    "React-based monitoring dashboard",
    "Repeated failed-login detection",
    "Suspicious IP-change monitoring",
    "Abnormal download detection and admin reactivation",
  ],
  architecture: [
    {
      title: "Interface",
      text: "React dashboard for input, results and security alerts.",
    },
    {
      title: "API",
      text: "Flask endpoints prepare features and invoke the model.",
    },
    {
      title: "Model",
      text: "Scikit-learn estimator trained on large network data.",
    },
    {
      title: "Protection",
      text: "Anomaly rules block suspicious accounts for review.",
    },
  ],
  challenges: [
    {
      challenge: "Large dataset",
      solution:
        "Prepared and optimized almost 800,000 structured traffic records.",
    },
    {
      challenge: "Actionable security",
      solution:
        "Combined predictions with account-level anomaly rules and moderation.",
    },
  ],
  stack: [
    "Python",
    "Scikit-learn",
    "Flask",
    "React.js",
    "Machine Learning",
    "Cybersecurity",
  ],
  outcomes: [
    "Built a full ML pipeline from dataset to user-facing prediction.",
    "Applied anomaly detection to practical account-protection scenarios.",
    "Improved experience connecting Python models with React applications.",
  ],
};

export const morseSecurity = {
  title: "Morse Security",
  subtitle: "Secure Role-Based File Sharing",
  category: "Full-Stack & AI Projects",
  year: "2025",
  role: "Full-Stack Developer",
  overview:
    "A MERN secure file-sharing platform for Guest, User and Admin roles. It combines JWT authentication, custom Morse-code password rules, email delivery, access auditing and defensive controls for repeated decryption failures.",
  images: [
    "Secure Landing Page",
    "Login Interface",
    "Navigation Menu",
    "Security Alert Notification",
    "Alert Confirmation",
    "Error Handling",
    "Data Storage & Retrieval",
    "On-Screen Data Reports",
    "On-Screen Report View",
    "Input Validation",
    "File View Interface",
  ],
  imagePaths: [
    "/projects/morse_security/home.png",
    "/projects/morse_security/login.png",
    "/projects/morse_security/menu.png",
    "/projects/morse_security/alert.png",
    "/projects/morse_security/alert1.png",
    "/projects/morse_security/error.png",
    "/projects/morse_security/Data%20StoreRetrievalUpdate.png",
    "/projects/morse_security/onscreenDataReports.png",
    "/projects/morse_security/onscreenReport.png",
    "/projects/morse_security/validation.png",
    "/projects/morse_security/view.png",
  ],
  features: [
    "Guest, User and Admin roles",
    "JWT-protected file operations",
    "Password-protected file sharing",
    "Custom Morse-code encoding rules",
    "Email-based password delivery",
    "Access auditing and temporary account bans",
  ],
  architecture: [
    { title: "Frontend", text: "React file-sharing and decryption workflows." },
    {
      title: "Backend",
      text: "Express APIs for files, users and access validation.",
    },
    {
      title: "Database",
      text: "MongoDB stores accounts, files and audit history.",
    },
    {
      title: "Security",
      text: "JWT, custom encoded passwords and failure controls.",
    },
  ],
  challenges: [
    {
      challenge: "Secure sharing",
      solution:
        "Required encoded passwords delivered through a separate email channel.",
    },
    {
      challenge: "Repeated failures",
      solution:
        "Audited access attempts and temporarily banned suspicious accounts.",
    },
  ],
  stack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Email",
    "Security",
  ],
  outcomes: [
    "Built security-focused multi-role workflows.",
    "Combined file access, notifications and audit controls.",
    "Explored custom encoding as an additional sharing layer.",
  ],
};

export const potholeDetection = {
  title: "Pothole Detection",
  subtitle: "YOLO-Powered Road Damage Detection",
  category: "Full-Stack & AI Projects",
  year: "2025",
  role: "Machine Learning Developer",
  overview:
    "A Flask and YOLO application that detects potholes from uploaded road images and live webcam video. It validates incoming images, performs model inference, counts detections and returns annotated results through a responsive browser interface.",
  images: [
    "Detection Home Page",
    "System Interface",
    "Detection Gallery",
    "Detection Result",
    "Live Webcam Detection",
    "Detection Count",
  ],
  imagePaths: [
    "/projects/pathhole/home.png",
    "/projects/pathhole/system.png",
    "/projects/pathhole/gallery.png",
    "/projects/pathhole/result.png",
    "/projects/pathhole/gallery.png",
    "/projects/pathhole/result.png",
  ],
  features: [
    "YOLO pothole detection model",
    "Uploaded-image validation and inference",
    "Annotated prediction output",
    "Pothole detection count",
    "Live webcam frame processing",
    "MJPEG result streaming to the browser",
  ],
  architecture: [
    {
      title: "Interface",
      text: "Flask templates provide image upload and webcam controls.",
    },
    {
      title: "Inference",
      text: "Ultralytics YOLO loads once and processes images and frames.",
    },
    {
      title: "Vision",
      text: "OpenCV captures video and encodes annotated JPEG frames.",
    },
    {
      title: "Results",
      text: "Unique uploads and predicted images are served from static storage.",
    },
  ],
  challenges: [
    {
      challenge: "Reliable image loading",
      solution: "Used OpenCV first with a PIL fallback for unreadable formats.",
    },
    {
      challenge: "Live detection",
      solution:
        "Processed webcam frames continuously and streamed annotated MJPEG output.",
    },
  ],
  stack: [
    "Python",
    "Flask",
    "YOLO",
    "Ultralytics",
    "OpenCV",
    "NumPy",
    "Pillow",
  ],
  outcomes: [
    "Implemented image and real-time webcam detection.",
    "Connected YOLO inference to an accessible web interface.",
    "Learned model serving, frame annotation and video streaming.",
  ],
};

export const quickFix = {
  title: "Quick Fix",
  subtitle: "Emergency Vehicle Support Platform",
  category: "Full-Stack & AI Projects",
  year: "2025",
  role: "Full-Stack Developer",
  overview:
    "A full-stack MERN platform connecting users with nearby mechanic shops for emergency vehicle support, service bookings and shop-owner operations. It combines secure multi-role access, geospatial discovery, booking lifecycle automation, uploads and email communication.",
  images: [
    "Landing Page / Hero",
    "User Workspace",
    "Nearby Mechanic Discovery",
    "Booking History",
    "Shop Owner Profile",
    "Admin Approval & Management",
  ],
  imagePaths: [
    "/projects/quickfix/home.png",
    "/projects/quickfix/login.png",
    "/projects/quickfix/Data%20StoreRetrievalUpdate.png",
    encodePath("/projects/quickfix/on screen Data Report.png"),
    "/projects/quickfix/onscreenReports.png",
    "/projects/quickfix/view.png",
  ],
  features: [
    "Guest, User, ShopOwner and Admin experiences",
    "Email verification and password recovery",
    "Shop-owner approval workflow",
    "Geo-near mechanic discovery",
    "Complete booking status lifecycle",
    "Replacement and no-response automation",
    "Payment-proof upload and Razorpay initiation",
    "Map-assisted shop-owner booking dashboard",
  ],
  architecture: [
    {
      title: "Frontend",
      text: "React Router, Axios, Bootstrap, Styled Components, motion and Leaflet.",
    },
    {
      title: "Backend",
      text: "Node.js and Express APIs for authentication, shops, bookings and admin.",
    },
    {
      title: "Database",
      text: "MongoDB, Mongoose and 2dsphere geospatial indexing.",
    },
    {
      title: "Media",
      text: "Multer handles profiles, shop images and payment screenshots.",
    },
    {
      title: "Automation",
      text: "node-cron and Nodemailer monitor bookings and send emails.",
    },
    {
      title: "Security",
      text: "bcrypt hashing and JWT bearer-token protection.",
    },
  ],
  challenges: [
    {
      challenge: "Nearby matching",
      solution:
        "Used 2dsphere indexing and $geoNear queries with stored coordinates.",
    },
    {
      challenge: "Booking conflicts",
      solution:
        "Marked recent conflicting bookings as Replaced and notified shops.",
    },
    {
      challenge: "Stalled requests",
      solution:
        "Scheduled monitoring detects long-pending bookings and emails users.",
    },
  ],
  stack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Leaflet",
    "Multer",
    "Nodemailer",
    "node-cron",
    "Razorpay",
  ],
  outcomes: [
    "Built a practical service-dispatch platform.",
    "Delivered multi-role, location-aware booking orchestration.",
    "Strengthened geospatial MongoDB and modular Express skills.",
  ],
};

export const letMySpace = {
  title: "LetMySpace",
  subtitle: "Full-Stack Real Estate Platform",
  category: "Selected Projects",
  year: "2025",
  role: "BCA Final-Year Team Project · 3 Members",
  overview:
    "A responsive MERN real-estate platform developed as a three-member BCA final-year project. It enables users to browse, list, search and manage properties with complete workflows, image handling, filtering and dashboards.",
  images: [
    "Real Estate Landing Page",
    "Property Listings",
    "Advanced Search & Filters",
    "Property Details",
    "Add Property",
    "Management Dashboard",
  ],
  imagePaths: [
    encodePath("/projects/letmyspace/Screenshot 2025-10-16 202427.png"),
    encodePath("/projects/letmyspace/Screenshot 2025-10-16 203321.png"),
    encodePath("/projects/letmyspace/Screenshot 2025-10-18 124149.png"),
    encodePath("/projects/letmyspace/Screenshot 2025-10-18 124747.png"),
    encodePath("/projects/letmyspace/Screenshot 2025-10-18 124757.png"),
    encodePath("/projects/letmyspace/Screenshot 2025-10-18 124828.png"),
  ],
  features: [
    "Property browsing and search",
    "Listing creation and management",
    "Advanced property filters",
    "Image upload workflow",
    "Responsive user dashboards",
    "Support for 500+ managed properties",
  ],
  architecture: [
    {
      title: "Frontend",
      text: "React property discovery, forms and responsive dashboards.",
    },
    { title: "Backend", text: "Node.js and Express property-management APIs." },
    {
      title: "Database",
      text: "MongoDB stores users, listings and property information.",
    },
    { title: "Media", text: "Image uploads enrich property listings." },
  ],
  challenges: [
    {
      challenge: "Large listing workflows",
      solution: "Created reusable forms, filters and management operations.",
    },
    {
      challenge: "Team delivery",
      solution:
        "Coordinated features and integrations across a three-member team.",
    },
  ],
  stack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Cloudinary",
    "REST APIs",
  ],
  outcomes: [
    "Completed an end-to-end BCA final-year team project.",
    "Supported workflows for more than 500 properties.",
    "Improved property-management efficiency by approximately 25%.",
  ],
};

export const fridayChromeExtension = {
  title: "Friday AI Chrome Extension",
  subtitle: "Gemini-Powered New-Tab Assistant",
  category: "Independent Projects",
  year: "2026",
  role: "Independent Developer",
  overview:
    "A Chrome Manifest V3 new-tab extension combining a premium productivity dashboard with Gemini streaming chat and Gemini Live native-audio conversations. It retains conversations and preferences locally while providing quick access to everyday tools.",
  images: [
    "New-Tab Dashboard",
    "Gemini Chat Panel",
    "Settings Interface",
    "Settings Configuration",
    "Keyboard Shortcuts",
    "Task Management",
  ],
  imagePaths: [
    "/projects/friday_extension/home.png",
    "/projects/friday_extension/chat.png",
    "/projects/friday_extension/settings.png",
    "/projects/friday_extension/settings2.png",
    "/projects/friday_extension/shortcuts.png",
    "/projects/friday_extension/tasks.png",
  ],
  features: [
    "Chrome new-tab replacement",
    "Gemini 2.5 streaming text chat",
    "Gemini Live continuous voice interaction",
    "AudioWorklet PCM microphone capture",
    "Conversation history management",
    "Quick notes, shortcuts and focus tools",
    "Personalization and theme settings",
    "Chrome Storage persistence",
  ],
  architecture: [
    {
      title: "Extension UI",
      text: "HTML, CSS and JavaScript packaged for Manifest V3.",
    },
    {
      title: "Text AI",
      text: "Gemini REST streaming with structured conversation context.",
    },
    {
      title: "Voice AI",
      text: "Gemini Live WebSocket and native generated audio.",
    },
    {
      title: "Audio",
      text: "Web Audio API and AudioWorklet capture PCM microphone chunks.",
    },
    {
      title: "Storage",
      text: "Chrome Storage preserves settings and conversations.",
    },
  ],
  challenges: [
    {
      challenge: "Continuous voice",
      solution:
        "Streamed PCM microphone chunks and scheduled model audio playback.",
    },
    {
      challenge: "Extension constraints",
      solution:
        "Designed within Manifest V3 permissions and extension-page security rules.",
    },
  ],
  stack: [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Manifest V3",
    "Gemini 2.5",
    "Gemini Live",
    "Web Audio API",
    "AudioWorklet",
    "Chrome Storage",
  ],
  outcomes: [
    "Built text and natural-audio AI inside a browser extension.",
    "Created a complete customizable productivity new tab.",
    "Learned real-time audio pipelines and extension security constraints.",
  ],
};

export const fridayAIAssistant = {
  title: "Friday AI Assistant",
  subtitle: "Memory, Voice & Computer-Vision Assistant",
  category: "Independent Projects",
  year: "2025 – Present",
  role: "Independent Developer",
  overview:
    "A full-stack AI assistant for streamed conversation, contextual memory, voice interaction and visual awareness. It connects a React desktop interface, Node.js orchestration layer, MongoDB memory and a Python machine-learning service.",
  images: [
    "Friday Home & Greeting",
    "Home Result View",
    "My Information",
    "Personal Details",
    "Online Info Search",
    "Chat Response",
  ],
  imagePaths: [
    "/projects/friday/home.png",
    "/projects/friday/homeresult.png",
    "/projects/friday/myinfo.png",
    "/projects/friday/myinfo2.png",
    "/projects/friday/onlineinfogoogle.png",
    "/projects/friday/responsechat.png",
  ],
  features: [
    "Streaming AI conversations",
    "Persistent conversation sessions",
    "Long-term semantic memory",
    "Context-aware prompt generation",
    "Voice input and audio responses",
    "Configurable answer lengths",
    "Live face and emotion detection",
    "Proactive visual observations",
  ],
  architecture: [
    { title: "Frontend", text: "React and Vite desktop assistant interface." },
    {
      title: "Orchestration",
      text: "Node and Express coordinate chat, memory, voice and vision.",
    },
    {
      title: "Memory",
      text: "MongoDB stores conversations and extracted memories.",
    },
    {
      title: "ML Service",
      text: "Python and Flask serve face and emotion inference.",
    },
    { title: "Vision", text: "SCRFD, FERPlus, OpenCV and ONNX Runtime." },
  ],
  challenges: [
    {
      challenge: "Context continuity",
      solution: "Combined saved sessions with extracted semantic memories.",
    },
    {
      challenge: "Visual awareness",
      solution:
        "Added a separate real-time ML service and proactive vision state.",
    },
  ],
  stack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "Flask",
    "Groq API",
    "OpenCV",
    "ONNX Runtime",
    "SCRFD",
    "FERPlus",
  ],
  outcomes: [
    "Integrated AI chat, memory, voice and vision in one product.",
    "Built multi-service JavaScript and Python architecture.",
    "Gained practical experience serving real-time ML inference.",
  ],
};

export const mlDatasetCollector = {
  title: "ML Dataset Collector",
  subtitle: "Image Capture & Augmentation Utility",
  category: "Independent Projects",
  year: "2026",
  role: "Independent Developer",
  overview:
    "A focused utility for collecting labeled image datasets for machine-learning experiments. Users enter a class label and target image count, choose augmentation operations and capture consistent training samples directly from a camera.",
  images: [
    "Dataset Collector Home",
    "Label & Image Count",
    "Camera Capture",
    "Augmentation Options",
    "Capture Progress",
    "Generated Dataset",
  ],
  imagePaths: [
    "/projects/DatasetCollector/home.png",
    "/projects/DatasetCollector/images.png",
    "/projects/DatasetCollector/home.png",
    "/projects/DatasetCollector/images.png",
    "/projects/DatasetCollector/home.png",
    "/projects/DatasetCollector/images.png",
  ],
  features: [
    "Custom class-label entry",
    "Configurable image count",
    "Live camera capture",
    "Horizontal flip augmentation",
    "Rotation and brightness augmentation",
    "Blur, noise and grayscale options",
  ],
  architecture: [
    { title: "Input", text: "Label, target count and augmentation settings." },
    {
      title: "Capture",
      text: "Camera frames collected into a class-specific dataset.",
    },
    {
      title: "Augmentation",
      text: "Selected transformations create more varied samples.",
    },
    {
      title: "Output",
      text: "Organized images ready for ML training workflows.",
    },
  ],
  challenges: [
    {
      challenge: "Dataset variety",
      solution: "Added optional transformations to reduce repetitive samples.",
    },
    {
      challenge: "Repeatable collection",
      solution: "Used explicit labels and target counts for consistent output.",
    },
  ],
  stack: [
    "Python",
    "OpenCV",
    "Computer Vision",
    "Data Augmentation",
    "Machine Learning",
  ],
  outcomes: [
    "Reduced manual effort when collecting labeled images.",
    "Created reusable datasets for vision experiments.",
    "Explored practical augmentation and capture workflows.",
  ],
};

export const codeFusion = {
  title: "CodeFusion",
  subtitle: "Collaborative Browser-Based Coding Platform",
  category: "Full-Stack & AI Projects",
  year: "2026",
  role: "Full-Stack Developer",
  overview:
    "A MERN-based online development platform that provides authenticated project workspaces, browser-based code editing, file management, integrated terminals, project execution, and role-based collaboration. It combines React, Monaco Editor, XTerm, Express APIs, MongoDB and Socket.IO to provide a complete coding environment directly in the browser.",

  images: [
    "CodeFusion Landing Page",
    "User Dashboard",
    "Login Interface",
    "Registration Interface",
    "Project Workspace",
    "File Explorer",
    "Monaco Code Editor",
    "Integrated Terminal",
    "Terminal Tabs",
    "Project Execution & Preview",
    "Collaborator Management",
    "Project Invitations",
    "User Profile",
    "Admin Dashboard",
    "User Management",
    "Feedback Management",
    "Contact Message Management",
    "Validation Interface",
    "Alert Notification",
    "Error Handling",
    "Data Storage & Retrieval",
    "On-Screen Reports",
    "View Interface",
  ],

  imagePaths: [
    "/projects/codefusion/home.png",
    "/projects/codefusion/menu.png",
    "/projects/codefusion/login.png",
    encodePath("/projects/codefusion/register (2).png"),
    "/projects/codefusion/view.png",
    "/projects/codefusion/Data%20StoreRetrievalUpdate.png",
    encodePath("/projects/codefusion/Data StoreRetrievalUpdate (2).png"),
    encodePath("/projects/codefusion/on screen report.png"),
    encodePath("/projects/codefusion/On-Screen Data Reports.png"),
    encodePath("/projects/codefusion/onscreen Data Report.png"),
    "/projects/codefusion/alert.png",
    encodePath("/projects/codefusion/alert (2).png"),
    "/projects/codefusion/validation.png",
    "/projects/codefusion/error.png",
    "/projects/codefusion/view.png",
    "/projects/codefusion/Data%20StoreRetrievalUpdate.png",
    encodePath("/projects/codefusion/Data StoreRetrievalUpdate (2).png"),
    "/projects/codefusion/validation.png",
    "/projects/codefusion/alert.png",
    "/projects/codefusion/error.png",
    "/projects/codefusion/Data%20StoreRetrievalUpdate.png",
    encodePath("/projects/codefusion/On-Screen Data Reports.png"),
    "/projects/codefusion/view.png",
  ],

  features: [
    "JWT authentication using secure httpOnly cookies",
    "Guest, User and Admin role-based access",
    "Browser-based Monaco code editor",
    "Syntax highlighting for multiple programming languages",
    "Integrated XTerm terminal",
    "File and folder creation, editing, renaming and deletion",
    "Project execution through backend APIs",
    "Live terminal logs and application preview",
    "Multiple terminal tabs and working directories",
    "Project collaboration with Editor and Viewer roles",
    "Email-based project invitations",
    "Collaborator role management",
    "Project invitation acceptance, decline and revocation",
    "User profile and profile-picture management",
    "Admin user, feedback and contact management",
    "Light and dark theme support",
  ],

  architecture: [
    {
      title: "Frontend",
      text: "React with Vite provides the application interface, routing, dashboards, project workspace and authenticated user experiences.",
    },
    {
      title: "Code Editor",
      text: "Monaco Editor powers the browser-based IDE with language detection, syntax highlighting, editing and Ctrl/Cmd + S save support.",
    },
    {
      title: "Terminal",
      text: "XTerm provides an integrated browser terminal with shell and npm workflows, terminal tabs, working directories and command output.",
    },
    {
      title: "Backend",
      text: "Express.js exposes APIs for authentication, projects, files, rooms, collaboration, terminal execution, feedback and administration.",
    },
    {
      title: "Database",
      text: "MongoDB with Mongoose stores users, projects, files, collaborators, invitations, feedback and contact messages.",
    },
    {
      title: "Authentication",
      text: "JWT authentication is stored in httpOnly cookies, with middleware and role checks protecting authenticated and administrative operations.",
    },
    {
      title: "Realtime & Execution",
      text: "Socket.IO and backend execution services support realtime filesystem workflows, terminal processes, logs and project execution.",
    },
  ],

  challenges: [
    {
      challenge: "Building a browser-based development environment",
      solution:
        "Integrated Monaco Editor with a project file tree, language detection, file operations and save workflows to provide an IDE-like coding experience.",
    },
    {
      challenge: "Integrated terminal execution",
      solution:
        "Connected XTerm-based terminal interfaces with backend execution APIs to run npm commands, manage working directories and display process logs.",
    },
    {
      challenge: "Project collaboration",
      solution:
        "Implemented project owners, Editor and Viewer roles, collaborator invitations, role changes, removals and invitation lifecycle management.",
    },
    {
      challenge: "Secure project access",
      solution:
        "Used authenticated APIs and project-access checks so project operations and collaboration features are restricted according to the user's permissions.",
    },
    {
      challenge: "Managing project files",
      solution:
        "Created backend filesystem APIs for listing, reading, writing, creating, deleting, renaming and organizing project files and directories.",
    },
    {
      challenge: "Role-based application management",
      solution:
        "Separated Guest, User and Admin experiences with protected routes and dedicated administrative dashboards for users, feedback and contact messages.",
    },
  ],

  stack: [
    "React.js",
    "Vite",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Monaco Editor",
    "XTerm",
    "Socket.IO",
    "Axios",
    "Tailwind CSS",
    "Cloudinary",
    "Nodemailer",
  ],

  outcomes: [
    "Built a complete browser-based coding workspace using the MERN stack.",
    "Implemented project-based file and folder management.",
    "Integrated Monaco Editor for multi-language code editing.",
    "Added an interactive terminal with command execution and logs.",
    "Implemented project collaboration with Editor and Viewer permissions.",
    "Built invitation workflows for adding collaborators to projects.",
    "Implemented secure JWT authentication with role-based access control.",
    "Created dedicated user and administrator dashboards.",
  ],
};
export const mernCraft = {
  title: "MernCraft",
  subtitle: "Production-Ready MERN Scaffolding CLI",
  category: "Independent Projects",
  year: "2025 – Present",
  role: "NPM Package Developer",
  overview:
    "An open-source CLI tool that scaffolds production-ready React and MERN applications in one command. It generates complete frontend layouts, authentication systems, admin dashboards, and backend APIs with customizable themes, UI frameworks, and integrated services like email and Cloudinary.",
  images: [
    "MernCraft Home Page",
    "Hero Section",
    "About Page",
    "Login & Signup",
    "Profile Page",
    "Cursor Trail Feature",
  ],
  imagePaths: [
    "/projects/merncraft/heropage.png",
    "/projects/merncraft/home.png",

    "/projects/merncraft/loginsignup.png",
    "/projects/merncraft/about.png",

    "/projects/merncraft/cursortrail.png",
    "/projects/merncraft/profile.png",
  ],
  features: [
    "One-command project scaffolding",
    "React and MERN project types",
    "Tailwind CSS or Bootstrap 5 support",
    "Dark, Light, or Both theme modes",
    "5 preset color palettes + custom colors",
    "Complete authentication system with JWT",
    "Role-based access (Guest, User, Admin)",
    "Email service integration (Nodemailer)",
    "Cloudinary file upload support",
    "Admin dashboard with user management",
    "Feedback and contact management systems",
    "Responsive layouts for all pages",
  ],
  architecture: [
    {
      title: "CLI Interface",
      text: "Inquirer.js provides interactive prompts for project configuration, color selection, and feature toggles.",
    },
    {
      title: "Template Engine",
      text: "Dynamic file generation creates complete React components, Express routes, MongoDB models, and configuration files based on user choices.",
    },
    {
      title: "Frontend Generation",
      text: "Generates Vite-based React apps with routing, layouts, authentication pages, dashboards, and theme systems.",
    },
    {
      title: "Backend Generation",
      text: "Creates Express servers with MongoDB models, JWT authentication, role-based middleware, and REST APIs.",
    },
    {
      title: "Integration Layer",
      text: "Optional integrations include Nodemailer for emails, Cloudinary for uploads, and Socket.IO for real-time features.",
    },
  ],
  challenges: [
    {
      challenge: "Dynamic file generation",
      solution:
        "Built a template system that generates files based on user configuration, handling conditional content for different project types and features.",
    },
    {
      challenge: "Theme customization",
      solution:
        "Implemented CSS variable-based theming with preset palettes and custom color support for dark, light, and toggle modes.",
    },
    {
      challenge: "MERN integration",
      solution:
        "Created seamless frontend-backend integration with axios config, auth context, and protected routes.",
    },
    {
      challenge: "NPM packaging",
      solution:
        "Packaged as an executable CLI with proper bin configuration, making it available globally via npm install.",
    },
  ],
  stack: [
    "Node.js",
    "Inquirer.js",
    "React",
    "Vite",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Nodemailer",
    "Cloudinary",
    "Tailwind CSS",
    "Bootstrap 5",
  ],
  outcomes: [
    "Published as an npm package for global use",
    "Reduces project setup time from hours to minutes",
    "Generates production-ready code with best practices",
    "Supports both frontend-only and full-stack projects",
    "Includes complete authentication and authorization",
    "Provides customizable themes and UI frameworks",
    "Open-source with MIT license for community use",
  ],
};