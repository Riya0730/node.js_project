const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

require("./src/db/conn")
//contact
const User = require("./src/models/usermessage")

//feedback
const Feedback = require("./src/models/feedback")


const connecttomongo = require("./src/db/conn");

//register
const register = require("./src/models/register")
const port = 3000
const static_path = path.join(__dirname, "./public");
const template_path = path.join(__dirname, "./templates/views");
const partials_path = path.join(__dirname, "./templates/partials");




app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(static_path));
app.set("view engine", "hbs");

app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("index");

});

app.get("/contact", (req, res) => {
    res.render("contact");

});

//contact post
app.post("/contact", async (req, res) => {
    try {

        //res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");

    } catch (error) {
        res.status(500).send(error);

    }


});


//feedback post

app.post("/feedback", async (req, res) => {
    try {

        //res.send(req.body);
        const feedData = new Feedback(req.body);
        await feedData.save();
        res.status(201).render("index");

    } catch (error) {
        res.status(500).send(error);

    }


});


app.get("/login", (req, res) => {
    res.render("login");

});

app.get("/register", (req, res) => {
    res.render("register");

});

//register post
app.post("/register", async (req, res) => {
    try {
        // console.log(req.body.name);
        // res.send(req.body.name);
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if (password === cpassword) {
            const registerUser = new register({
                fullname: req.body.fullname,
                username: req.body.username,
                email: req.body.email,
                Phone: req.body.Phone,
                password: req.body.password,
                confirmpassword: cpassword,
                gender: req.body.gender
            })
            const registered = await registerUser.save();
            res.status(201).render("login", registered);
        } else {
            res.send("password not match");
        }
    } catch (error) {
        res.status(400).send(error);

    }

});


//login post

app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await register.findOne({ email: email });

        if (useremail.password === password) {
            res.status(201).render("third");

        } else {
            res.send("invalid login details")
        }

        console.log(`${email}and password is${password}`)
    } catch (error) {
        res.status(400).send("invalid email")

    }
});


app.get("/final", (req, res) => {
    res.render("final");

});

app.get("/about", (req, res) => {
    res.render("about");

});

app.get("/third", (req, res) => {
    res.render("third");

});

app.get("/feedback", (req, res) => {
    res.render("feedback");

});

app.get("/peace", (req, res) => {
    res.render("peace");

});

app.get("/snake", (req, res) => {
    res.render("snake");

});

app.get("/song", (req, res) => {
    res.render("song");

});

app.get("/spider", (req, res) => {
    res.render("spider");

});

app.get("/sygnonium", (req, res) => {
    res.render("sygnonium");

});

app.get("/zz", (req, res) => {
    res.render("zz");

});

app.get("/money", (req, res) => {
    res.render("money");

});

app.get("/monstera", (req, res) => {
    res.render("monstera");

});

app.get("/bamboo", (req, res) => {
    res.render("bamboo");

});

app.get("/croton", (req, res) => {
    res.render("croton");

});

app.get("/boston", (req, res) => {
    res.render("boston");

});

app.get("/abc", (req, res) => {
    res.render("abc");

});

app.get("/vidya", (req, res) => {
    res.render("vidya");

});

app.get("/pur", (req, res) => {
    res.render("pur");

});

app.get("/arecafan", (req, res) => {
    res.render("arecafan");

});

app.get("/rose", (req, res) => {
    res.render("rose");

});

app.get("/shevanti", (req, res) => {
    res.render("shevanti");

});

app.get("/chini", (req, res) => {
    res.render("chini");

});

app.get("/hydra", (req, res) => {
    res.render("hydra");

});

app.get("/mogra", (req, res) => {
    res.render("mogra");

});

app.get("/chandni", (req, res) => {
    res.render("chandni");

});

app.get("/madhu", (req, res) => {
    res.render("madhu");

});

app.get("/gokarna", (req, res) => {
    res.render("gokarna");

});

app.get("/yellow", (req, res) => {
    res.render("yellow");

});




app.listen(port, () => {
    console.log(`server is runing at port no ${port}`);
})

connecttomongo()