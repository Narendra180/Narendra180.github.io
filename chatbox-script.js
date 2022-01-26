// Elements to be animated.
// con => container, content => content (class names full form).

// 1. class = introductory-content-background-image.
            // (parent element is introductory-content-div-con)


// 2. class = introductory-content-div.
            // (parent element is introductory-content-div-con)
// 3. class = robot-circular-btn.
            // (parent element is robot-circular-btn)


// 4. class = faq-con.
            // (parent element is #container)
// 5. class = faq-h3.
            // (parent element is faq-content)


// 6. lis in class = question-and-answers-list
            // (parent element is faq-content)


// 7. class = start-a-new-conversation-btn
            // (parent element is faq-content)


let introductoryContentBackgroundImage = 
                            document.querySelector(".introductory-content-background-image");

let introductoryContentDiv = 
                            document.querySelector(".introductory-content-div");

let robotCircularBtn0 = 
                document.querySelector(".robot-circular-btn-0");

let faqCon = 
        document.querySelector(".faq-con");

let robotCircularBtn = 
                document.querySelector(".robot-circular-btn");
        
let faqH3 = 
    document.querySelector(".faq-h3");

let questionAndAnswersListLis = 
                            document.querySelectorAll(".question-and-answers-list > li");

let startANewConversationBtn =                           
                        document.querySelector(".start-a-new-conversation-btn");

function applyClasses() {
    introductoryContentBackgroundImage.classList.add("show-ele");
    introductoryContentDiv.classList.add("show-ele");
    robotCircularBtn0.classList.add("show-ele");
    faqCon.classList.add("show-ele");
    robotCircularBtn.classList.add("show-ele");
    faqH3.classList.add("show-ele");
    questionAndAnswersListLis[0].classList.add("show-ele");
    questionAndAnswersListLis[1].classList.add("show-ele"); 
    questionAndAnswersListLis[2].classList.add("show-ele"); 
    questionAndAnswersListLis[3].classList.add("show-ele"); 
    startANewConversationBtn.classList.add("show-ele");
}

// console.log(window)
window.onload = () => {
    // console.log("loaded")
    applyClasses();
}



