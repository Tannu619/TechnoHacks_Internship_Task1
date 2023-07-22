var InputString = "";
var HistoryString = "";

const InputBtnReff = document.getElementsByClassName("InputBtn");
const OutputReff = document.getElementById("output");
const HistoryReff = document.getElementById("history");

for(let i=0; i<InputBtnReff.length; i++){
    InputBtnReff[i].addEventListener('click',function(){

        if(InputBtnReff[i].value=="C"){
            OutputReff.value = "";
            HistoryString = "";
            HistoryReff.innerHTML = HistoryString;
        }
        else if(InputBtnReff[i].value=="="){
            OutputReff.value = eval(OutputReff.value);
        }
        else {
            InputString = InputBtnReff[i].value;
            OutputReff.value = OutputReff.value + InputString;
            HistoryString = OutputReff.value;
            HistoryReff.innerHTML = HistoryString;
            
            // console.log(OutputReff.value);

        }
    });
}