
function generar(){

    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let ssn = document.getElementById("ssn").value;
    let mkpid = document.getElementById("mkpid").value;
    let income = document.getElementById("income").value;
    let dateSigned = document.getElementById("date-signed").value;

    let ssnSpan = document.getElementById("ssnSpan");
    let mkpidSpan = document.getElementById("mkpidSpan");
    let nameLastname = document.getElementById("nameLastname");
    let incomeSpan = document.getElementById("incomeSpan");
    let nameSpan = document.getElementById("nameSpan");
    let dateSignedSpan = document.getElementById("dateSignedSpan");
    
    ssnSpan.innerHTML = ssn;
    mkpidSpan.innerHTML = mkpid;
    nameLastname.innerHTML = name + " " + lastname;
    incomeSpan.innerHTML = income;
    nameSpan.innerHTML= name + " " + lastname;
    dateSignedSpan.innerHTML = dateSigned;


}

function limpiar() {
    
    document.querySelector('form').reset();
    
    document.getElementById("ssnSpan").innerHTML = "";
    document.getElementById("mkpidSpan").innerHTML = "";
    document.getElementById("nameLastname").innerHTML = "";
    document.getElementById("incomeSpan").innerHTML = "";
    document.getElementById("nameSpan").innerHTML = "";
    document.getElementById("dateSignedSpan").innerHTML = "";
}