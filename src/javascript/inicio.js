document.getElementById('rotateButton').addEventListener('click', function () {
    this.classList.toggle('rotated');  

    // Cargar el contenido de index.html antes de hacer el fadeOut
    $.get('index.html', function (data) {

        //NOTA -> data no se puede pasar a una variable, esta dará undefined

 

  
        // Fundido de salida del body de iniscreen.html
        $('body').fadeOut(2500, function () {


            // Reemplazar el contenido del body de iniscreen.html con el contenido de index.html
            $('body').html(data);

           
            
            
            // Fundido de entrada
            $('body').fadeIn(1000);



            
        });
    });
});
