// -Create a simple web page with a button and a paragraph element. When the button is clicked, the text content of the paragraph element should be changed to "Hello, World!".

// -You should use JavaScript to select the paragraph element and button element, and add an event listener to the button that triggers a function to change the text content of the paragraph.
const button1 = document.getElementById('btn1')
const paragraph = document.getElementById('text')
const button2 = document.getElementById('revert')
const initialText = paragraph.innerText
console.log(initialText)
button1.addEventListener('click', function(){
    //function definition
    paragraph.innerText = 'Hello World'
})

button2.addEventListener('click', function(){
      paragraph.innerText = initialText