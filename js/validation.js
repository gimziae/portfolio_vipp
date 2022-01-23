const form = document.querySelector("#member");
const btnSubmit = form.querySelector("input[type=submit]");

console.log(btnSubmit);

btnSubmit.addEventListener("click", e=>{

    if(!isAgree("agree")) e.preventDefault();
if(!isText("first", 2)) e.preventDefault();
if(!isText("family", 2)) e.preventDefault();
if(!isText("id", 8)) e.preventDefault();
if(!isPwd("pwd","pwdCk",8)) e.preventDefault();
if(!isText("zipcode", 1)) e.preventDefault();
if(!isText("detail_address", 1)) e.preventDefault();
if(!isSelect("nationality")) e.preventDefault();
if(!isCheck("address")) e.preventDefault();
if(!isText("email", 1)) e.preventDefault();
if(!isSelect("domain")) e.preventDefault();
})

//인증함수 정의
//약관동의
function isAgree(name){

    let input = form.querySelector(`[name=${name}]`)
    let isChecked = false;
    
    if(isChecked){

        const errMsgs = input.closest("div").querySelectorAll("p");
        if(errMsgs.length > 0) input.closest("div").querySelector("p").remove(); 

        return true;
    }else{

        const errMsgs = input.closest("div").querySelectorAll("p");
        if(errMsgs.length > 0) input.closest("div").querySelector("p").remove(); 

        const errMsg = document.createElement("p");
        errMsg.append(`Please check here.`);
        input.closest("div").append(errMsg);

        return false;
    }
}
// text 길이 인증함수 
function isText(name, len){

    if(len === undefined) len = 5;

    let input = form.querySelector(`[name=${name}]`);
    let txt = input.value;

    if(txt.length >= len){
        const errMsgs = input.closest("td").querySelectorAll("p");
        if(errMsgs.length > 0){
            input.closest("td").querySelector("p").remove();
            input.style.borderBottom = "1px solid #ccc";
        }

        return true;
    }else{
        const errMsgs = input.closest("td").querySelectorAll("p");
        if(errMsgs.length > 0){
            input.closest("td").querySelector("p").remove();
            input.style.borderBottom = "1px solid #ccc";
        }

        input.style.borderBottom = "1px solid red";
        const errMsg = document.createElement("p");
        errMsg.append(`Please enter more than ${len} letters.`);
        input.closest("td").append(errMsg);

        return false;
    }
}

//select 
function isSelect(name){
    let sel = form.querySelector(`[name=${name}]`);
    let sel_index = sel.options.selectedIndex;
    let val = sel[sel_index].value;

    if(val !== ""){
        const errMsgs = sel.closest("td").querySelectorAll("span");
        if(errMsgs.length > 0){
            sel.closest("td").querySelector("span").remove();
        }
        
        sel.style.borderBottom = "1px solid #ccc";
        return true;
    }else{
        const errMsgs = sel.closest("td").querySelectorAll("span");
        if(errMsgs.length > 0){
            sel.closest("td").querySelector("span").remove();
        }

        const errMsg = document.createElement("span");
        errMsg.append(`Please select a ${name}.`)
        sel.closest("td").append(errMsg);
        sel.style.borderBottom = "1px solid red";
        
        return false;
    }
}

//radio
function isCheck(name){
    let inputs = form.querySelectorAll(`[name=${name}]`);
    let isChecked = false;

    for(let el of inputs){
        if(el.checked)isChecked = true;
     }
     
    if(isChecked){
 
        const errMsgs = inputs[0].closest("td").querySelectorAll("p");
        if(errMsgs.length > 0) inputs[0].closest("td").querySelector("p").remove(); 
 
        return true;
    }else{
 
        const errMsgs = inputs[0].closest("td").querySelectorAll("p");
        if(errMsgs.length > 0) inputs[0].closest("td").querySelector("p").remove(); 
 
        const errMsg = document.createElement("p");
        errMsg.append(`Please select ${name}`);
        inputs[0].closest("td").append(errMsg);
 
        return false;
     }


}

//pwd
function isPwd(name1, name2, len){
    let pwd = form.querySelector(`[name=${name1}]`);
    let pwdCk = form.querySelector(`[name=${name2}]`);

    let pwd_val = pwd.value;
    let pwdCk_val = pwdCk.value;

    const num = /[0-9]/;
    const eng = /[a-z]/;

    if(pwd_val === pwdCk_val && pwd_val >= len && num.test(pwd_val) && eng.test(pwd_val)){

        const errMsgs = pwd.closest("td").querySelectorAll("p");
        if(errMsgs.length > 0){
            pwd.closest("td").querySelector("p").remove();
        }
        pwd.style.borderBottom = "1px solid #ccc"

        return true;
    }else{
        const errMsgs = pwd.closest("td").querySelectorAll("p");
        if(errMsgs.length > 0){
            pwd.closest("td").querySelector("p").remove();
        }

        const errMsg = document.createElement("p");
        errMsg.append(`Please enter at least ${len} letters, including lowercase letters and numbers.`);
        pwd.closest("td").append(errMsg);
        pwd.style.borderBottom = "1px solid red"
        

        return false;
    };

    if(pwd_val === pwdCk_val){

        const errMsgs = pwdCk.closest("td").querySelectorAll("p");
        if(errMsgs.length > 0){
            pwdCk.closest("td").querySelector("p").remove();
        }

        return true;
    }else{

        const errMsgs = pwdCk.closest("td").querySelectorAll("p");
        if(errMsgs.length > 0){
            pwdCk.closest("td").querySelector("p").remove();
        }

        const errMsg = document.createElement("p");
        errMsg.append(`Please enter the same password.`);
        pwdCk.closest("td").append(errMsg);
        pwdCk.style.borderBottom = "1px solid red"

        return false;
    }
}



