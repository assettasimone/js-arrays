const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
let fourthTeacher = null;
let teacherSelector = 4;
fourthTeacher = teachers[teacherSelector - 1];
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teacherSelector = 5;
const newTeacher = 'Patrick';

teachers[teacherSelector - 1] = newTeacher;


console.log(teachers)

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
let lastTeacher = null;

lastTeacher = teachers.pop();

console.log('Ultimo insegnante rimosso ' + lastTeacher)

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
let firstTeacher = null;

firstTeacher = teachers.shift();

console.log('primo elemento rimosso dalla lista ' + firstTeacher);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

teachers.push('Vanessa');

console.log(teachers);
// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

teachers.unshift('Sarah');
console.log(teachers);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex

let lewisIndex = null;
const lostTeacher = 'Lewis';

for (let i = 0; i < teachers.length; i++) {

  if (teachers[i] === lostTeacher) {
    lewisIndex = i;
  }
}

console.log(lewisIndex);


// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
let isTeachersEmpty = null;

if (teachers.length === 0) {
  isTeachersEmpty = true;
}
else {
  isTeachersEmpty = false;
}

console.log(isTeachersEmpty);



