function coffeeTemplate(coffee){
   let myReturn = "";

   myReturn += `
   <p>
    		 <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name} Spice Latte</strong>, ${coffee.desc}
            </p>
   `;
   
    return myReturn;
}

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);
if(urlParams.has("day")){
    //data on querystring, load from querystring
    myDay = urlParams.get("day");
}

myDay = parseInt(myDay);


/*
One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content

pic - image src
alt - the alt tag for the image
desc - a description of the coffee
color - color associcated with coffee
name - color associated with coffee
*/



switch(myDay){
    case 0: 
        today = "Sunday";
        coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Wednesday", 
            desc: `I like me some Bubble Tea`
        };
    break;

    case 1: 
    today = "Monday";
    coffee = {
        color: "pink",
        name: "Bubble Tea",
        pic: "images/mocha.jpg",
        alt: "A picture of a mocha",
        day: "Thursday", 
        desc: `I like me some mocha`
    };
break;

    case 2: 
        today = "Tuesday";
        coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Wednesday", 
            desc: `I like me some Bubble Tea`
        };
    break;

    case 3: 
        today = "Wednesday";
        coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Wednesday", 
            desc: `I like me some Bubble Tea`
        };
    break;

    case 4: 
    today = "Thursday";
    coffee = {
        color: "pink",
        name: "Bubble Tea",
        pic: "images/mocha.jpg",
        alt: "A picture of a mocha",
        day: "Thursday", 
        desc: `I like me some mocha`
    };
break;

    case 5: 
    today = "Friday";
    coffee = {
        color: "pink",
        name: "Bubble Tea",
        pic: "images/mocha.jpg",
        alt: "A picture of a mocha",
        day: "Thursday", 
        desc: `I like me some mocha`
    };
break;
    case 6: 
    today = "Saturday";
    coffee = {
        color: "pink",
        name: "Bubble Tea",
        pic: "images/mocha.jpg",
        alt: "A picture of a mocha",
        day: "Thursday", 
        desc: `I like me some mocha`
    };
    break;

    default: 
        today = "Something went Wrong";
    break;
}


// let coffeeData = coffeeTemplate(coffee);
// alert(coffeeData);
// console.log(coffee);


document.getElementById('coffee-cup').innerHTML = coffeeTemplate();
document.querySelector('coffee.color').style.background = myColor;
