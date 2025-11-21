
const jk = {
    "hello": "hi",
    "what is your favorite flower": "apple",
    "what is your name": "I am a chatbot",
    "what do you do every time": "My one and only work is to help the people",
    "is you can help me": "Yes, of course",
};

function d(){
    const b = document.querySelector(".b");
    const gh = document.querySelector(".gh").value;
    const gk = jk[gh];

    b.innerHTML += `
        <div class="msg">
            ${gk ? gk : "I don't understand."}
            <button class="k" onclick="yes(this)">DELETE</button>
        </div>
        `;
}

function yes(btn){
    btn.parentElement.remove();
}
