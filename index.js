

const which_language_i_know_secound_row = document.querySelector(".which_language_i_know_secound_row");
const which_language_i_know_third_row = document.querySelector(".which_language_i_know_third_row");
const first_project_for_me = document.querySelector(".first_project_for_me");
const main_content =document.querySelector(".main_content");
const first_project_for_me_seen_here = document.querySelector(".first_project_for_me_seen_here")
window.addEventListener("scroll",()=>{
    scroll = scrollY
    if (scroll > 50){
        which_language_i_know_secound_row.style.display = "flex"
    }
    if (scroll > 250){
        which_language_i_know_third_row.style.display = "flex"
    }
})
first_project_for_me.addEventListener("click",()=>{
    main_content.style.display = "none"
    first_project_for_me_seen_here.style.display = "block"
})

const main_body = document.querySelector(".main_body");
const BOX_ONE = document.querySelector(".BOX_ONE")
const create_account = document.querySelector(".create_account")
const widrawn_money = document.querySelector(".WIDRAWN_MONEY")
const deposit_money = document.querySelector(".DEPOSITE_MONEY")
const see_money = document.querySelector(".see_money")
const submit = document.querySelector(".submit")
const information_see = document.querySelector(".information_see")
function BOX_ONE_in_js(){
    main_body.style.display = "none"
    create_account.style.display = "block"
}

function BOX_TWO_in_js(){
    main_body.style.display = "none"
    widrawn_money.style.display = "block"
}
function BOX_THREE_in_js(){
    main_body.style.display = "none"
    deposit_money.style.display = "block"
}
function back(){
    main_body.style.display = "block"
    create_account.style.display = "none"
    widrawn_money.style.display = "none"
    deposit_money.style.display = "none"
    see_money.style.display = "none"
}
function BOX_FOUR_in_js(){
    main_body.style.display = "none"
    see_money.style.display = "block"
}
submit.addEventListener("click",()=>{
    see_money.style.display = "none"
    information_see.style.display = "block"
})