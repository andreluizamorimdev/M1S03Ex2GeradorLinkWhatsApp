function generateLinkMessage() {
    let phoneNumber = Number(document.getElementById("phoneNumber").value);
    let message = document.getElementById("message").value;
    let link;
    let linkWhatsapp = document.getElementById("linkWhatsapp");
    if (phoneNumber != "" && message != "") {
        link = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
        console.log(link);
        let linkWhatsapp = document.getElementById("linkWhatsapp");
        linkWhatsapp.innerHTML = `<a href="${link}" target="_blank">Link</a>`;
    } else {
        alert("Por favor digite um número de telefone e uma mensagem validas!");
    }


}
