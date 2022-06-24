    let nav = document.getElementById('nav');
    let menu = document.getElementById('enlaces');
    let abrir = document.getElementById('open');
    let botones = document.getElementsByClassName('btn-header');
    let cerrado = true;
    let carga = document.getElementById('onload');

    function menus(){
        let desplazamiento_Actual = window.pageYOffset;

        if (desplazamiento_Actual <= 300){
            nav.classList.remove('nav2');
            nav.className = ('nav1')
            nav.style.transition = '1s'
            menu.style.top = '80px';
            abrir.style.color = '#fff';
        }else{
            nav.classList.remove('nav1');
            nav.className = ('nav2')
            nav.style.transition = '1s'
            menu.style.top = '80px';
            abrir.style.color = '#000';
        }
    }
    window.addEventListener('load', function(){
       $('#onload').fadeOut(); //Codigo  jquery para ocultar el preloader
        $('body').removeClass('hidden'); //Codigo  jquery para mostrar el preloader
        // carga.style.visibility = 'hidden'; Codigo  js para ocultar el preloader
        // body.style.visibility = 'visibility'; Codigo  jquery para mostrar el preloader
        
        menus();
    });
   

    function apertura(){
        if(cerrado){
            menu.style.width = '70vw'; 
            cerrado = false;
        }else{
            menu.style.width = '0px';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }

    window.addEventListener('resize', function(){
        if(screen.width >= 700){
            cerrado = true;
            menu.style.removeProperty('overflow');
            menu.style.removeProperty('width');
        }
    });
    abrir.addEventListener('click', function(){
        apertura();
        
   })
 
    window.addEventListener('scroll', function(){
      
        menus();
    });

    window.addEventListener('click', function(e){
        if (cerrado == false){
            let span = this.document.querySelector('span');
            if(e.target !== span && e.target !== abrir){
                menu.style.width = '0%';
                menu.style.overflow = 'hidden';
                cerrado = true;
            }
        }
    });