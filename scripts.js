const courses = {
  comunicacion1: { title: "Comunicación I", prereqs: "Ninguno" },
  taller_region: { title: "Taller de análisis de la realidad regional", prereqs: "Ninguno" },
  historia_psi: { title: "Historia del pensamiento psicológico", prereqs: "Ninguno" },
  bases_sociales: { title: "Bases sociales del comportamiento", prereqs: "Ninguno" },
  bases_biologicas: { title: "Bases biológicas del comportamiento", prereqs: "Ninguno" },
  electivo1: { title: "Electivo UFIN", prereqs: "Ninguno" },
  ciudadania1: { title: "Ciudadanía para el buen vivir I", prereqs: "Ninguno" },
  social1: { title: "Psicología social I", prereqs: "Bases biológicas del comportamiento" },
  ciclo1: { title: "Ciclo vital I", prereqs: "Ninguno" },
  psicoanalitica: { title: "Teoría psicoanalítica", prereqs: "Ninguno" },
  humanista: { title: "Teoría humanista", prereqs: "Ninguno" },
  taller_comunicacion: { title: "Taller de comunicación interpersonal", prereqs: "Ninguno" },
  ingles1: { title: "Inglés I", prereqs: "Ninguno" },
  social2: { title: "Psicología social II", prereqs: "Psicología social I" },
  ciclo2: { title: "Ciclo vital II", prereqs: "Ciclo vital I" },
  cognitiva: { title: "Teoría cognitiva", prereqs: "Ninguno" },
  sistemica: { title: "Teoría sistémica", prereqs: "Ninguno" },
  epistemologia: { title: "Epistemología", prereqs: "Ninguno" },
  ingles2: { title: "Inglés II", prereqs: "Inglés I" },
  integracion: { title: "Taller de integración", prereqs: "Teoría cognitiva, Teoría humanista, Teoría sistémica" },
  neuropsicologia: { title: "Neuropsicología", prereqs: "Bases biológicas del comportamiento" },
  psicop_infanto: { title: "Psicopatología infanto juvenil", prereqs: "Ciclo vital I" },
  metodo1: { title: "Metodología de la investigación I", prereqs: "Epistemología" },
  electivo2: { title: "Electivo UFIN", prereqs: "Ninguno" },
  ingles3: { title: "Inglés III", prereqs: "Inglés II" },
  organizacional: { title: "Psicología organizacional", prereqs: "Ninguno" },
  comunitaria: { title: "Psicología comunitaria", prereqs: "Psicología social II" },
  psicop_adulto: { title: "Psicopatología del adulto", prereqs: "Ninguno" },
  metodo2: { title: "Metodología de la investigación II", prereqs: "Metodología de la investigación I" },
  electivo3: { title: "Electivo UFIN", prereqs: "Ninguno" },
  ingles4: { title: "Inglés IV", prereqs: "Inglés III" },
  clinica: { title: "Psicología clínica", prereqs: "Psicopatología del adulto" },
  educacional: { title: "Psicología educacional", prereqs: "Ciclo vital I" },
  eval_neuro: { title: "Evaluación neurocognitiva", prereqs: "Ninguno" },
  metodo3: { title: "Metodología de la investigación III", prereqs: "Metodología de la investigación II" },
  seminario1: { title: "Seminario de licenciatura", prereqs: "Metodología de la investigación III" },
  eval_personalidad: { title: "Evaluación de la personalidad", prereqs: "Evaluación neurocognitiva" },
  interv_psicoedu: { title: "Intervención psicoeducativa", prereqs: "Psicología educacional" },
  interv_organizacional: { title: "Intervención organizacional", prereqs: "Psicología organizacional" },
  seminario2: { title: "Seminario de licenciatura II", prereqs: "Seminario de licenciatura I" },
  psicodiagnostico: { title: "Taller de psicodiagnóstico", prereqs: "Evaluación de la personalidad" },
  interv_clinica: { title: "Intervención clínica", prereqs: "Psicología comunitaria" },
  interv_comunitaria: { title: "Intervención comunitaria", prereqs: "Psicología comunitaria" },
  practica1: { title: "Práctica profesional I", prereqs: "Seminario de licenciatura I, Seminario de licenciatura II" },
  etica: { title: "Taller de ética profesional", prereqs: "Seminario de licenciatura I, Seminario de licenciatura II" },
  practica2: { title: "Práctica profesional II", prereqs: "Práctica profesional I" },
  examen: { title: "Examen de título", prereqs: "Práctica profesional I, Práctica profesional II" }
};

function showDetails(code) {
  const course = courses[code];
  document.getElementById("course-title").innerText = course.title;
  document.getElementById("course-prereqs").innerText = course.prereqs;
  document.getElementById("details").classList.remove("hidden");
}

function hideDetails() {
  document.getElementById("details").classList.add("hidden");
}
