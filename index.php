<!-- 
Auteur : Kouaho Adou
Projet: Oplayer
Version: 0.0.1
Date début: 16/5/2015 à 16:00
Description : Lecteur de musique et de video à integrer dans un site web
Contributeur: Kouaho Adou

-->

<!-- liste -->
<html>
<head>
    <link type="text/css" rel="stylesheet" href="style.css" />
</head>

</html>
<div class="liste">
    
    <div class="oplayer">
        <div class="visio"><img src="img/default_p.png" /> </div>
        <div class="track"><div></div> </div>
        <audio  class="audio" src="son/Musique religieuse/CONSTANCE-Projet.mp3" autoplay> 
        </audio>
        <div class="commande"> 
            <div class="cmd cmd_p" > prev play next </div>
            <div class="info cmd temps">00:00</div>
            <div class="cmd cmd_s"> stop random </div>
        </div>
        <div class="listeMp3">
            <table id="liste">
                <tbody>	
                    <?php 
                        $dir = openDir("son");
                        $e=0; 
                        while($file = readDir($dir)){

                            if($file!='.' && $file!='..'){
                                if (is_dir("son/$file")) {
                                        $artiste = $file;
                                    echo "<tr><td class='artiste ' id=".$e."><nav class='plus plus".$e."'>+</nav><nav>".$artiste."</nav></td></tr>";
                                    $dossier = openDir("son/$file");
                                    $i = 0;
                                    while($file = readDir($dossier)){
                                       if($file!='.' && $file!='..'){
                                           echo "<tr class='titre titre".$e."' id='titre".$e."_".$i."'><td>&nbsp;&nbsp;".$file."</td></tr>";
                                       }
                                    $i++; }
                                }else{


                    ?>
                    <tr>	
        <!--				<td><?php echo $file; ?></td>-->
                    </tr>
                    <?php 		}
                        }
                            $e++;
                        } ?>
                </tbody>
            </table>
        </div>
    </div>
</div>

<script type="text/javascript" src="jquery.min.js"></script>

<script type="text/javascript" src="lib/script.js">
  
</script>
