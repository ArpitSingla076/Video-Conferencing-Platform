const server = process.env.NODE_ENV === "production" 
    ? "https://video-conferencing-platform.onrender.com" 
    : "http://localhost:8000";

export default server;