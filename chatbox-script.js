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

let robotCircularBtn = 
                document.querySelector(".robot-circular-btn");

let faqCon = 
        document.querySelector(".faq-con");
        
let faqH3 = 
    document.querySelector(".faq-h3");

let questionAndAnswersListLis = 
                            document.querySelectorAll(".question-and-answers-list > li");

let startANewConversationBtn =                           
                        document.querySelector(".start-a-new-conversation-btn");


const setShowEle = (...eleWhereShowEleNeedToBeSet) => {
    console.log(eleWhereShowEleNeedToBeSet);
    let setShow = () => {
        eleWhereShowEleNeedToBeSet.forEach((ele) => {
            ele.classList.add("show-ele");
        })
    }
    return () => {
        setTimeout(setShow,1);
    }
}

setShowEle(introductoryContentBackgroundImage)();

introductoryContentBackgroundImage.ontransitionend = setShowEle(introductoryContentDiv);
robotCircularBtn0.classList.add("show-ele");

introductoryContentDiv.ontransitionend = setShowEle(faqCon, robotCircularBtn);

faqCon.ontransitionend = setShowEle(faqH3);

faqH3.ontransitionend = setShowEle(questionAndAnswersListLis[0]);
questionAndAnswersListLis[0].ontransitionend = setShowEle(questionAndAnswersListLis[1]);
questionAndAnswersListLis[1].ontransitionend = setShowEle(questionAndAnswersListLis[2]);
questionAndAnswersListLis[2].ontransitionend = setShowEle(questionAndAnswersListLis[3]);

questionAndAnswersListLis[3].ontransitionend = setShowEle(startANewConversationBtn);

