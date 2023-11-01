const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('users.db');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

let password = document.getElementById("password").value;
let email = document.getElementById("email").value;

document.getElementById("loginButton").addEventListener(redirect)


  function redirect(){
    db.get('SELECT * FROM users WHERE email = ?', email, (err, row) => {
        if (err) {
          window.alert("Interal Server error");
        }
    
        if (!row) {
          window.alert('Invalid email or password' );
        }
    
        const isValidPassword = bcrypt.compareSync(password, row.password);
    
        if (!isValidPassword) {
            window.alert('Invalid email or password' );
        }
        window.redirect('/next-page.html');
        
  }

  };
