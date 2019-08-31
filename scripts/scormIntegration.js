//inicializamos el objeto scorm
var scorm = pipwerks.SCORM

function init(){
    scorm.version = "1.2";
    Mensaje("Iniciando el Curso.");
    var respuesta = scorm.init();
    Mensaje("Curso iniciado correctamente? " + respuesta);
}

//Asigna el curso como completado
function CompletarCurso(){
    Mensaje("Marcando curso como Completado.");
    var respuesta = scorm.set("cmi.core.lesson_status", "completed");
    Mensaje("Curso Completado? " + respuesta);
}

// Pregunta ala plataforma por el nombre del usuario
function ObtenerNombre(){
    var nombreUser = scorm.get("cmi.core.student_name");
    document.getElementById('Nombre').innerHMTL = '<b>' + nombreUser + '</b>';
}

//Termina la conexion con el LMS
function end(){
    Mensaje("Conexion terminada.");
    var respuesta = scorm.quit();
    Mensaje("Termino correctamente? " + respuesta);
}

//Manda un Alert al usuario
function Mensaje(msg){
    alert(msg);
}

//Se ejecuta al cargar la pagina
window.onload = function(){
    init();
}

//Se ejecuta al terminar la pagina
window.onunload = function(){
    end();
}
