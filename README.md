# Time_date
**HTML Structure:**
It contains a div with an ID of box, which holds two child divs: one for displaying the date (#date) and another for displaying the time (#clock).
The JavaScript script (index.js) is linked at the bottom of the body.
**JavaScript Function:**
The Clock() function uses the Date() object to get the current time and date.
It then formats the time as HH:MM:SS and the date as DD/MM/YYYY.
The Clock() function is called initially and set to update every second using setInterval().
**CSS Styling:**
Both the clock and date elements have large font sizes, green text color, padding, rounded borders, and a fixed position on the screen.
The clock and date are positioned centrally on the screen using Flexbox in the #box div.
This setup gives you a real-time digital clock that updates every second, with a dynamic date display.
