// menu
var todobtn = document.getElementById('todo');
var calendarbtn = document.getElementById('calendar');
var todoSchermo = document.getElementById('todoSchermo');
var calendarSchermo = document.getElementById('calendarSchermo');

todobtn.addEventListener('click', function(){
  todoSchermo.style.display = 'flex';
  calendarSchermo.style.display = 'none';
  todobtn.classList.add('main__Sx__menu--active');
  calendarbtn.classList.remove('main__Sx__menu--active');


})

calendarbtn.addEventListener('click', function(){
  todoSchermo.style.display = 'none';
  calendarSchermo.style.display = 'flex';
  todobtn.classList.remove('main__Sx__menu--active');
  calendarbtn.classList.add('main__Sx__menu--active');
})




// sezione todo list

// cambia layout in verticale
 function verticale(){
   var ori = document.querySelector(".ori");
   var ver = document.querySelector(".ver");
   ori.style.background = 'none';
   ver.style.background = '#1A2036';
   var elem = document.getElementById("dxSotto");
   elem.classList.add("cambia__orizontale");

   var boxes = document.querySelectorAll(".main__dx__sotto ul.task__list li");
   boxes.forEach((select) => {
      select.style.width = 90 + '%';
      select.style.height = 50 + 'px'
      select.style.padding = 30 + 'px'
      //select.classList.add("cambia__orizontale__box");
   });
 }

//cambia layout in orizontale
 function orizontale(){
   var ori = document.querySelector(".ori");
   var ver = document.querySelector(".ver");
   ori.style.background = '#1A2036';
   ver.style.background = 'none';
   var elem = document.getElementById("dxSotto");
   elem.classList.remove("cambia__orizontale")
   var boxes = document.querySelectorAll(".main__dx__sotto ul.task__list li");
   boxes.forEach((select) => {
        select.style.width = 130 + 'px';
        select.style.height = 160 + 'px'
   });
 }


 let form = document.querySelector('form.form');
 let ul = document.querySelector('.task__list');

 let htmlTemplate = function(todo){
   let li = `
           <li><p>${todo}</p><span class="del select">X</span></li>
   `
   ul.innerHTML += li;
 }

 form.addEventListener('submit', function(e){
     e.preventDefault();
     let todo = form.task.value.trim();
     if(todo.length){
        htmlTemplate(todo);
        form.reset();
     }
 })


 ul.addEventListener('click', e => {
     if(e.target.classList.contains('del')){
         e.target.parentElement.remove();
     }

 })

 // sezione calendario
 const date = new Date();

 const renderCalendar = () => {
   date.setDate(1);

   const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   // (+1,0) = prendere l'ultimo giorno del mese corrente;
   // (0) = l'ultimo giorno del mese precedente;
   // (1) = il primo giorno del mese corrente;
   const lastDay = new Date(date.getFullYear(),date.getMonth() +1,0).getDate();
   const monthDay = document.querySelector('.days')
   const firstDayIndex = date.getDay();
   const lastDayIndex = new Date(date.getFullYear(),date.getMonth() +1,0).getDay();
   const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
   const nextDays = 7 - lastDayIndex -1;

   // variabile days di appoggio
   let days = "";


   // selezionare il mese corrente attraverso l'index preso da getmonth() e passato con index in array.
   document.querySelector('.date h1').innerHTML = months[date.getMonth()];

   // scrive dentro p una data in formato stringa: giorno,mese, numero, anno: sat oct 23, 2021
   document.querySelector(".date p").innerHTML = new Date().toDateString();

   // ciclo per creare i div con dentro i giorni prev del mese
   for (var x = firstDayIndex; x > 0; x--) {
       days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
   }

   // ciclo per creare i div con dentro i giorni del mese
   for (var i = 1; i <= lastDay; i++) {
     if (
       i === new Date().getDate() &&
       date.getMonth() === new Date().getMonth()
     ) {
       days += `<div class="today">${i}</div>`;
     } else {
       days += `<div>${i}</div>`;
     }
   }

   // ciclo per creare i div con dentro i giorni next del mese
   for (var j = 1; j <= nextDays; j++) {
     days += `<div class="next-date">${j}</div>`
      monthDay.innerHTML = days;
   }

 }

 document.querySelector(".prev").addEventListener("click", () => {
   date.setMonth(date.getMonth() - 1);
   renderCalendar();
 });

 document.querySelector(".next").addEventListener("click", () => {
   date.setMonth(date.getMonth() + 1);
   renderCalendar();
 });

 renderCalendar();
