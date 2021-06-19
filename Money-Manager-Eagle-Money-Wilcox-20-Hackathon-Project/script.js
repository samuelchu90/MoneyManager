var totalPrice = 0;
var totalUtility = 0;
var currentCat = ""
var listOfUtilities = []
var theValue = 0;
var theValues = {
  "food": 0,
  "entertainment": 0,
  "housing": 0,
  "transportation": 0,
  "utilities": 0,
  "clothing":0,
  "medical":0,
  "insurance":0,
  "household":0,
  "education":0
}
function createTheValues(){
  for(var key in prices){
    theValues[key]=prices[key]*utility[key];
}
  //alert(theValues["food"]);
}
function updateTheFinalValue(){
  for(var key in theValues){
    theValue = theValue + theValues[key];
  }
}
var utility = {
  "food": 0,
  "entertainment": 0,
  "housing": 0,
  "transportation": 0,
  "utilities": 0,
  "clothing":0,
  "medical":0,
  "insurance":0,
  "household":0,
  "education":0
};
var prices = {
    "food": 0,
  "entertainment": 0,
  "housing": 0,
  "transportation": 0,
  "utilities": 0,
  "clothing":0,
  "medical":0,
  "insurance":0,
  "household":0,
  "education":0
};
var utilityProportions = {
    "food": 0,
  "entertainment": 0,
  "housing": 0,
  "transportation": 0,
  "utilities": 0,
  "clothing":0,
  "medical":0,
  "insurance":0,
  "household":0,
  "education":0
};
var priceProportions = {
    "food": 0,
  "entertainment": 0,
  "housing": 0,
  "transportation": 0,
  "utilities": 0,
  "clothing":0,
  "medical":0,
  "insurance":0,
  "household":0,
  "education":0
};

function getPrice(){
  return document.getElementById("value").innerText;
}
//alert(getPrice());

function getUtilityFactor(){
  // Selecting the input element and get its value 
  var inputVal = document.getElementById("util").value;
  inputVal = parseInt(inputVal)
  totalUtility = totalUtility + inputVal;
  utility[currentCat] = utility[currentCat] + inputVal;
  //alert(utility[currentCat]);
  getUtilityProportions();
  createTheValues();
  updateTheFinalValue();
  checkValue();
  //alert(utilityProportions['food']);
}

function getPrice(){
  var inputVal2 = document.getElementById("priceofgood").value;
  inputVal2 = parseInt(inputVal2)
  totalPrice = totalPrice+inputVal2;
  prices[currentCat] = prices[currentCat]+inputVal2
  getPriceProportions();
  createTheValues();
  updateTheFinalValue();
  checkValue();
  document.getElementById(currentCat).innerHTML=prices[currentCat];
  //createPiechart();
  //alert(prices[currentCat]);
  //alert(priceProportions['food']);
}

function checkValue(){
  if(theValues['food']<prices['food']*4){
    document.getElementById("alertFood").innerHTML="Your expenditure on food is slightly more recreational than necessary, which can become problematic. Consider cutting food costs by eating at home and eating out less.";
  }
  if(theValues['entertainment']<prices['entertainment']*2){
    document.getElementById("alertEntertainment").innerHTML="Your expenditure on entertainment has been marked at extermely unneccesary. Perhaps only spend money here when you really need a break.";
  }
  
  if(theValues['housing']<prices['housing']*7){
    document.getElementById("alertHousing").innerHTML="Your expenditure on housing is less than extremely necessary. Be careful of spending money in housing because of loans and expensive prices.";
  }
  
  if(theValues['housing']<prices['housing']*7){
    document.getElementById("alertHousing").innerHTML="Your expenditure on housing is less than extremely necessary. Be careful of spending money in housing because of loans and expensive prices.";
  }
  
  if(theValues['transportation']<prices['transportation']*5){
    document.getElementById("alertTransportation").innerHTML="Your expenditure on transportation is more unneccesary than necessary. Transportation can be quite expensive.";
  }
  
  if(theValues['utilities']<prices['utilities']*5){
    document.getElementById("alertUtilities").innerHTML="Your expenditure on utilities is considered more unneccesary than necessary.";
  }
  
  if(theValues['clothing']<prices['clothing']*5){
    document.getElementById("alertClothing").innerHTML="Your expenditure on clothing is more unneccesary than neccessary. Cutting costs in this area may be easier than most categories.";
  }
  
  if(theValues['medical']<prices['medical']*2){
    document.getElementById("alertMedical").innerHTML="Your expenditure on medical expenses is extremely unneccesary. While keeping your health as the number 1 priorty, you could cut payments in this area, for example by using prescription coupons or government aid.";
  }
  
  if(theValues['insurance']<prices['insurance']*5){
    document.getElementById("alertInsurance").innerHTML="Your expenditure on insurance is labelled as extremely unnecessary.";
  }
  
  if(theValues['household']<prices['household']*5){
    document.getElementById("alertHousehold").innerHTML="Your expenditure on household goods leans to the unnecssary side. This is another area were cutting costs may be easier.";
  }
  
  if(theValues['education']<prices['education']*5){
    document.getElementById("alertEducation").innerHTML="Because your expenditure on education is more unnecssary than neccessary, you may consider cheaper options such as a public school or a community college.";
  }
}

function getIncome(){
  var income = document.getElementById("incomeInput").value;
  //alert(income);
}


function getPriceProportions(category){
  for(var key in prices){
    priceProportions[key] = prices[key]/totalPrice;
  }
}

function getUtilityProportions(category){
  for(var key in utility){
    utilityProportions[key] =utility[key]/prices[key];
  }
}

//payments of over 
//income
//food if over 30% of food is below 5.
//utiliy*cons
//should be at least 4*cost,
//entertainment should be at least 2*cost
//housing should be at least 8*cost
//transportation should be at least 7
//utilities should be at least 8
//clothing should be at least 5
//medical should be at least 9
//insurance 9
//household 3
//education 7
//check if more than 30% of stuff is being used on recreation
//for everything should be *6cost
//price*utility

function getFood(){
  currentCat = "food";
}
function getEnter(){
  currentCat = "entertainment";
}
function getHousing(){
  currentCat = "housing";
}
function getTransportation(){
  currentCat = "transportation";
}
function getUtilities(){
  currentCat = "utilities";
}
function getClothing(){
  currentCat = "clothing";
}
function getMedical(){
  currentCat = "medical";
}
function getInsurance(){
  currentCat = "insurance";
}
function getHousehold(){
  currentCat = "household";
}
function getEducation(){
  currentCat = "education";
}
/*
window.onload = function() {
       //when the document is finished loading, replace everything
       //between the <a ...> </a> tags with the value of splitText
   document.getElementById("myLink").innerHTML=prices["food"];
} 

document.getElementById("link").innerHTML=prices["food"];


createPiechart();
function createPiechart(){
  anychart.onDocumentReady(function() {
  
    // set the data
    var data = [
        {x: "Food", value: prices["food"]},
        {x: "Black or African American", value: 1},
        {x: "American Indian and Alaska Native", value: 1},
        {x: "Asian", value: 12},
        {x: "Native Hawaiian and Other Pacific Islander", value: 1},
        {x: "Some Other Race", value: 1},
        {x: "Two or More Races", value: 1}
    ];
  
    // create the chart
    var chart = anychart.pie();
  
    // set the chart title
    chart.title("Population by Race for the United States: 2010 Census");
  
    // add the data
    chart.data(data);
  
    // display the chart in the container
    chart.container('container');
    chart.draw();
  
  });
}
*/