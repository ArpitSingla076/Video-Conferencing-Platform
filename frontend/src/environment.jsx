const server = import.meta.env.MODE === "production" 
    ? "https://video-conferencing-platform-43qo.onrender.com" // Ensure this matches the log exactly
    : "http://localhost:8000";

export default server;