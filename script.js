const cards = [
  {
    category: "brand",
    question: "Does the design align with the brand values?"
  },
  {
    category: "brand",
    question: "Does the design differ from the brand? If so, why?"
  },
  {
    category: "brand",
    question: "Is the tone of voice aligned with the brand?"
  },
  {
    category: "brand",
    question: "Does the work adhere to the design principles?"
  },
  {
    category: "brand",
    question: "Does the design match the tone of voice?"
  },
  {
    category: "function",
    question: "What is the purpose of this page?",
    example: "(Definition Statement)"
  },
  {
    category: "function",
    question: 'Does the design support the "definition statement" or purpose?'
  },
  {
    category: "function",
    question:
      "What are the minimal, necessary elements for the design to perform it's task?"
  },
  {
    category: "function",
    question:
      "If there are any extra elements, can you justify their place in the design?"
  },
  {
    category: "objectives",
    question: "What are the objectives for this work?"
  },
  {
    category: "objectives",
    question: "Is the design aligned with the user objectives?"
  },
  {
    category: "objectives",
    question: "Is the design aligned with the brand or aspirational objectives?"
  },
  {
    category: "objectives",
    question:
      "Is the design aligned with the overall business or commercial objectives?"
  },
  {
    category: "visual language",
    question: "Layout and proximity: Are supporting elements too far/too close?"
  },
  {
    category: "visual language",
    question: "How is white space used in this design?"
  },
  {
    category: "visual language",
    question: "How is the use of color in the design?",
    example: "Too much/too little?"
  },
  {
    category: "visual language",
    question: "How is the balance of scale between type, media, and layout?"
  },
  {
    category: "visual language",
    question: "Is the typeface appropriate for the content?"
  },
  {
    category: "visual language",
    question: "How does the hierarchy of the typography feel?",
    example: "(scale/weight/upper-case?)"
  },
  {
    category: "visual language",
    question: "Is it clear in terms of way-finding and IA?"
  },
  {
    category: "visual language",
    question: "Can you explain the choice of typeface?"
  },
  {
    category: "visual language",
    question: "Can you explain the choice of photography in the design?"
  },
  {
    category: "visual language",
    question: "What is the purpose of illustration in the design?"
  },
  {
    category: "visual language",
    question: "Does the pace match the user's expectation for this design?"
  },
  {
    category: "user",
    question: "What is the user journey and does the design support it?"
  },
  {
    category: "user",
    question: "What do we already know about our users?",
    example: "(personas?)"
  },
  {
    category: "user",
    question: "What is the user's expectation of this page?"
  },
  {
    category: "user",
    question:
      "What is the user's expectation or mental model of what happens next?"
  },
  {
    category: "user",
    question: "What are the user's needs for this design?"
  },
  {
    category: "user",
    question: "What is the user's current emotional state?",
    expectation: "(Curious? Frustrated? Excited? Needing Validation?)"
  },
  {
    category: "wild card",
    question:
      "What is the problem we are solving and does the design address it?"
  },
  {
    category: "wild card",
    question:
      "Where in the design is the most likely place for users to have a problem?"
  },
  {
    category: "wild card",
    question:
      'What is the user\'s "AHA" moment within this design for them to perform the next task?'
  },
  {
    category: "wild card",
    question:
      "Does the design reject established design patterns? If so, can you justify your decisions?"
  },
  {
    category: "wild card",
    question:
      "What would motivate your users to invest more time and attention?"
  },
  {
    category: "wild card",
    question: "How do YOU feel about the design?"
  },
  {
    category: "wild card",
    question: 'What is the user\'s "Ooooh" moment?',
    example: "(The part which delights the user.)"
  },
  {
    category: "experience",
    question: "Is it clear what tasks the user has to perform?"
  },
  {
    category: "experience",
    question:
      "How does the speed of out application compare to our competitors?"
  },
  {
    category: "experience",
    question: "What makes this experience different from another on the market?"
  },
  {
    category: "experience",
    question: "What in the design invites and encourages use?"
  },
  {
    category: "experience",
    question:
      "Is it easy to understand how to perform the tasks set for the user?"
  },
  {
    category: "content",
    question: "What is the content hierarchy?"
  },
  {
    category: "content",
    question: "What is the main message of the design?"
  },
  {
    category: "content",
    question: "What story are we telling?"
  },
  {
    category: "content",
    question:
      "Does the content match the targeted persona and their current state?"
  },
  {
    category: "content",
    question:
      "Is this the best way to communicate this content i.e. text, image, audio, animation, video?"
  }
];

const card = document.getElementById("card");
const cardCategory = document.getElementById("cardCategory");
const cardQuestion = document.getElementById("cardQuestion");
const cardTopCorner = document.getElementById("cardTopCorner");
const cardBottomCorner = document.getElementById("cardBottomCorner");

card.className = "card card-start";
cardCategory.innerHTML = "category";
cardQuestion.innerHTML = "pick a card";
cardTopCorner.innerHTML = "js";
cardBottomCorner.innerHTML = "js";

function randomPick(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

function setCornerText(text) {
  cardTopCorner.innerHTML = text;
  cardBottomCorner.innerHTML = text;
}

function drawCard() {
  let randomCard = randomPick(cards);

  // Add a class for animation
  card.classList.add("drawing");

  setTimeout(function() {
    // Set Content for Picked Card
    cardCategory.innerHTML = randomCard.category;
    cardQuestion.innerHTML = randomCard.question;

    // if there is randomCard.example
    // create a paragraph with randomCard.example

    if (randomCard.example != undefined) {
      var exampleP = document.createElement("p");
      exampleP.innerHTML = randomCard.example;
      exampleP.className = "cardExample";
      cardQuestion.appendChild(exampleP);
    }
    console.log(randomCard.example);

    card.className = "card card-" + randomCard.category.replace(/\s/g, "-");
    switch (randomCard.category) {
      case "objectives":
        setCornerText("Ob");
        break;
      case "brand":
        setCornerText("Br");
        break;
      case "function":
        setCornerText("Fn");
        break;
      case "objectives":
        setCornerText("Obj");
        break;
      case "content":
        setCornerText("Cn");
        break;
      case "visual language":
        setCornerText("VL");
        break;
      case "user":
        setCornerText("Usr");
        break;
      case "wild card":
        setCornerText("?");
        break;
      case "experience":
        setCornerText("Exp");
        break;
      default:
        setCornerText("JS");
    }

    // Remove animation class
    card.classList.remove("drawing");
  }, 500);
}

document.getElementById("button").onclick = function() {
  drawCard();
};
