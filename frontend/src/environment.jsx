// Use Vite's import.meta.env.MODE instead of process.env
const server = import.meta.env.MODE === "production" 
    ? "https://video-conferencing-platform.onrender.com" 
    : "http://localhost:8000";

export default server;