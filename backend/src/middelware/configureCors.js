import cors from "cors";

const configureCors = () => {
    return cors({
        origin: ["http://localhost:5173"], // ✅ Allow all origins
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization", "Accept-Version"],
        exposedHeaders: ["X-Total-Count", "Content-Range"],
        credentials: true, // ✅ Enable support for cookies
        preflightContinue: false,
        maxAge: 600, // Cache preflight responses for 10 minutes
        optionsSuccessStatus: 204,
    });
};

export default configureCors;
