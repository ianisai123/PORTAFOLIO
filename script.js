const galleries = {
  service: [
    "img/Login.png",
    "img/pantallaTicket.png",
    "img/pantallaTicketResuelto.png",
    "img/detalleTicket.png",
    "img/PrioridadTickets.png",
    "img/EstadoTicket.png",
    "img/reporte.png",
    "img/CorreoTicket.png",
    "img/CorreoTicketResuelto.png",
    "img/chat.png",
    "img/Menu.png",
    "img/ReporteExcel.png",
    "img/VaciarBD.png",
    "img/AgregarUsuario.png",
    "img/EliminarUsuario.png",
    "img/Configuracion.png",
  ],

  kiosk: [
    "img/Login.png",
    "img/InicioEmpleado.png",
    "img/Formatos.png",
    "img/SolicitudesEmpleados.png",
    "img/SolicitudesJefe.png",
    "img/subordinados.png",
    "img/Confirmar.png",
    "img/VerFormato.png",
    "img/InicioAdmin.png",
    "img/AgregarUsuario.png",
    "img/BuscarEmpleado.png",
    "img/EditarEmpleado.png",
    "img/SolitudesPendientes.png"
  ],
  expenses: [
    "img/gastos-placeholder.svg"
  ]
};

const details = {
  service: {
    title: "Service Desk ANTARA",
    description: "Sistema web para registrar, administrar y dar seguimiento a incidencias dentro de un entorno hospitalario.",
    bullets: [
      "Registro y consulta de incidencias.",
      "Organización de solicitudes internas por estado.",
      "Uso de base de datos para almacenar información.",
      "Interfaz web enfocada en claridad y facilidad de uso.",
      "Proyecto ideal para demostrar lógica backend y estructura empresarial."
    ]
  },
  kiosk: {
    title: "Kiosko de empleados",
    description: "Portal interno pensado para que los empleados consulten información laboral y realicen solicitudes de forma rápida.",
    bullets: [
      "Inicio de sesión para empleados.",
      "Consulta de perfil, horarios.",
      "Módulo de solicitudes para permisos o vacaciones.",
      "Panel administrativo para gestión de empleados.",
      "Proyecto enfocado en procesos empresariales y experiencia de usuario."
    ]
  },
  expenses: {
    title: "Aplicación de gestión de gastos para estudiantes",
    description: "Aplicación para controlar presupuesto mensual, registrar gastos por categoría y generar reportes.",
    bullets: [
      "Registro de presupuesto inicial mensual.",
      "Validación para evitar gastos mayores al dinero disponible.",
      "Creación de categorías personalizadas.",
      "Estadísticas visuales por categoría.",
      "Generación de reporte mensual en PDF."
    ]
  }
};

let currentGallery = "service";
let current = 0;

function openModal(project, index){
  currentGallery = project;
  current = index;
  document.getElementById("imageModal").classList.add("active");
  document.getElementById("modalImg").src = galleries[currentGallery][current];
}

function closeModal(){
  document.getElementById("imageModal").classList.remove("active");
}

function nextImg(){
  current = (current + 1) % galleries[currentGallery].length;
  document.getElementById("modalImg").src = galleries[currentGallery][current];
}

function prevImg(){
  current = (current - 1 + galleries[currentGallery].length) % galleries[currentGallery].length;
  document.getElementById("modalImg").src = galleries[currentGallery][current];
}

function openDetails(project){
  const data = details[project];
  document.getElementById("detailsTitle").textContent = data.title;
  document.getElementById("detailsDescription").textContent = data.description;
  document.getElementById("detailsList").innerHTML = data.bullets.map(item => `<li>${item}</li>`).join("");
  document.getElementById("detailsModal").classList.add("active");
}

function closeDetails(){
  document.getElementById("detailsModal").classList.remove("active");
}

window.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    closeModal();
    closeDetails();
  }
});
