1. The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:

    → getElementById() returns the HTML element with the specified ID and stores it as a JavaScript object. If that specific ID is not found, it returns null.

    → getElementsByClassName() returns a HTMLCollection of elements with the specified class. 

    → querySelector() returns first element that matches. querySelector() can understand any kind of CSS selector.

    → querySelectorAll() returns NodeList of elements those mathces. Also querySelectorAll() can understand any kind of CSS selector.


2.   How i create and insert a new elment into the DOM.

     → First i create a new element by
        const newEl = document.createElement("element");
     → Then i insert new element by using 
           .appendChild(newEl);


3. Event Bubbling

    → When an event happens on a child element, it automatically travels up to its parent elements in the DOM tree.
    → Click → button → inner div → outer div → document
    → Most events like click bubble by default.
    → Use event.stopPropagation() to prevent the event from going up.



 4. Event Delegation in JavaScript
    
    → Event Delegation is a technique where instead of adding an event listener to every single element, you add one listener to a parent element and let the event handle all child elements.

   Why is it useful?

    → One listener instead of many. Saves memory and CPU if you have hundreds of elements.

    → Works for elements added later to the DOM, because the parent listener catches events from new children automatically.

    → Less repetitive, easier to manage.



5. The difference between preventDefault() and stopPropagation() methods   

    → preventDefault()
        
        → Stops the browser’s default behavior for an event.
        → Does NOT stop bubbling — the event still goes up to parent elements.

    → stopPropagation()

        → Stops the event from bubbling up (or capturing down) the DOM tree.

        → Does NOT stop the default browser behavior.  