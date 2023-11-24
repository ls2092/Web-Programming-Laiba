const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mysql = require('mysql');


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

// Function to generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};


exports.register = (req,res) => {
    console.log(req.body);

    const {name, email, password, passwordConfirm} = req.body;

    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, result) =>{
        if (error) {
            console.log(error);
        }

        if (result.length > 0) {
            return res.render('register'), {
                message: 'This email is already taken'
            }
        } else if (password !== passwordConfirm) {
            return res.render('register', {
                message: 'Passwords donot match.'
            });
        }
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query('INSERT INTO users SET ?', {name: name, email: email, password: hashedPassword}, (error,result) => {
            if(error) {
                console.log(error);
            }
            else{
                console.log(result);
                return res.render('register', {
                    message: 'User Registered'
                });
            }
    })
    });

    

    res.send("form submitted");
};

exports.login = async (req, res) => {
    console.log(res.body);

    const { email, password } = req.body;

    if (!email || !password) {
        return res.render('login', {
            message: 'Please provide an email and password'
        });
    }

    try {
        const results = await db.query('SELECT * FROM users WHERE email = ?', [email]);

        if (!results || results.length === 0) {
            return res.render('login', {
                message: 'No user found with this email'
            });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = generateToken(user.id);
    
            return res.status(200).json({ token });
        } else {
            return res.render('login', {
                message: 'Incorrect email or password'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.logout = (req, res) => {
    res.clearCookie('jwt'); // Clear the JWT cookie

    // Redirect to the home page or login page
    res.redirect('/');
};



