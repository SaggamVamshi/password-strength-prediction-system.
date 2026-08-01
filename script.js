function togglePassword(){
    let input=document.getElementById("password");
    input.type=input.type==="password"?"text":"password";
}

function analyze(){
    let pwd=document.getElementById("password").value;
    if(!pwd) return;

    let score=0;
    let hasUpper=/[A-Z]/.test(pwd);
    let hasLower=/[a-z]/.test(pwd);
    let hasNumber=/[0-9]/.test(pwd);
    let hasSpecial=/[^A-Za-z0-9]/.test(pwd);

    if(hasUpper) score+=20;
    if(hasLower) score+=20;
    if(hasNumber) score+=20;
    if(hasSpecial) score+=20;
    if(pwd.length>=10) score+=20;

    document.getElementById("score").innerText=score;
    document.getElementById("scoreCircle").innerText=score;

    let strength="Weak";
    let color="red";

    if(score>=80){ strength="Strong"; color="green"; }
    else if(score>=50){ strength="Medium"; color="orange"; }

    document.getElementById("strengthText").innerText="Strength: "+strength+" ("+score+"%)";
    document.getElementById("statusCircle").innerText=strength;
    document.getElementById("progress").style.width=score+"%";

    let degrees=score*3.6;
    document.getElementById("circle").style.background=
        `conic-gradient(${color} ${degrees}deg,#222 ${degrees}deg)`;

    let starCount=Math.round(score/20);
    let stars="";
    for(let i=1;i<=5;i++){
        stars+=i<=starCount?"★":"☆";
    }
    document.getElementById("stars").innerText=stars;

    // Entropy
    let charset=0;
    if(hasLower) charset+=26;
    if(hasUpper) charset+=26;
    if(hasNumber) charset+=10;
    if(hasSpecial) charset+=32;

    let entropy=(pwd.length*Math.log2(charset||1)).toFixed(2);
    document.getElementById("entropy").innerText=entropy+" bits";

    let guesses=Math.pow(charset||1,pwd.length);
    let years=(guesses/1e9/31536000).toFixed(2);
    document.getElementById("crackTime").innerText=years+" Years";
    document.getElementById("bruteforce").innerText=years+" Years";

    let commonList=["123456","password","qwerty","admin"];
    if(commonList.includes(pwd)){
        document.getElementById("common").innerText="Found";
        document.getElementById("dictionary").innerText="Vulnerable";
    }else{
        document.getElementById("common").innerText="Not Found";
        document.getElementById("dictionary").innerText="Secure";
    }

    document.getElementById("pattern").innerText=
        /(.)\1\1/.test(pwd)?"Repeating Pattern":"Secure";

    document.getElementById("breach").innerText=
        score>=80?"Low Risk":"High Risk";

    updateRequirement("upper",hasUpper);
    updateRequirement("lower",hasLower);
    updateRequirement("number",hasNumber);
    updateRequirement("special",hasSpecial);
    updateRequirement("length",pwd.length>=10);

    saveHistory(score,strength);
}

function updateRequirement(id,condition){
    let el=document.getElementById(id);
    el.className=condition?"good":"bad";
}

function saveHistory(score,strength){
    let history=JSON.parse(localStorage.getItem("analysisHistory"))||[];
    history.unshift("Score: "+score+" | "+strength+" | "+new Date().toLocaleTimeString());
    if(history.length>5) history.pop();
    localStorage.setItem("analysisHistory",JSON.stringify(history));
    loadHistory();
}

function loadHistory(){
    let history=JSON.parse(localStorage.getItem("analysisHistory"))||[];
    let list=document.getElementById("historyList");
    list.innerHTML="";
    history.forEach(item=>{
        let li=document.createElement("li");
        li.innerText=item;
        list.appendChild(li);
    });
}

function downloadPDF(){
    const { jsPDF } = window.jspdf;
    const doc=new jsPDF();

    doc.setFontSize(18);
    doc.text("Password Strength Analyzer Report",20,20);
    doc.setFontSize(12);
    doc.text("Score: "+document.getElementById("score").innerText+"/100",20,40);
    doc.text(document.getElementById("strengthText").innerText,20,50);
    doc.text("Entropy: "+document.getElementById("entropy").innerText,20,60);
    doc.text("Crack Time: "+document.getElementById("crackTime").innerText,20,70);
    doc.text("Dictionary Attack: "+document.getElementById("dictionary").innerText,20,80);
    doc.text("Breach Risk: "+document.getElementById("breach").innerText,20,90);

    doc.save("AI_Password_Security_Report.pdf");
}

loadHistory();