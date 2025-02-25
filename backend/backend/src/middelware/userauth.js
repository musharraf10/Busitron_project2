import jwt from 'jsonwebtoken';

const userauth = (req, res, next) => {
    // Get token from cookies
    const {token} = req.cookies;

    if (!token) {
        return res.status(401).json({
            message: 'Access denied. No token provided.',
            success: false,
        });
    }

    // Decode and verify the token
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        if (!decodedToken) {
            return res.status(401).json({
                message: 'Invalid token',
                success: false,
            });
        }

        if(decodedToken.id){
            req.body.userId = decodedToken.id;
        }else {
            return res.status(401).json({
                message: 'Invalid token or not authorized',
                success: false,
            })
        }

        // req.userInfo = decodedToken; // Store the decoded token in the request object

        console.log(decodedToken); // For debugging purposes (you can remove this in production)
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({
            message: 'Invalid token',
            success: false,
        });
    }
};

export default userauth;
