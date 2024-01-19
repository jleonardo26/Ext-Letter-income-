

function generar(){

    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let ssn = document.getElementById("ssn").value;
    let mkpid = document.getElementById("mkpid").value;
    let dob = document.getElementById("dob").value;

    let ssnSpan = document.getElementById("ssnSpan");
    let mkpidSpan = document.getElementById("mkpidSpan");
    let nameLastname = document.getElementById("nameLastname");
    let nameSpan = document.getElementById("nameSpan");
    let dobSpan = document.getElementById("dobSpan")
    
    ssnSpan.innerHTML = ssn;
    mkpidSpan.innerHTML = mkpid;
    nameLastname.innerHTML = name + " " + lastname;
    nameSpan.innerHTML= name;
    lastnameSpan.innerHTML = lastname;
    dobSpan.innerHTML = dob;

    document.getElementById("cartahecha").scrollIntoView({ behavior: 'smooth' });


}

function limpiar() {
    
    document.querySelector('form').reset();
    document.getElementById("ssnSpan").innerHTML = "";
    document.getElementById("mkpidSpan").innerHTML = "";
    document.getElementById("nameSpan").innerHTML = "";
    document.getElementById("lastnameSpan").innerHTML = "";
    document.getElementById("dobSpan").innerHTML = "";
}