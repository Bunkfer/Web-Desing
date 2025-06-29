document.addEventListener('DOMContentLoaded', () => {
    const resultado = document.querySelector('#fin span');
    const botones = document.querySelectorAll('.num');

    let esPrimeraEntrada = true; 
    let Msuma = 0;
    let dato = 0;
    const lista = document.querySelector('.final');
    lista.classList.add('oculto');

    botones.forEach(boton => {
      boton.addEventListener('click', () => {
        const valor = boton.innerText;
  
        if (esPrimeraEntrada) {
          resultado.textContent = valor; 
          esPrimeraEntrada = false; 
        } else {
          resultado.textContent += valor;
        }
      });
    });

    const botonClear = document.getElementById('C');
    botonClear.addEventListener('click', () => {
      resultado.textContent = '-';
      esPrimeraEntrada = true; 
    });

    const botonAtras = document.getElementById('ATRAS');
    botonAtras.addEventListener('click', () => {
        resultado.textContent = resultado.textContent.slice(0, -1);
    });

    const botonMmas = document.getElementById('M+');
    botonMmas.addEventListener('click', () => {
      Msuma += parseFloat(resultado.textContent);

      const nuevoLi =document.createElement('li');
      nuevoLi.textContent = resultado.textContent;
      document.querySelector('.lista').appendChild(nuevoLi)

      resultado.textContent = '-';
      esPrimeraEntrada = true;
    });

    const botonMmenos = document.getElementById('M-');
    botonMmenos.addEventListener('click', () => {
      Msuma -= parseFloat(resultado.textContent);

      const nuevoLi = document.createElement('li');
      nuevoLi.textContent = - parseFloat(resultado.textContent);
      document.querySelector('.lista').appendChild(nuevoLi);

      resultado.textContent = '-';
      esPrimeraEntrada = true;
    });

    const botonMC = document.getElementById('MC');
    botonMC.addEventListener('click', () => {
      Msuma = 0;
      resultado.textContent = '-';
      esPrimeraEntrada = true;
      document.querySelector('.lista').innerHTML = '';
    });

    const botonMR = document.getElementById('MR');
    botonMR.addEventListener('click', () => {
      resultado.textContent = Msuma;
    });

    const botonIgual = document.getElementById('RUN');
    botonIgual.addEventListener('click', () => {
      try {
        const operacion = resultado.textContent;
        const evaluado = eval(operacion);
        resultado.textContent = evaluado;
      } catch (e) {
        resultado.textContent = 'Error';
      }
      esPrimeraEntrada = true;
    });

    const botonMasMenos = document.getElementById('MAS-MENOS');
    botonMasMenos.addEventListener('click', () => {
      const texto = resultado.textContent.trim();
      if (!isNaN(texto) && texto !== '') {
        const valor = parseFloat(texto);
        resultado.textContent = -valor;
      } else {
        alert("Solo puedes cambiar el signo si hay un número individual, no una operación.");
      }
    });

    const botonM = document.getElementById('M');
    botonM.addEventListener('click', () => {
      lista.classList.toggle('oculto');
    });
  });
  