(()=>{var c={API_BASE_URL:"https://smartcart-ecommerce.vercel.app"};async function l(e,t){try{return(await fetch(`${c.API_BASE_URL}/autoMail`,{method:"post",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,emailType:t})})).status}catch(n){console.log(n)}}function o(e,t){t.innerHTML=`<p>${e}</p>`,t.classList.add("show"),setTimeout(()=>{t.classList.remove("show")},5e3)}var d=new URLSearchParams(window.location.search),u=d.get("class"),s=document.querySelector(".notificationPopup");document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("signupBlock"),t=document.getElementById("signinBlock");u==="login"?(t.style.display="flex",e.style.display="none",m()):u==="signup"&&(t.style.display="none",e.style.display="flex",p())});var m=()=>{document.getElementById("loginEmail").focus();let e=document.getElementById("signinForm");e.addEventListener("submit",async t=>{t.preventDefault();let n=new FormData(e),i=Object.fromEntries(n.entries());try{let a=await fetch(`${c.API_BASE_URL}/signin`,{method:"post",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});a.status===200?(window.location.href="products.html?class=allProduct",setTimeout(()=>{o("successfully loged in to your account! now you can proceed to checkout or continue to shopping!",s)},3e3)):a.status===404?o('Email not registered! try <a href="userRegistration.html?class=signup">Signup</a> instead.',s):a.status===401?(o("invalid password! try again.",s),document.getElementById("loginPassword").focus()):o("some error occurred!",s)}catch(a){console.log(a),o("some internal server error occurred!",s)}})},p=()=>{document.getElementById("name").focus();let e=document.getElementById("signupForm");e.addEventListener("submit",async t=>{t.preventDefault();let n=new FormData(e),i=Object.fromEntries(n.entries());if(console.log(i),!/^(?=.*[^a-zA-Z0-9\s]).{8,}$/.test(i.password)){o("password should be minimum 8 character long and contain atleast 1 special character.",s),document.getElementById("signupPassword").focus();return}try{let r=await fetch(`${c.API_BASE_URL}/signup`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});console.log(r.status),r.status===201?(l(i,"accountCreationConfirmation"),o("Account Successfully created! Log in to your account to continue with your shopping.",s),setTimeout(()=>{window.location.href="userRegistration.html?class=login"},8e3)):r.status===409?(o("This email is already registered! Try login instead.",s),document.getElementById("signupEmail").focus()):r.status===422?(o("Provided email address is non-existent! Recheck your email address.",s),document.getElementById("signupEmail").focus()):o("Some error occurred while creation of your account! Try again after some time",s)}catch{o("Failed to connect to the server. Please check your internet connection.",s)}})};})();
