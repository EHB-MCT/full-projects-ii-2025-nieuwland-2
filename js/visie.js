

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
        document.getElementById('content').innerHTML =
            ` <div class="container">

		<div class="orientatie-1">
			<!-- <div class="o-title-1"> -->
				<h2>Mens</h2>
			<!-- </div> -->
			<img src="./images/mens.png" class="mens">
			<div class="o-vakje-1">
				<p>Veel van onze kinderen groeien op in stressvolle omstandigheden en leren niet vanzelf hun emoties goed te uiten. Daarom investeren we als school extra in emotieregulatie en leren we kinderen de taal van emoties. Om schoolse achterstanden, demotivatie en uitval te voorkomen, versterken we het zelfbeeld en zelfvertrouwen van onze leerlingen. Via onze pedagogische en didactische keuzes willen we bovendien hun leerzin en motivatie blijven voeden.</p>
			</div>
		</div>

		<div class="orientatie-2">
			<div class="o-title-2">
				<h2>Maatschappij</h2>
			</div>
			<img src="./images/maatschappij.png" class="maatschappij">
			<div class="o-vakje-2">
				<p>Omdat veel kinderen opgroeien in een omgeving met weinig actieve rolmodellen, brengen we hen in contact met diverse beroepen en inspirerende voorbeelden.Sociaal-cultureel: In onze superdiverse samenleving leren we kinderen samenleven in verscheidenheid, met aandacht voor zowel verschillen als gelijkenissen. We zien die diversiteit als een meerwaarde en benutten ze in ons aanbod.Politiek-juridisch: We geven kinderen inzicht in onze democratie en leren hen hoe ze kunnen deelnemen aan het maatschappelijk debat, zodat ze later actief kunnen opkomen voor hun rechten en belangen.</p>
			</div>
		</div>

		<div class="orientatie-3">
			<div class="o-title-3">
				<h2>Ruimte: verkeer en mobiliteit</h2>
			</div>
			<div class="o-vakje-3">
				<p>Door het drukke verkeer leggen we de nadruk op verkeersveiligheid, zodat kinderen zich veilig te voet en met de fiets kunnen verplaatsen. We maken optimaal gebruik van het openbaar vervoer bij uitstappen in het BHG, zodat kinderen leren zich zelfstandig te verplaatsen en hun leefwereld verbreden. Mobiliteit koppelen we aan milieueducatie, waarbij we hen bewust maken van hun ecologische impact en duurzame keuzes stimuleren.</p>
			</div>
		</div>

		<div class="orientatie-4">
			<img src="./images/tijd.png" class="tijd">
			<div class="o-title-4">
				<h2>Tijd</h2>
			</div>
			<div class="o-vakje-4">
				<p>Om mee te kunnen in een snel veranderende samenleving, leren we kinderen hun dagelijks leven organiseren, beginnend bij tijdsbesef. Daarnaast laten we hen kennismaken met historische gebeurtenissen, zodat ze onze maatschappij beter begrijpen en bewuster over de toekomst kunnen nadenken.</p>
			</div>
		</div>

		<div class="orientatie-5">
			<img src="./images/levende_natuur.png" class="levende_natuur">
			<div class="o-title-5">
				<h2>Natuur: levende natuur</h2>
			</div>
			<div class="o-vakje-5">
				<p>Onze kinderen groeien op in een verstedelijkt gebied en hebben vaak beperkte voorkennis over de natuur. Daarom laten we hen actief en ontdekkend kennismaken met diverse biotopen en organismen, binnen en buiten het BHG, zodat deze ervaringen blijven hangen.</p>
			</div>
		</div>

		<div class="orientatie-6">
			<div class="o-title-6">
				<h2>Natuur: gezondheid</h2>
			</div>
			<div class="o-vakje-6">
				<p>De levensomstandigheden van onze leerlingen houden verschillende gezondheidsrisico’s in (zowel fysiek als mentaal). Daarom is een doorgedreven gezondheidsbeleid op school van groot belang. Ook bewegingsopvoeding is hier een wezenlijk onderdeel van.</p>
			</div>
		</div>

		<div class="orientatie-7">
			<img src="./images/natuur_milieu.png" class="natuur_milieu">
			<div class="o-title-7">
				<h2>Natuur: Milieu</h2>
			</div>
			<div class="o-vakje-7">
				<p>Kinderen zien in hun omgeving weinig voorbeelden van respectvol gedrag naar milieu. Zo wordt er bijvoorbeeld weinig gesorteerd en slingert er veel afval in de omliggende straten. We willen dat onze leerlingen opgroeien tot burgers die de wereld beter maken en dus is het belangrijk om vanuit de school voldoende klemtoon te leggen op milieu-educatie en ecologie.</p>
			</div>
		</div>

		<div class="orientatie-8">
			<div class="o-title-8">
				<h2>Techniek</h2>
			</div>
			<div class="o-vakje-8">
				<p>Onze wereld evolueert razendsnel. Techniek vormt het sleutelbegrip om de toekomst vorm te geven. Gezien de ecologische, maatschappelijke uitdagingen is het belangrijk om techniek een plaats te geven. Wij willen dat onze kinderen deze evolutie begrijpen en hierop kunnen anticiperen.</p>
			</div>
		</div>
	</div>`;
    });

    document.querySelector(".button-3").addEventListener('click', function () {
        console.log("This is button 3");
    });
}


init();