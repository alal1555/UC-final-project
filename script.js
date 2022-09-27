function getAppointment(){
    let appTime = document.getElementById("appTime").value;
    let appFirstName = document.getElementById("appFirstName").value;
    let appLastName = document.getElementById("appLastName").value;
    if(appTime=="Select Appointment Time" ||appFirstName==""|| appLastName==""){
        document.getElementById("appointment").innerText="Please fill the missing Information";
    }else{
        document.getElementById("appointment").innerText="Appointment booked:";
        document.getElementById("appointment1").innerText="Patient name: "+appFirstName+" "+appLastName;
        document.getElementById("appointment2").innerText="Appointment time: "+appTime;
    }
}

function func() {
    alert("Please log in first to view clinic or book appoinntment!");
}