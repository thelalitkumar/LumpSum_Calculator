var rate = document.getElementById("rate");
var tenure = document.getElementById("tenure");
var amount = document.getElementById("amount");
var ans = document.getElementById("ans");
var reset = document.getElementById("reset");
var returns = document.getElementById("returns");
var show = document.getElementById("show");
$("#worth").hide();
// $("#ans").hide();
// $("#returns").hide();
function error(){
    alert("Please Fill");
    console.log("no\n");
    // get();
    console.log(amount, rate, tenure, "po");
    console.log(amount);
};
function view(amount, res){
    $("#worth").slideDown();
    $("#corpus").text("Corpus Value : ₹" + res);
    $("#earnings").text("Total Earnings : ₹" + parseFloat( res-amount));
    $("#deposited").text("Total Deposited Amount: ₹" + amount);
}

function  get(amount, tenure, rate){
    console.log(amount, rate, tenure, "po");
    let res= amount*Math.pow((1+(rate/100)), tenure);
    res = Math.ceil(res);
    ans.innerText = "₹" + res;
    view(amount, res);
    // $("#ans").show();
    // $("#ans").addClass("bcgToggle");
    console.log(res);
};

show.addEventListener('click', function(event){
    console.log(amount.value);
    // let rate = rate.value;
    // let tenure = tenure.value;
    returns.innerText = "Returns After (" + tenure.value +"years)";
    if(rate.value == "") error();
    else if(tenure.value == "") error();
    else if(amount.value == "" ) error();
    else get(amount.value, tenure.value, rate.value);
});

reset.addEventListener('click', function(){
    // let rate = document.getElementById("rate");
    // let tenure = document.getElementById("tenure");
    // let amount = document.getElementById("amount");
    rate.value="";
    amount.value="";
    tenure.value="";
    ans.textContent = "";
    returns.innerText = "Returns After";
    $("#worth").slideUp();
});
