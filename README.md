# Quick PocketBudget
This is a budget tracking application that lets you input income and expenses and will tell you if you are coming out in the green or red. At the end of each month, you can clear the data to start fresh for the next month.

## How it's made
This uses HTML and Tailwind CSS for the UI, and JavaScript on the backend to update the DOM and provide the necessary logic. It uses localStorage to store data in the browser until the user chooses to remove it. It's built with Tailwind CSS's mobile-first approach.

When the user adds a budget item, it creates a JavaScript object which is passed into localStorage, and the individual budget items will be added to the table.

## Optimizations
- I need Total Balance to show Monthly income value - Monthly expenses
- I need to += values to the table when they are entered
- I need to add or subtrack from localStorage.getItem("amount") as income and expenses are entered
- I need to make buttons look better on mobile view, put on same row?
- I need to make the footer a column instead of row in mobile view
- I need to make the left and right margins a bit bigger on mobile

## Lessons Learned
I learned a lot about Tailwind CSS in this project, since it was the first major UI I made with it. I learned how to write Tailwind classes for mobile vs desktop (prepending `lg:` to any desktop-specific classes). I also learned how to create a 360 degree box shadow using custom values for Tailwind, since the native class does not provide a way. I also learned how to make custom colors for backgrounds. I would get the rgb() value from Apple's Digital Color Meter tool then turn them into hexcodes from a color site on the internet and input that as my background color.

## Related projects
RPG Game: https://kyaaron.github.io/OOP-rpg-game/
