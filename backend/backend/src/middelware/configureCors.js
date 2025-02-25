import cors from "cors";

const configureCors = () => {
    return cors({
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization", "Accept-Version"],
        exposedHeaders: ["X-Total-Count", "Content-Range"],
        credentials: true,
        preflightContinue: false,
        maxAge: 600,
        optionsSuccessStatus: 204,
    });
};

export default configureCors;
