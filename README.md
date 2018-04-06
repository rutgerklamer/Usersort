# Usersort
Usersort is a advanced searching algorithm using the human brain as the power supply 
Why use those complex algorithms for such simple tasks? Your brain needs to do this, Not your computer 
It will create a table of the unsorted array which the user then has to sort 

Using usersort is simple, An Tutorial can be found below 
Add these three scripts, the stylesheet is optionally

```html
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="usersort.js"></script>
<link rel="stylesheet" href="userstyle.css">
```

To make sure usersort get's executed correctly we need to use it in a document ready function

```javascript
$(document).ready(function () {

});
```

We can then call usersort with a unsorted array, The sort function takes in the unsorted array and the type of sorting it needs to do

```javascript
$(document).ready(function () {
    let unsorted_array = [1,2,3];
    sort(unsorted_array, TYPE.DESCENDING);
});
```

We want to know when the sort function is executed we do this via a simple interval function

```javascript
$(document).ready(function () {
    let unsorted_array = [1,2,3];
    sort(unsorted_array, TYPE.DESCENDING);
    let intervalID = setInterval(function () {
        if (is_sorted()) 
           unsorted_array = get_sorted();
    }, 10);
});
```

This is the code for the example on the website [Usersort](https://usersort.rutgerklamer.nl)

```javascript
$(document).ready(function () {
    let unsorted_array = [1,2,3];
    sort(unsorted_array, TYPE.DESCENDING);
    let intervalID = setInterval(function () {
        if (is_sorted()) {
           unsorted_array = get_sorted();
           $("body").css("background-color", "#2ecc71");
        } else {
           $("body").css("background-color", "#e74c3c");
        }
    }, 10);
});
```

