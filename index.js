import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3200;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
  });

app.post("/submit", (req, res) => {
    console.log(req.body);
    const emailid=req.body["Email"];
    const password1=req.body["Password"];
    // console.log(emailid);
    // console.log(password1);
  
    res.render("index.ejs", {
        Email:emailid,
        Password:password1,
    });
  });

  
  app.get("/contact", (req, res) => {
      res.render("contact.ejs");
    });
    
    app.post("/submit1", (req, res) => {
        console.log(req.body);
        const emailid=req.body["Emailid"];
        const password1=req.body["Password"];
        const address1=req.body["Add1"];
        const address2=req.body["Add2"];
        const cityp=req.body["City"];
        const State=req.body["State"];
        const zipc=req.body["zip"];
        const chckb=req.body["Checkbox"];
        
        // console.log(`Emailid: ${emailid}`);
        // console.log(`password: ${password1}`);
        // console.log(`address: ${address1}`);
        // console.log(`address2: ${address2}`);
        // console.log(`city: ${cityp}`);
        // console.log(`zip code: ${zipc}`);
        // console.log(`checkbox: ${chckb}`);
        
        res.render("contact.ejs", {
            email:emailid,
            password:password1,
            addre1:address1,
            addre2:address2,
            citypl:cityp,
            zipcd:zipc,
            checkb:chckb,
        });
    });
    

    app.listen(port, (req, res) => {
    console.log(`SERVER ON ${port} IS LISTENING RIGHT NOW...`);
})