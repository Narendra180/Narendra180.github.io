let chatbotOpenButtonContainer = document.querySelector(".chatbot-open-button-container");
let chatbotIframe = document.getElementById("chatbot-iframe");
let closeChatbotIframeButton = document.querySelector(".multiplication-icon-div");

let hideChatbotOpenButtonContainerAndShowChatBotIframe = () => {
    chatbotIframe.classList.add("show-chatbot-iframe");
    chatbotOpenButtonContainer.classList.add("hide-chatbot-open-button-container");
}

let showChatbotOpenButtonContainerAndHideChatBotIframe = () => {
    const hideChatbotOpenButtonContainerAfter1Second = () => {
        chatbotOpenButtonContainer.classList.remove("hide-chatbot-open-button-container");
    }
    chatbotIframe.classList.remove("show-chatbot-iframe");
    setTimeout(hideChatbotOpenButtonContainerAfter1Second, 800);    
}

const handleIframeTransitionEnd = (e) => {
    if(e.target.classList.contains("show-chatbot-iframe")) {
        chatbotIframe.src = "chatbot.html";
    } else {
        chatbotIframe.src=""
    }
}

chatbotIframe.ontransitionend = handleIframeTransitionEnd;

chatbotOpenButtonContainer.addEventListener('click',
                                        hideChatbotOpenButtonContainerAndShowChatBotIframe);

closeChatbotIframeButton.addEventListener('click',
                                        showChatbotOpenButtonContainerAndHideChatBotIframe);