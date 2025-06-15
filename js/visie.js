

function init() {
    filter();
}


function filter() {
    document.querySelector(".button-1").addEventListener('click', function () {
        console.log("This is button 1");
        document.getElementById('content').innerHTML = `
        
        <div class="container">

            <div class="pedagogisch-1">
                <h2>Pedagogisch Project</h2>
                <img src="./images/pedagogisch_project.png" class="pedagogisch-pic-1">
                <div class="p-vakje-1">
                    <p>Nergens voel je het kloppend hart van Brussel zo sterk als in de Marollen. Nieuwland ligt midden in deze bruisende volksbuurt en wil een plek bieden voor elke jongere tussen 2.5 en 12 jaar.</p>
                </div>
            </div>

            <div class="pedagogisch-2">
                <h2>Voel je het al kriebelen?</h2>
                <div class="p-vakje-2">
                    <p>Dat komt doordat we hier aan de toekomst werken. En samen kunnen we dat veel beter dan alleen. In de klas leren we met elkaar en van elkaar, met respect voor de keuze en de identiteit van iedereen. Dat vraagt een flinke portie zelfkennis, waar we samen voor zorgen.</p>
                </div>
            </div>

            <div class="pedagogisch-3">
                <img src="./images/juffen_meesters.png" class="pedagogisch-pic-2">
                <h2>En wat met al die juffen en meesters?</h2>
                <div class="p-vakje-3">
                    <p>Die vinden ‘samen’ ook van groot belang! Samen voor de klas in co-teaching, samen zorg dragen voor alle leerlingen in team-teaching, samen werken aan een zachte overgang tussen kleuter en lager, samen met ouders en de buurt een netwerk creëren waarin kinderen alle kansen krijgen die ze verdienen. </p>
                </div>
            </div>

            <div class="pedagogisch-4">
                <h2>Voorbereid op een complexe wereld?</h2>
                <div class="p-vakje-4">
                    <p>Creativiteit – in de meest brede zin van het woord - is hierop het antwoord. We willen oog hebben voor de talenten van alle leerlingen, hen helpen die te ontdekken en ten volle te ontplooien. Daarnaast stimuleren we hen om na te denken over complexe uitdagingen. De innovatieve ideeën die leerlingen opdoen zijn de motor om los te komen van stereotypen en om de wereld te bekijken vanuit verschillende perspectieven.</p>
                </div>
            </div>

            <div class="pedagogisch-5">
                <h2>Best uitdagend?</h2>
                <div class="p-vakje-5">
                    <p>Dat klopt! Maar we kijken positief naar de toekomst. We geloven oprecht in de leer – kracht van elk kind en vinden fouten maken noodzakelijk! De grootste uitvindingen zijn maar tot stand gekomen door veelvuldig experimenteren en fouten maken. Als school willen we hier positief op inspelen door kinderen in hun leer – kracht te begeleiden.</p>
                </div>
            </div>

            <div class="pedagogisch-6">
                <h2>Maar toch niet elk kind kan dat?</h2>
                <img src="./images/kind_instrument.png" class="pedagogisch-pic-3">
                <div class="p-vakje-6">
                    <p>Het open karakter van Nieuwland weerspiegelt zich in het laagdrempelig contact en de open hand om ouders te verwelkomen in de klas. Ook vatten we ‘open’ heel ruim op: bestaande grenzen kunnen open gemaakt worden om ons onderwijs te optimaliseren. De grenzen tussen verschillende leergebieden vallen weg bij projectwerk, de grenzen tussen leerjaren gaan open bij klasoverschrijdende activiteiten. Grenzen tussen kleuter – en lagere school weerhouden er ons niet van intensief samen te werken. De Brede School Nieuwland breekt de grenzen van onze schoolmuren en – uren open en biedt voor kinderen een waaier aan kansen tot levensecht en levensbreed leren.</p>
                </div>
            </div>

            <div class="pedagogisch-7">
                <h2>En zijn er dan geen regels meer op school?</h2>
                <img src="./images/kinderen_fluo_hesjes.png" class="pedagogisch-pic-4">
                <div class="p-vakje-7">
                    <p>Natuurlijk wel. Regels en structuur bieden veiligheid voor iedereen op Nieuwland. Ze zorgen ervoor dat iedereen zich goed voelt op school en klaar is om te leren. Samen nadenken over deze regels op school is een sterk signaal van het geloof in onze leerlingen. En loopt het eens fout? Geen paniek! Zolang we samen naar een geweldloze oplossing kunnen zoeken is er niets aan de hand.Op die manier willen we samen op een creatieve en positieve manier de lat van elk kind hoog leggen in een open en veilige omgeving.</p>
                </div>
            </div>

        </div>`;

    });

    document.querySelector(".button-2").addEventListener('click', function () {
        console.log("This is button 2");
    });

    document.querySelector(".button-3").addEventListener('click', function () {
        console.log("This is button 3");
    });
}


init();