
//captcha number generateion
let x = Math.floor((Math.random() * 10)+1);
let y = Math.floor((Math.random() * 10)+1);
document.getElementById("demo").innerHTML=`${x} + ${y}`;
let captcha=x+y;
document.getElementById("captcha").innerHTML;

// number to words

var a = ['','One ','Two ','Three ','Four ', 'Five ','Six ','Seven ','Eight ','Nine ','Ten ','Eleven ','Twelve ','Thirteen ','Fourteen ','Fifteen ','Sixteen ','Seventeen ','Eighteen ','Nineteen '];
var b = ['', '', 'Twenty','Thirty','Forty','Fifty', 'Sixty','Seventy','Eighty','Ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return""; 
    var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'Rs. Only' : '';
    return str;
}

  document.getElementById('loan_amt').onkeyup = function () {
  document.getElementById('words').innerHTML = inWords(document.getElementById('loan_amt').value);
};

// form validation

function onSubmit(){
  var firstname=document.forms["loan-form"]["name"].value;
  var email=document.forms["loan-form"]["email"].value;
  var pan=document.forms["loan-form"]["pan"].value;
  var number=document.forms["loan-form"]["loan-amount"].value;
  var captcha=document.forms["loan-form"]["capt"].value;

  //validation

  if(firstname.length==0){
    document.getElementById("p1").innerHTML="Enter Full Name";
    document.getElementById("p1").style.color="red";
    return false;
  }

  if(email.length==0){
    document.getElementById("p2").innerHTML="Enter Valid Email";
    document.getElementById("p2").style.color="red";
    return false;
  }

  if(pan.length==0){
    document.getElementById("p3").innerHTML="Enter Valid PAN No";
    document.getElementById("p3").style.color="red";
    return false;
  }

  if(number.length==0){
    document.getElementById("p4").innerHTML="Enter Loan Amount";
    document.getElementById("p4").style.color="red";
    return false;
  }

  if(captcha.length==0){
    document.getElementById("p5").innerHTML="Enter valid Captcha";
    document.getElementById("p5").style.color="red";
    return false;
  }


  document.getElementById("p1").style.visibility=false;
  document.getElementById("p2").style.visibility=false;
  document.getElementById("p3").style.visibility=false;
  document.getElementById("p4").style.visibility=false;
  document.getElementById("p5").style.visibility=false;


  var user={
    firstname:firstname,
    email:email,
    pan:pan,
    number:number,
    captcha:captcha
  }
  localStorage.setItem("user",JSON.stringify(user));

  if(x+y==captcha){
    alert("User Created Successfully");
    location.assign("/thankyou.html");
    return false;
  }else{
    document.getElementById("p6").innerHTML="Invalid Captcha";
    document.getElementById("p6").style.color="red";
    return false;
  }


}

function getUserName(){
  var userStr=localStorage.getItem("user");
  var user= JSON.parse(userStr);

  console.log(user);

  var arr=user.firstname.split(" ");
  document.getElementById("h5").innerHTML += `${user.firstname}`;
  document.getElementById("h4").innerHTML += `${user.email}`;

  generateOtp();

}
var otp;
function generateOtp(){
  otp=Math.floor(Math.random() *10000);
  console.log(otp);
}

function verifySubmit(){
  var text = document.getElementById("text").value;

  if(otp==text){
    alert("Verified OTP Succesfully");
  }else{
    alert("Invalid OTP");
  }
}