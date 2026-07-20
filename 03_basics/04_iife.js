// Immediately Invoked Function Expression (IIFE)


(function coffee(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})  ('subidhi')