function getId(id){
    let docsId = document.getElementById(id);
    return docsId;
}


function convartIntWithInput(element){
    let valueFormId =parseFloat(element.value);
    return valueFormId ;


}


function convartIntWithTag(element){
    let valueFormId = parseFloat(element.innerText);
    return valueFormId ;

}

function classAdd(element , className){

    element.classList.add(className);
}

function classRemove(element,className){
    element.classList.remove(className);
}
function showModal(){
    let alartBox = getId('alart-box');

    classRemove(alartBox , 'hidden')
    classAdd(alartBox , 'flex');
}
function closeModal(){
    let alartBox = getId('alart-box');
    classRemove(alartBox , 'flex')
    classAdd(alartBox , 'hidden');
}

function donetCalculation(btnId , inputBalanceId , oldBalanceId , balance ,loction) {
    // function donetCalculation() {
        let munth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let location = getId(loction)
        let donetButton = getId(btnId);
        let getDonet = getId(inputBalanceId);
        let balanceBox = getId(oldBalanceId);
        let mainBalance = getId(balance);
    
        donetButton.addEventListener('click', function () {
            let getDonetBalance = convartIntWithInput(getDonet);
            let oldbalance = convartIntWithTag(balanceBox);
            if (getDonetBalance > 0 && convartIntWithTag(mainBalance) >= getDonetBalance) {
                let myDate = new Date();
                let div = document.createElement('div')
                let detalse = getId("history-transection");
                div.innerHTML = ` 
                <div class="border bg-gradient-to-tr from-blue-200  to-fuchsia-100 rounded-md p-4 my-3 space-y-3">
                    <h1 class="text-sm md:text-xl font-bold">${getDonetBalance} Taka is Donated for famine- ${myDate.getFullYear()}  at ${location.innerText} Bangladesh</h1>
                    <p class=" font-normal text-xs text-black/70">Date :${week[myDate.getDay()]} ${munth[myDate.getMonth() + 1]} ${myDate.getDate()} ${myDate.getFullYear()} and time ${myDate.getHours()}:${myDate.getMinutes()} <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"></iframe></noscript> GMT +0600 (Bangladesh Standard Time)</p>
                </div>`;
                detalse.appendChild(div)
                balanceBox.innerText = getDonetBalance + oldbalance;
                mainBalance.innerText = convartIntWithTag(mainBalance) - (getDonetBalance + oldbalance)
    
    
                showModal();
                getDonet.value="";
    
            } else {
                alert('somting wrong');
                return;
            }
    
        })
    
    }


    function blogs(){
        window.location.href = './blog.html'
    }

    function home(event){
        window.location.href = './index.html'
    }