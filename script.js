document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    
    const name = document.querySelector("#regForm input[type='text']").value;
    const email = document.querySelector("#regForm input[type='email']").value;
    
    document.getElementById("confirmation").textContent = 
        `Thanks, ${name}! We've sent a confirmation to ${email}.`;
    
    
    this.reset();
});
