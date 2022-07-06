function coffeeTemplate(coffee){
   let myReturn = "";

   myReturn += `
   <p>
    		 <img src="${coffee.pic}" alt="{coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name} Spice Latte</strong>, ${coffee.desc}
            </p>
   `;
   
    return myReturn;
}

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

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
    break;

    case 2: 
        today = "Tuesday";
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

    default: 
        today = "Something went Wrong";
    break;
}


let coffeeData = coffeeTemplate(coffee);

alert(coffeeData);
