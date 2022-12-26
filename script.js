const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lançamento = "01 jan 2023"

function countdown () {
   const dataLanc = new Date(lançamento)
   const hoje = new Date()

   const segtotal = (dataLanc - hoje)/1000;

   const finalDias = Math.floor(segtotal / 60 / 60 / 24);
   const finalHoras = Math.floor(segtotal / 60 / 60) % 24 ;
   const finalMinutos = Math.floor(segtotal / 60) % 60 ;
   const finalsegundos = Math.floor(segtotal) % 60 ;

  dia.innerHTML = finalDias + ("D")
  hora.innerHTML = formatotempo(finalHoras) + ("H")
  minuto.innerHTML = formatotempo(finalMinutos)+ ("M")
  segundo.innerHTML = formatotempo(finalsegundos)+ ("S")

  


}

function formatotempo (tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
}
countdown();
setInterval(countdown, 1000)
