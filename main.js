class TurnoMedico {
    constructor(paciente, especialidad, dia, horario) {
      this.paciente = paciente;
      this.especialidad = especialidad;
      this.dia = dia;
      this.horario = horario
    }
    imprimirTurnos() {
        alert("Turno médico para " + this.paciente + ", con la especialidad de " + this.especialidad + ", el día " + this.dia + " en el horario " + this.horario);
    }
};
  
const especialidades = [
    "Pediatría",
    "Cardiología",
    "Dermatología"
];
const diasDisponibles ={
    "Pediatría": ["2023-10-21", "2023-10-22", "2023-10-23"],
    "Cardiología": ["2023-10-21", "2023-10-22", "2023-10-23"],
    "Dermatología": ["2023-10-21", "2023-10-22", "2023-10-23"]
};
  
const turnosDisponibles = {
    "Pediatría": ["10:00 AM", "11:00 AM", "12:00 PM"],
    "Cardiología": ["9:00 AM", "10:00 AM", "11:00 AM"],
    "Dermatología": ["2:00 PM", "3:00 PM", "4:00 PM"]
};


function elegirHorario(especialidadSeleccionada, diaSeleccionado){
    console.log("Horarios disponibles:");
    let horarios = turnosDisponibles[especialidadSeleccionada];
    for (let i = 0; i < horarios.length; i++) {
        console.log(i + 1 + ". " + horarios[i]);
    }

    let horarioElegido = prompt("Ingrese el número del horario que desea:");
    
    if (horarioElegido >= 1 && horarioElegido <= horarios.length) {
      let horarioSeleccionado = horarios[horarioElegido - 1];
      console.log("Ha elegido el horario: " + horarioSeleccionado);

      let paciente = prompt("Ingrese nombre y apellido del paciente:");
      
      let turnoMedicoAgenado = new TurnoMedico(paciente, especialidadSeleccionada, diaSeleccionado, horarioSeleccionado);
      turnoMedicoAgenado.imprimirTurnos();

      
    } else {
      alert("Opción de horario inválida. Inténtalo nuevamente.");
      elegirHorario(especialidadSeleccionada, diaSeleccionado);
    }
} 

function elegirDia(especialidadSeleccionada){
    console.log("Días disponibles:");
    let dias = diasDisponibles[especialidadSeleccionada];
    for (let i = 0; i < dias.length; i++) {
        console.log(i + 1 + ". " + dias[i]);
    }

    let diaElegido = prompt("Ingrese el día que desea:");
    
    if (diaElegido >= 1 && diaElegido <= dias.length) {
      let diaSeleccionado = dias[diaElegido - 1];
      console.log("Ha elegido el día: " + diaSeleccionado);
      elegirHorario(especialidadSeleccionada, diaSeleccionado)
    } else {
      alert("Opción de día inválida. Inténtalo nuevamente.");
      elegirDia(especialidadSeleccionada);
    }
} 

function elegirEspecialidad(){
    let especialidadElegida = prompt("Ingrese el número de la especialidad que desea:");
  
    if (especialidadElegida >= 1 && especialidadElegida <= especialidades.length) {
        let especialidadSeleccionada = especialidades[especialidadElegida - 1];
        console.log("Ha elegido la especialidad: " + especialidadSeleccionada);
        elegirDia(especialidadSeleccionada);
    }else {
        alert("Opción de especialidad inválida. Inténtalo nuevamente.");
        elegirEspecialidad();
    }
};

alert("Bienvenidos al portal de turnos médicos del Hospital de la Salud");
console.log("Especialidades disponibles:");

especialidades.forEach((especialidad, i)=>{
    console.log ((i+1) + "." + especialidad);
});

elegirEspecialidad();