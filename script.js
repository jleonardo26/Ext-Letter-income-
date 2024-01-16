


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

    document.getElementById("cartahecha").scrollIntoView({ behavior: 'smooth' });


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

function descargarPDF() {
    const elementoParaConvertir = document.querySelector('.ext-letter');
    const opciones = {
        margin: 10,
        filename: 'Self-Employment Letter',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Llama a la función html2pdf después de que la vista previa esté completamente renderizada
    html2pdf(elementoParaConvertir, opciones).from(elementoParaConvertir).outputPdf().then(function(pdf) {
        // Descargar el PDF
        const blob = new Blob([pdf], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = opciones.filename || 'documento.pdf';
        link.click();
    });
}


