// document.body.style.backgroundColor = "black";


// const div = document.createElement("div");

//     div.textContent = "Hello World!";
//     div.style.color = "blue";
//     div.style.fontSize="50px";

//     document.body.appendChild(div);


// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.style.color="white";
// content.textContent = "This is the glorious text-content!";
// content.style.fontSize="40px";

// container.appendChild(content);



// const container = document.querySelector("#container");



// const p = document.createElement("p");
// p.textContent="Hey I'm red!";
// p.style.color="red";
// container.appendChild(p);


// const h3 = document.createElement("h3");
// h3.textContent="Hey I'm blue h3!";
// h3.style.color="blue";
// container.appendChild(h3);

// const div = document.createElement("div");
// div.style.backgroundColor="pink";
// div.style.border="1px solid black";

// const h1 = document.createElement("h1");
// h1.textContent="I'm in a div!";


// const p2 = document.createElement("p");
// p2.textContent="ME TOO";

// div.appendChild(h1);
// div.appendChild(p2);


// container.appendChild(div);



// btn.addEventListener("click", function (e) {
//   console.log(e.target);
// });


// btn.addEventListener("click", function (e) {
//   e.target.style.background = "blue";
// });


// let btn = document.querySelector('#btn');

// function handleClick(){
//     alert('It was clicked.');
// }

// btn.addEventListener('click',handleClick);


// let btn = document.querySelector('#btn');

// btn.addEventListener('click',function(event) {
//     alert('It was clicked!');
// });

// let link = document.querySelector('a');

// link.addEventListener('click',function(event){
//     console.log('clicked');
//     event.stopPropagation();
// });


// element.onmousemove = mouseMoveEventHandler;
// // ...
// //  later, no longer use
// element.onmousemove = null;


// let btn = document.querySelector('#btn');

// btn.addEventListener('click',(event) => {
//     console.log('clicked');
// });

// let btn = document.querySelector('#btn');

// btn.onclick = (event) => {
//     console.log('clicked');
// };

        let btn = document.querySelector('#btn');

        // disable context menu when right-mouse clicked
        btn.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });

        // show the mouse event message
        btn.addEventListener('mouseup', (e) => {
            let msg = document.querySelector('#message');
            switch (e.button) {
                case 0:
                    msg.textContent = 'Left mouse button clicked.';
                    break;
                case 1:
                    msg.textContent = 'Middle mouse button clicked.';
                    break;
                case 2:
                    msg.textContent = 'Right mouse button clicked.';
                    break;
                default:
                    msg.textContent = `Unknown mouse button code: ${event.button}`;
            }
        });
    </script>

