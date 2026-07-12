export const ligandWorkspace = {
  title:'Ligand Work-Space', subtitle:'Multi-College Learning Management System', category:'Production & Client Projects', year:'2025 – 2026', role:'Full-Stack Developer',
  overview:'A production MERN learning management platform serving more than 700 students across multiple colleges. It centralizes attendance, homework, fees, examinations, projects, academic content and administrative operations in one role-aware system.',
  images:['Admin Dashboard','Student Workspace','Attendance & Homework','Examination Module','Fee Management','Project Groups'],
  features:['700+ students across multiple colleges','Attendance, homework and fee management','Secure examination delivery','College, student and pass-out management','Project groups and academic content distribution','Role-based administrative dashboards'],
  architecture:[{title:'Frontend',text:'React dashboards and role-based academic workflows.'},{title:'Backend',text:'Node.js and Express REST services with protected routes.'},{title:'Database',text:'MongoDB models and aggregation-driven reporting.'},{title:'Security',text:'JWT authentication and role authorization.'},{title:'Operations',text:'Centralized college, exam, fee and project administration.'}],
  challenges:[{challenge:'Large academic scope',solution:'Separated features into focused modules with shared authentication and administration.'},{challenge:'Multi-college management',solution:'Introduced college-aware data and centralized role-based controls.'}],
  stack:['React.js','Node.js','Express.js','MongoDB','JWT','REST APIs','Vercel'], outcomes:['Delivered a real LMS used by 700+ students.','Implemented production-grade academic and administrative workflows.','Strengthened experience designing large MERN systems.'], liveUrl:'https://liganddevelopers.vercel.app'
}

export const ekalavya = {
  title:'Ekalavya', subtitle:'Multi-Role Academic Notes Platform', category:'Production & Client Projects', year:'2025', role:'Full-Stack Developer',
  overview:'A MERN academic platform connecting students, faculty and administrators through structured digital note distribution. Notes are organized by university, course, semester and subject, with faculty approval and dedicated dashboards for every role.',
  images:['Ekalavya Landing Page','Student Notes Workspace','Faculty Note Editor','Faculty Profile','Academic Management','Admin Dashboard'],
  features:['Student, Faculty and Admin experiences','Faculty registration and approval workflow','University, course, semester and subject hierarchy','Rich-text note creation with image support','Academic note discovery and distribution','Feedback, contacts and user governance'],
  architecture:[{title:'Frontend',text:'React role-based layouts, routing, dashboards and rich editor.'},{title:'Backend',text:'Express REST APIs for users, faculty, notes and academics.'},{title:'Database',text:'MongoDB models for users, faculty, notes and academic hierarchy.'},{title:'Security',text:'JWT and separate role-aware middleware.'},{title:'Media',text:'Cloudinary-backed image upload workflow.'}],
  challenges:[{challenge:'Academic hierarchy',solution:'Modeled university → course → semester → subject relationships.'},{challenge:'Faculty trust',solution:'Added administrator approval gating before faculty access.'}],
  stack:['React.js','Node.js','Express.js','MongoDB','Mongoose','JWT','Cloudinary','REST APIs'], outcomes:['Built an end-to-end structured note-distribution platform.','Implemented safe multi-role access and faculty governance.','Created reusable academic-management workflows.']
}

export const cyberAttackPredictor = {
  title:'Cyber Attack Predictor', subtitle:'Machine Learning Security Platform', category:'Full-Stack & AI Projects', year:'2025', role:'ML & Full-Stack Developer',
  overview:'A machine-learning security system trained on a 150 MB dataset with nearly 800,000 network records and 40 security attributes. It analyzes network and website parameters to identify malicious activity and abnormal account behavior.',
  images:['Threat Analysis Dashboard','Network Parameter Form','Prediction Result','Security Alerts','Account Review','Model Evaluation'],
  features:['Analysis of 40 network and website parameters','Real-time Flask prediction API','React-based monitoring dashboard','Repeated failed-login detection','Suspicious IP-change monitoring','Abnormal download detection and admin reactivation'],
  architecture:[{title:'Interface',text:'React dashboard for input, results and security alerts.'},{title:'API',text:'Flask endpoints prepare features and invoke the model.'},{title:'Model',text:'Scikit-learn estimator trained on large network data.'},{title:'Protection',text:'Anomaly rules block suspicious accounts for review.'}],
  challenges:[{challenge:'Large dataset',solution:'Prepared and optimized almost 800,000 structured traffic records.'},{challenge:'Actionable security',solution:'Combined predictions with account-level anomaly rules and moderation.'}],
  stack:['Python','Scikit-learn','Flask','React.js','Machine Learning','Cybersecurity'], outcomes:['Built a full ML pipeline from dataset to user-facing prediction.','Applied anomaly detection to practical account-protection scenarios.','Improved experience connecting Python models with React applications.']
}

export const morseSecurity = {
  title:'Morse Security', subtitle:'Secure Role-Based File Sharing', category:'Full-Stack & AI Projects', year:'2025', role:'Full-Stack Developer',
  overview:'A MERN secure file-sharing platform for Guest, User and Admin roles. It combines JWT authentication, custom Morse-code password rules, email delivery, access auditing and defensive controls for repeated decryption failures.',
  images:['Secure Landing Page','File Upload Workspace','Morse Password Delivery','Local Decryption Utility','Access Audit','Admin Security Panel'],
  features:['Guest, User and Admin roles','JWT-protected file operations','Password-protected file sharing','Custom Morse-code encoding rules','Email-based password delivery','Access auditing and temporary account bans'],
  architecture:[{title:'Frontend',text:'React file-sharing and decryption workflows.'},{title:'Backend',text:'Express APIs for files, users and access validation.'},{title:'Database',text:'MongoDB stores accounts, files and audit history.'},{title:'Security',text:'JWT, custom encoded passwords and failure controls.'}],
  challenges:[{challenge:'Secure sharing',solution:'Required encoded passwords delivered through a separate email channel.'},{challenge:'Repeated failures',solution:'Audited access attempts and temporarily banned suspicious accounts.'}],
  stack:['React.js','Node.js','Express.js','MongoDB','JWT','Email','Security'], outcomes:['Built security-focused multi-role workflows.','Combined file access, notifications and audit controls.','Explored custom encoding as an additional sharing layer.']
}

export const potholeDetection = {
  title:'Pothole Detection', subtitle:'YOLO-Powered Road Damage Detection', category:'Full-Stack & AI Projects', year:'2025', role:'Machine Learning Developer',
  overview:'A Flask and YOLO application that detects potholes from uploaded road images and live webcam video. It validates incoming images, performs model inference, counts detections and returns annotated results through a responsive browser interface.',
  images:['Detection Home Page','Image Upload','Uploaded Road Image','Annotated Detection Result','Live Webcam Detection','Detection Count'],
  features:['YOLO pothole detection model','Uploaded-image validation and inference','Annotated prediction output','Pothole detection count','Live webcam frame processing','MJPEG result streaming to the browser'],
  architecture:[{title:'Interface',text:'Flask templates provide image upload and webcam controls.'},{title:'Inference',text:'Ultralytics YOLO loads once and processes images and frames.'},{title:'Vision',text:'OpenCV captures video and encodes annotated JPEG frames.'},{title:'Results',text:'Unique uploads and predicted images are served from static storage.'}],
  challenges:[{challenge:'Reliable image loading',solution:'Used OpenCV first with a PIL fallback for unreadable formats.'},{challenge:'Live detection',solution:'Processed webcam frames continuously and streamed annotated MJPEG output.'}],
  stack:['Python','Flask','YOLO','Ultralytics','OpenCV','NumPy','Pillow'], outcomes:['Implemented image and real-time webcam detection.','Connected YOLO inference to an accessible web interface.','Learned model serving, frame annotation and video streaming.']
}

export const quickFix = {
  title:'Quick Fix', subtitle:'Emergency Vehicle Support Platform', category:'Full-Stack & AI Projects', year:'2025', role:'Full-Stack Developer',
  overview:'A full-stack MERN platform connecting users with nearby mechanic shops for emergency vehicle support, service bookings and shop-owner operations. It combines secure multi-role access, geospatial discovery, booking lifecycle automation, uploads and email communication.',
  images:['Landing Page / Hero','User Workspace','Nearby Mechanic Discovery','Booking History','Shop Owner Profile','Admin Approval & Management'],
  features:['Guest, User, ShopOwner and Admin experiences','Email verification and password recovery','Shop-owner approval workflow','Geo-near mechanic discovery','Complete booking status lifecycle','Replacement and no-response automation','Payment-proof upload and Razorpay initiation','Map-assisted shop-owner booking dashboard'],
  architecture:[{title:'Frontend',text:'React Router, Axios, Bootstrap, Styled Components, motion and Leaflet.'},{title:'Backend',text:'Node.js and Express APIs for authentication, shops, bookings and admin.'},{title:'Database',text:'MongoDB, Mongoose and 2dsphere geospatial indexing.'},{title:'Media',text:'Multer handles profiles, shop images and payment screenshots.'},{title:'Automation',text:'node-cron and Nodemailer monitor bookings and send emails.'},{title:'Security',text:'bcrypt hashing and JWT bearer-token protection.'}],
  challenges:[{challenge:'Nearby matching',solution:'Used 2dsphere indexing and $geoNear queries with stored coordinates.'},{challenge:'Booking conflicts',solution:'Marked recent conflicting bookings as Replaced and notified shops.'},{challenge:'Stalled requests',solution:'Scheduled monitoring detects long-pending bookings and emails users.'}],
  stack:['React.js','Node.js','Express.js','MongoDB','Mongoose','JWT','Leaflet','Multer','Nodemailer','node-cron','Razorpay'], outcomes:['Built a practical service-dispatch platform.','Delivered multi-role, location-aware booking orchestration.','Strengthened geospatial MongoDB and modular Express skills.']
}

export const letMySpace = {
  title:'LetMySpace', subtitle:'Full-Stack Real Estate Platform', category:'Selected Projects', year:'2025', role:'BCA Final-Year Team Project · 3 Members',
  overview:'A responsive MERN real-estate platform developed as a three-member BCA final-year project. It enables users to browse, list, search and manage properties with complete workflows, image handling, filtering and dashboards.',
  images:['Real Estate Landing Page','Property Listings','Advanced Search & Filters','Property Details','Add Property','Management Dashboard'],
  features:['Property browsing and search','Listing creation and management','Advanced property filters','Image upload workflow','Responsive user dashboards','Support for 500+ managed properties'],
  architecture:[{title:'Frontend',text:'React property discovery, forms and responsive dashboards.'},{title:'Backend',text:'Node.js and Express property-management APIs.'},{title:'Database',text:'MongoDB stores users, listings and property information.'},{title:'Media',text:'Image uploads enrich property listings.'}],
  challenges:[{challenge:'Large listing workflows',solution:'Created reusable forms, filters and management operations.'},{challenge:'Team delivery',solution:'Coordinated features and integrations across a three-member team.'}],
  stack:['React.js','Node.js','Express.js','MongoDB','Cloudinary','REST APIs'], outcomes:['Completed an end-to-end BCA final-year team project.','Supported workflows for more than 500 properties.','Improved property-management efficiency by approximately 25%.']
}

export const fridayChromeExtension = {
  title:'Friday AI Chrome Extension', subtitle:'Gemini-Powered New-Tab Assistant', category:'Independent Projects', year:'2026', role:'Independent Developer',
  overview:'A Chrome Manifest V3 new-tab extension combining a premium productivity dashboard with Gemini streaming chat and Gemini Live native-audio conversations. It retains conversations and preferences locally while providing quick access to everyday tools.',
  images:['New-Tab Dashboard','Central Voice Orbit','Gemini Chat Panel','Live Listening State','Conversation History','Notes & Shortcuts','Focus Tools','Settings Drawer'],
  features:['Chrome new-tab replacement','Gemini 2.5 streaming text chat','Gemini Live continuous voice interaction','AudioWorklet PCM microphone capture','Conversation history management','Quick notes, shortcuts and focus tools','Personalization and theme settings','Chrome Storage persistence'],
  architecture:[{title:'Extension UI',text:'HTML, CSS and JavaScript packaged for Manifest V3.'},{title:'Text AI',text:'Gemini REST streaming with structured conversation context.'},{title:'Voice AI',text:'Gemini Live WebSocket and native generated audio.'},{title:'Audio',text:'Web Audio API and AudioWorklet capture PCM microphone chunks.'},{title:'Storage',text:'Chrome Storage preserves settings and conversations.'}],
  challenges:[{challenge:'Continuous voice',solution:'Streamed PCM microphone chunks and scheduled model audio playback.'},{challenge:'Extension constraints',solution:'Designed within Manifest V3 permissions and extension-page security rules.'}],
  stack:['JavaScript','HTML5','CSS3','Manifest V3','Gemini 2.5','Gemini Live','Web Audio API','AudioWorklet','Chrome Storage'], outcomes:['Built text and natural-audio AI inside a browser extension.','Created a complete customizable productivity new tab.','Learned real-time audio pipelines and extension security constraints.']
}

export const fridayAIAssistant = {
  title:'Friday AI Assistant', subtitle:'Memory, Voice & Computer-Vision Assistant', category:'Independent Projects', year:'2025 – Present', role:'Independent Developer',
  overview:'A full-stack AI assistant for streamed conversation, contextual memory, voice interaction and visual awareness. It connects a React desktop interface, Node.js orchestration layer, MongoDB memory and a Python machine-learning service.',
  images:['Friday Home & Greeting','Streaming Conversation','Voice Mode','Saved Chat Sessions','Live Vision Interface','Face & Emotion Detection','Vision Debug Dashboard','Theme & Response Controls'],
  features:['Streaming AI conversations','Persistent conversation sessions','Long-term semantic memory','Context-aware prompt generation','Voice input and audio responses','Configurable answer lengths','Live face and emotion detection','Proactive visual observations'],
  architecture:[{title:'Frontend',text:'React and Vite desktop assistant interface.'},{title:'Orchestration',text:'Node and Express coordinate chat, memory, voice and vision.'},{title:'Memory',text:'MongoDB stores conversations and extracted memories.'},{title:'ML Service',text:'Python and Flask serve face and emotion inference.'},{title:'Vision',text:'SCRFD, FERPlus, OpenCV and ONNX Runtime.'}],
  challenges:[{challenge:'Context continuity',solution:'Combined saved sessions with extracted semantic memories.'},{challenge:'Visual awareness',solution:'Added a separate real-time ML service and proactive vision state.'}],
  stack:['React.js','Node.js','Express.js','MongoDB','Python','Flask','Groq API','OpenCV','ONNX Runtime','SCRFD','FERPlus'], outcomes:['Integrated AI chat, memory, voice and vision in one product.','Built multi-service JavaScript and Python architecture.','Gained practical experience serving real-time ML inference.']
}

export const mlDatasetCollector = {
  title:'ML Dataset Collector', subtitle:'Image Capture & Augmentation Utility', category:'Independent Projects', year:'2026', role:'Independent Developer',
  overview:'A focused utility for collecting labeled image datasets for machine-learning experiments. Users enter a class label and target image count, choose augmentation operations and capture consistent training samples directly from a camera.',
  images:['Dataset Collector Home','Label & Image Count','Camera Capture','Augmentation Options','Capture Progress','Generated Dataset'],
  features:['Custom class-label entry','Configurable image count','Live camera capture','Horizontal flip augmentation','Rotation and brightness augmentation','Blur, noise and grayscale options'],
  architecture:[{title:'Input',text:'Label, target count and augmentation settings.'},{title:'Capture',text:'Camera frames collected into a class-specific dataset.'},{title:'Augmentation',text:'Selected transformations create more varied samples.'},{title:'Output',text:'Organized images ready for ML training workflows.'}],
  challenges:[{challenge:'Dataset variety',solution:'Added optional transformations to reduce repetitive samples.'},{challenge:'Repeatable collection',solution:'Used explicit labels and target counts for consistent output.'}],
  stack:['Python','OpenCV','Computer Vision','Data Augmentation','Machine Learning'], outcomes:['Reduced manual effort when collecting labeled images.','Created reusable datasets for vision experiments.','Explored practical augmentation and capture workflows.']
}
