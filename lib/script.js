function couleur() {
    // couleur pour les titres
                var table = document.getElementById("liste").rows;
                var longueur = table.length;

                var i = 0;
                while (i < longueur) {
                    if(i % 2 == 0) {
                        table[i].style.background = '#1f1f1f';
                    }else {
                        table[i].style.background = '#403e3e';
                    }
                    i++;
                }
            }
function couleur_ar(){ //Couleur pour les artistes
                var table = $(".artiste");
                var longueur = table.size();

                var i = 0;
                while (i < longueur) {
                    if(i % 2 == 0 ) {
                        table[i].style.backgroundColor="rgb(24, 134, 214)";
                    }else {
                        table[i].style.backgroundColor="rgb(25, 84, 128)";
                    }-
                    i++;
                }
            }


    (function(){couleur()})();
    (function(){
        
        couleur_ar();
       $(".titre").hide();
        $(".artiste").click(function(){
            var id = $(this).attr("id");
            if($(this).hasClass("ouvert")){
                $(this).addClass('fermer');
                $(this).removeClass('ouvert');
               $(".titre"+id).hide(); 
                $(".plus"+id).html("+");
            }else{
                couleur();
//                alert(r);
            $(".titre"+id).show(); 
            $(".artiste").addClass("ouvert");
            $(".plus"+id).html("&nbsp;-&nbsp;");
            }
        });
        
        $(".ouvert").click(function(){
            
        });
    })();


            var track = document.getElementsByClassName("track")[0];
            var audio = document.getElementsByClassName("audio")[0];
            var info = document.getElementsByClassName("info")[0];
            var seeker = track.childNodes[0];
            audio.addEventListener('timeupdate', function(){
                var total = audio.duration;
                var position = audio.currentTime;
                var progression = (position/total)*100;
                var min = parseInt(position/60);
                var sec = parseInt(position-(min*60));
                seeker.style.width = parseFloat(progression)+"%";
                if(sec<10) sec = '0'+sec;
                info.innerHTML = min+':'+sec;
            }, false);

track.addEventListener('click', function(event){
                var pos = event.offsetX/event.target.clientWidth;
                audio.currentTime = pos*100/audio.duration;
            });
            
          