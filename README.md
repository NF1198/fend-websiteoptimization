## Website Performance Optimization portfolio project

Student: Nicholas Folse

### Building & Running

This site uses [grunt](http://gruntjs.com/) to implement various optimizations.
Install grunt dependencies with `npm install`.

1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python3 -m http.server 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

### Optimizations Summary

####Part 1: Optimize PageSpeed Insights score for index.html

1. Optimized images (used WebP format for profilepic and pizzeria thumbnail)
1. Inlined style.css, added media="print" for print.css
1. Load web fonts asynchronously with javascript
1. Load javascript with async
1. Moved inlined javascript to end of html
1. Minified HTML, CSS, & Javascript

####Part 2: Optimize Frames per Second in pizza.html

1. `function changePizzaSizes(size)`: Refactored function to apply size fraction directly instead of inefficiently computing delta size.
1. `function updatePositions()`: Refactored function to efficiently compute metrics for computing new style.left property values.
1. `scroll event listener`: Implemented helper class `EventTimer`, which rate-limits how often the browser calls `updatePositions`. (Note "skipped" notifications in the console)
1. `movingPizzaCount` : Upon document creation, determine the number of "moving pizzas" that are required to fill the screen (from top to bottom) and only create this many pizzas.

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
