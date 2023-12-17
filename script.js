// ALL CHAMPIONS
var champions = ['Aatrox.png', 'Ahri.png', 'Akali.png', 'Akshan.png', 'Alistar.png', 'Amumu.png', 'Anivia.png', 'Annie.png', 'Aphelios.png', 'Ashe.png', 'AurelionSol.png', 'Azir.png', 'Bard.png', 'Belveth.png', 'Blitzcrank.png', 'Brand.png', 'Braum.png', 'Briar.png', 'Caitlyn.png', 'Camille.png', 'Cassiopeia.png', 'Chogath.png', 'Corki.png', 'Darius.png', 'Diana.png', 'Draven.png', 'DrMundo.png', 'Ekko.png', 'Elise.png', 'Evelynn.png', 'Ezreal.png', 'Fiddlesticks.png', 'Fiora.png', 'Fizz.png', 'Galio.png', 'Gangplank.png', 'Garen.png', 'Gnar.png', 'Gragas.png', 'Graves.png', 'Gwen.png', 'Hecarim.png', 'Heimerdinger.png', 'Hwei.png', 'Illaoi.png', 'Irelia.png', 'Ivern.png', 'Janna.png', 'JarvanIV.png', 'Jax.png', 'Jayce.png', 'Jhin.png', 'Jinx.png', 'Kaisa.png', 'Kalista.png', 'Karma.png', 'Karthus.png', 'Kassadin.png', 'Katarina.png', 'Kayle.png', 'Kayn.png', 'Kennen.png', 'Khazix.png', 'Kindred.png', 'Kled.png', 'KogMaw.png', 'KSante.png', 'Leblanc.png', 'LeeSin.png', 'Leona.png', 'Lillia.png', 'Lissandra.png', 'Lucian.png', 'Lulu.png', 'Lux.png', 'Malphite.png', 'Malzahar.png', 'Maokai.png', 'MasterYi.png', 'Milio.png', 'MissFortune.png', 'MonkeyKing.png', 'Mordekaiser.png', 'Morgana.png', 'Naafiri.png', 'Nami.png', 'Nasus.png', 'Nautilus.png', 'Neeko.png', 'Nidalee.png', 'Nilah.png', 'Nocturne.png', 'Nunu.png', 'Olaf.png', 'Orianna.png', 'Ornn.png', 'Pantheon.png', 'Poppy.png', 'Pyke.png', 'Qiyana.png', 'Quinn.png', 'Rakan.png', 'Rammus.png', 'RekSai.png', 'Rell.png', 'Renata.png', 'Renekton.png', 'Rengar.png', 'Riven.png', 'Rumble.png', 'Ryze.png', 'Samira.png', 'Sejuani.png', 'Senna.png', 'Seraphine.png', 'Sett.png', 'Shaco.png', 'Shen.png', 'Shyvana.png', 'Singed.png', 'Sion.png', 'Sivir.png', 'Skarner.png', 'Sona.png', 'Soraka.png', 'Swain.png', 'Sylas.png', 'Syndra.png', 'TahmKench.png', 'Taliyah.png', 'Talon.png', 'Taric.png', 'Teemo.png', 'Thresh.png', 'Tristana.png', 'Trundle.png', 'Tryndamere.png', 'TwistedFate.png', 'Twitch.png', 'Udyr.png', 'Urgot.png', 'Varus.png', 'Vayne.png', 'Veigar.png', 'Velkoz.png', 'Vex.png', 'Vi.png', 'Viego.png', 'Viktor.png', 'Vladimir.png', 'Volibear.png', 'Warwick.png', 'Xayah.png', 'Xerath.png', 'XinZhao.png', 'Yasuo.png', 'Yone.png', 'Yorick.png', 'Yuumi.png', 'Zac.png', 'Zed.png', 'Zeri.png', 'Ziggs.png', 'Zilean.png', 'Zoe.png', 'Zyra.png'];


// ARRAY DIV IMG CHAMPIOS
var playerChampion = ['p1-champ', 'p2-champ', 'p3-champ', 'p4-champ', 'p5-champ', 'p6-champ', 'p7-champ', 'p8-champ']


// Function to shuffle the array content
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {

        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}



function sortTeam(){

    // DEFINE PLAYERS INPUT
    var pInput = []

    pInput[0] =  document.getElementById("player-1").value
    pInput[1] =  document.getElementById("player-2").value
    pInput[2] =  document.getElementById("player-3").value
    pInput[3] =  document.getElementById("player-4").value
    pInput[4] =  document.getElementById("player-5").value
    pInput[5] =  document.getElementById("player-6").value
    pInput[6] =  document.getElementById("player-7").value
    pInput[7] =  document.getElementById("player-8").value

    //DEFINE TEAM NAME SHOW
    var pNames = []

    pNames[0] = document.getElementById("p1-name")
    pNames[1] = document.getElementById("p2-name")
    pNames[2]= document.getElementById("p3-name")
    pNames[3] = document.getElementById("p4-name")
    pNames[4] = document.getElementById("p5-name")
    pNames[5] = document.getElementById("p6-name")
    pNames[6] = document.getElementById("p7-name")
    pNames[7] = document.getElementById("p8-name")

    var randomTeams = shuffleArray(pInput);

    for(var i = 0; i < 8; i++){
        pNames[i].innerHTML = pInput[i]
    }

    sortChampions()
}   


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function sortChampions(){

    var repeatGame = document.getElementById("repeat-game").checked
    var repeatLobby = document.getElementById("repeat-lobby").checked

    console.log(repeatGame)

    var deleteChampions = []

    for(var i = 0; i < 8; i++){
        var randomChamp = getRandomInt(champions.length)

        var imgChamp = document.getElementById(playerChampion[i])

        imgChamp.src = "images/" + champions[randomChamp]

        if(repeatGame == true){
            champions.splice(randomChamp,1)
            console.log(champions.length)
        }else{
            deleteChampions.push(randomChamp)
        }
    }
    
    if(repeatLobby == true){
        removeChampionFromPick(deleteChampions)
    }

}

function removeChampionFromPick(chp){
    console.log(chp)
    let i = 0
    while(chp[i]){
        champions.splice(chp[i],1)
        i++;
    }
    
}