const express = require("express");
const router = express.Router();


//* middlewares

const auth = (req, res, next) => {
    console.log("Auth Middleware")
    // adding dummy user in request body
    req.user = { userId: 1, name: "Asher", role: "Student" }
    req.user = { userId: 1, name: "Asher", role: "Admin" }

    if (req.user) {
        // if user is authenticated, call next() to proceed to the next middleware
        next()
    } else {
        res.json({
            success: false,
            message: "Unauthorized"
        })
    }
}

const isStudent = (req, res, next) => {
    console.log("Student Middleware")
    // check if user is student 
    if (req.user.role.toLowerCase() === "student") {
        // if user is student, call next() to proceed to the next middleware
        next()
    } else {
        res.json({
            success: false,
            message: "Access Denied, this route is for students only!"
        })
    }
}

const isAdmin = (req, res, next) => {
    console.log("Admin Middleware")
    // check if user is admin 
    if (req.user.role.toLowerCase() === "admin") {
        // if user is admin, call next() to proceed to the next middleware
        next()
    } else {
        res.json({
            success: false,
            message: "Access Denied, this route is for admins only!"
        })
    }
}






// * routes
router.get("/", (req, res) => {
    res.send("Hello, Asher!")
})

router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success: true,
        message: "Welcome Student!"
    })
})

router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success: true,
        message: "Welcome Admin!"
    })
})




module.exports = router;