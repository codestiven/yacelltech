
const li = document.querySelectorAll(".selectores");
const bloque = document.querySelectorAll(".bloques");


li.forEach( (cadaLi , i)=>{
    li[i].addEventListener('click' ,()=>{
        li.forEach( (cadaLi , i )=>{
            li[i].classList.remove('activo');
            bloque[i].classList.remove("activo");
        });

        li[i].classList.add("activo");
        bloque[i].classList.add("activo");

    })
});