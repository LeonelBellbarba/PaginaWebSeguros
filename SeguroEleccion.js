function getSelecction(date){
    var nombre = document.getElementById("nombre_id").value
    var apellido = document.getElementById("apellido_id").value
    var dni = document.getElementById("dni_id").value
    var email = document.getElementById("email_id").value
    var telefono = document.getElementById("telefono_id").value

    var contrato= document.getElementById("answer")
    
    if(nombre === "" || apellido === "" || dni === "" || email === "" || telefono === ""){
        contrato.innerHTML = "Todos los campos son obligatorios"
    }else{
        contrato.innerHTML = "Gracias por elegir nuestra empresa de Seguros<br>" + 
        "Nombre: "  + nombre   + "<br>" + 
        "Apellido:" + apellido + "<br>" + 
        "DNI: "     + dni      + "<br>" +
        "email: "   + email    + "<br>" +  
        "telefono: "+ telefono + "<br>" +
        "Seguro: "  + date;

    }
    return contrato

}