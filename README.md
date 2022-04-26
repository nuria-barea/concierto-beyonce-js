# Cómo gestionar la admisión de un concierto con JavaScript

![Beyoncé](https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yOTU3NjM4NS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY1MTM4NTU3NX0.y0IgUunhTL2kd3yc29VGbWolZVf6h7kfxNABIBew7sA/img.jpg?width=1200&quality=85&coordinates=0%2C64%2C0%2C181&height=800 "Beyoncé")

Beyoncé ha anunciado una nueva gira mundial que pasa por Barcelona, y os ha pedido ayuda para organizar su próximo concierto en el Palau Sant Jordi.
Como sabe que sois programadoras, os ha pedido que creéis un pequeño programa en JavaScript ES6 para gestionar el acceso al recinto en base a la edad de los asistentes.
Las normas de acceso son las siguientes: 
- Las personas menores de 14 años no pueden entrar.
- Las personas de entre 14 y 17 años (ambos incluídos) pueden entrar, pero sólo acompañadas de una persona mayor de 18 años.
- Las personas mayores de 18 años pueden entrar sin restricciones. 

Vamos a crear dos variantes de un mismo programa para ayudar a Beyoncé: una con variables y condicionales, y otra con funciones. Escribe todo tu código en el archivo index.js y utiliza la consola de tu navegador para ver los mensajes que se retornan. 

**¡De ti depende que el concierto no sea un caos!**


## Parte 1: Variables y condicionales
Crea una variable de edad con 'let' y asóciala al número 16. Alternativamente, si ya sabes JavaScript, crea un objeto Asistente que contenga un nombre, una edad, y un booleano para determinar si tiene o no ticket. 

Ahora crea un condicional que refleje las diferentes normas de acceso indicadas en el enunciado del ejercicio, y retorna por consola los siguientes valores: 
- Si la persona tiene más de 18 años, debemos retornar "Eres mayor de edad, puedes entrar."
- Si la persona tiene entre 14 yy 17 años (ambos incluídos), debemos retornar un mensaje que diga "Puedes entrar, pero sólo si te acompaña una persona mayor de edad."
- Si la persona tiene 13 años o menos, debemos retornar "Lo siento, eres demasiado joven, vuelve a intentarlo en unos años."



## Parte 2: Funciones
Refactoriza el código anterior en una única función que se llame gestionarAdmision(). Ejecútala y comprueba el resultado de esta función con las siguientes edades: 0, 8, 12, 14, 17, 18, 35 y 99.