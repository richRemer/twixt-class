twixt-class Function
====================

```js
var clas = require("twixt-class"),
    doc = require("twixt-document");

doc(function(document) {
    var elem = document.getElementById("foo");
        hidden = clas(elem, "hidden");
    
    hidden(true);   // add hidden class on "foo" element
    hidden(false);  // remove hidden class on "foo" element
    hidden();       // return true/false from hidden class on "foo" element
});
```
