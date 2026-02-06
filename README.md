# Quick PocketBudget
This is a budget tracking application that lets you input income and expenses and will tell you if you are coming out in the green or red. At the end of each month, you can clear the data to start fresh for the next month.

## How it's made
This uses HTML and Tailwind CSS for the UI, and JavaScript on the backend to update the DOM and provide the necessary logic. It uses localStorage to store data in the browser until the user chooses to remove it. It's built with Tailwind CSS's mobile-first approach.

When the user adds a budget item, it creates a JavaScript object that is passed into localStorage, and the individual budget items will be added to the table.

## Optimizations
- I can improve the UI by making the buttons look better on mobile, updating the footer to be a column instead of a row in mobile view, and bringing the left and right margins in just a bit on mobile view as well
- With more database knowledge, I can update the app to use a database instead of localStorage
- I could add another table or page showing budget data by month, or add more stats to the dashboard
- I can clean up the JavaScript code

## Lessons Learned
I learned a lot about Tailwind CSS in this project, since it was the first major UI I made with it. I learned how to write Tailwind classes for mobile vs desktop (prepending `lg:` to any desktop-specific classes). I also learned how to create a 360-degree box shadow using custom values for Tailwind, since the native class does not provide a way. I also learned how to make custom colors for backgrounds. I would get the RGB() value from Apple's Digital Color Meter tool, then turn them into hexcodes from a color site on the internet, and input that as my background color.

For JavaScript, I learned how you can use `JSON.stringify` to store objects as values in localHost, making it possible to loop through these objects and tally up values to put on the screen. This resembles something more like a database. I also learned a lot about working with localStorage and the various considerations for CRUD applications, such as updating the UI, updating persistent storage, feeding data to storage, and automatically updating the UI, and making sure these same updates persist on page refresh. It took some research and time, but I was able to get it to work.

## Related projects
RPG Game: https://kyaaron.github.io/OOP-rpg-game/
