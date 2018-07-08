
# 21savageAuth
This project is a user login authorization for our users to leave their favorite song and lyric from that song so they can discuss why those lyrics stood out to them and what they percieved the message to be.

# How It's Made:
The object of this project was to fix the thumbs up and thumbs down feature, and to make edits to each of our ejs.  On the login.ejs page we included a image of our favorite clipart of 21 Savage.  On the profile.ejs we fixed the thumb Up and thumbs Down feature to add or subtract the value from the same span. 

# Tech used:
HTML, CSS, JavaScript, Node-JS, MongoDB, Express and Passport

# Lessons Learned:
I learned how to navigate through our profile.ejs to target the correct childNodes when we want to alter counts or messages when we click on a button or icon. This is important so our application doesn't break after one use. When we add more features that can alter the count or message of an input, its important we are pulling the correct innerText form the childNodes or you will end up targeting the wrong span and breaking your application.

## Installation

1. Clone repo
2. run `npm install`

## Usage

1. run `node server.js`
2. Navigate to `localhost:8080`

## Credit

Modified from Scotch.io's auth tutorial
