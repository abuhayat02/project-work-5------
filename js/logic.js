let donet = getId('my-donet');
let history = getId('my-history');
let transcriptionHistory = getId('history-transection');
let dontContent = getId("donet-contant")

donet.addEventListener('click', function(event){
    classAdd(donet , 'bg-lime-300')
    classAdd(transcriptionHistory,'hidden')
    classRemove(history , 'bg-lime-300')
    classRemove(dontContent , 'hidden')

    
})

history.addEventListener('click' , function(){
    classRemove(donet , 'bg-lime-300')
    classAdd(history , 'bg-lime-300');
    classRemove(transcriptionHistory , 'hidden')
    classAdd(dontContent,'hidden')


})