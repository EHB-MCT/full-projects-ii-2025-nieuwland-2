function init() {
	filterTitle();
	filterContent();
}

function filterTitle() {
	document.querySelector(".button-1").addEventListener("click", function () {
		document.getElementById("content-title").innerHTML = `	<div class="title">
				<h1>Pedagogisch Project</h1>
			</div>`
	});

	document.querySelector(".button-2").addEventListener("click", function () {
		document.getElementById("content-title").innerHTML = `	<div class="title">
				<h1>Oriëntatie op de wereld</h1>
			</div>`
	});

	document.querySelector(".button-3").addEventListener("click", function () {
		document.getElementById("content-title").innerHTML = `<	<div class="title">
				<h1>Zin in leren! Zin in leven!</h1>
			</div>`
	});
}

function filterContent() {
	document.querySelector(".button-1").addEventListener("click", function () {
		document.getElementById("content").innerHTML = `
	         <div class="container">

      	<div class="educational-1">
                <h2>Pedagogisch Project</h2>
                <img src="./images/pedagogisch_project.png" class="educational-pic-1">
                <div class="e-block-1">
                    <p>Nergens voel je het kloppend hart van Brussel zo sterk als in <br/>de Marollen. Nieuwland ligt midden in deze bruisende volksbuurt en<br/> wil een plek bieden voor elke jongere tussen 2.5 en 12 jaar.</p>
                </div>
            </div>

            <div class="educational-2">
                <h2>Voel je het al kriebelen?</h2>
				
                <div class="e-block-2">
                    <p>Dat komt doordat we hier aan de toekomst werken. En samen<br/> kunnen we dat veel beter dan alleen. In de klas leren we<br/> met elkaar en van elkaar, met respect voor de keuze en de <br/>identiteit van iedereen. Dat vraagt een flinke portie zelfkennis,<br/> waar we samen voor zorgen.</p>
                </div>
            </div>

            <div class="educational-3">
                <img src="./images/juffen_meesters.png" class="educational-pic-2">
                <h2>En wat met al die juffen en meesters?</h2>
				
                <div class="e-block-3">
                    <p>Die vinden ‘samen’ ook van groot belang! Samen voor de klas in<br/> co-teaching, samen zorg dragen voor alle leerlingen in team-teaching, samen werken aan een zachte overgang tussen kleuter en lager, samen met ouders en de buurt een netwerk creëren waarin kinderen alle kansen krijgen die ze verdienen. </p>
                </div>
            </div>

            <div class="educational-4">
                <h2>Voorbereid op een complexe wereld?</h2>
				
                <div class="e-block-4">
                    <p>Creativiteit – in de meest brede zin van het woord - is hierop het <br/>antwoord. We willen oog hebben voor de talenten van alle <br/>leerlingen, hen helpen die te ontdekken en ten volle te ontplooien. <br/>Daarnaast stimuleren we hen om na te denken over complexe uitdagingen. De innovatieve ideeën dieleerlingen opdoen zijn<br/>  de motor om los te komen van stereotypen en<br/> om de wereld te bekijken vanuit verschillende perspectieven.</p>
                </div>
            </div>

            <div class="educational-5">
                <h2>Best uitdagend?</h2>
				
                <div class="e-block-5">
                    <p>Dat klopt! Maar we kijken positief naar de toekomst. We geloven<br/> oprecht in de leer – kracht van elk kind en vinden fouten maken<br/> noodzakelijk! De grootste uitvindingen zijn maar tot stand gekomen<br/> door veelvuldig experimenteren en fouten maken. Als school willen<br/> we hier positief op inspelen door kinderenin hun <br/>leer – kracht te begeleiden.</p>
                </div>
            </div>

            <div class="educational-6">
                <h2>Maar toch niet elk kind kan dat?</h2>
				
                <img src="./images/kind_instrument.png" class="educational-pic-3">
                <div class="e-block-6">
                    <p>Het open karakter van Nieuwland weerspiegelt zich in het laagdrempelig contact en <br/> de open hand om ouders te verwelkomen in de klas. Ook vatten <br/>we ‘open’ heel ruim op: bestaande grenzen kunnen open gemaakt worden om<br/> ons onderwijs te optimaliseren. De grenzen tussen verschillende leergebieden vallen weg bij<br/> projectwerk, de grenzen tussen leerjaren gaan open bij klasoverschrijdende activiteiten. Grenzen tussen<br/> kleuter – en lagere school weerhouden er ons niet van intensief samen te<br/> werken. De Brede School Nieuwland breekt de grenzen van onze schoolmuren en – uren<br/> open en biedt voor kinderen een waaier aan kansen tot levensecht en <br/>levensbreed leren.</p>
                </div>
            </div>

            <div class="educational-7">
                <h2>En zijn er dan geen regels meer op school?</h2>
				
                <img src="./images/kinderen_fluo_hesjes.png" class="educational-pic-4">
                <div class="e-block-7">
                    <p>Natuurlijk wel. Regels en structuur bieden veiligheid voor iedereen<br/> op Nieuwland. Ze zorgen ervoor dat iedereen zich goed voelt op <br/>school en klaaris om te leren. Samen nadenken over deze regels op <br/>school is een sterk signaal van het geloof in onze leerlingen.<br/> En loopt het eens fout? Geen paniek! Zolang we samen naar een<br/> geweldloze oplossing kunnen zoeken is er niets aan de hand.Op die <br/> manier willen we samen op een creatieve en positieve manier de lat<br/> van elk kind hoog leggen in een open en veilige omgeving.</p>
                </div>
            </div>
        </div>`;
	});

	document.querySelector(".button-2").addEventListener("click", function () {
		document.getElementById("content").innerHTML = `
<div class="container">

		<div class="orientation-1">
				<h2>Mens</h2>
			<img src="./images/mens.png" class="o-pic-1">
			<div class="o-block-1">
				<p>Veel van onze kinderen groeien op in stressvolle omstandigheden en leren niet vanzelf hun emoties<br/> goed te uiten. Daarom investeren we als school extra </br>in emotieregulatie en leren we kinderen de taal van emoties. Om schoolseachterstanden, demotivatie en uitval te voorkomen, versterken we het zelfbeeld en zelfvertrouwen van onze leerlingen.</br> Via onze pedagogische en didactische keuzes willen we bovendien</br> hun leerzin en motivatie blijven voeden.</p>
			</div>
		</div>

		<div class="orientation-2">
			<div class="o-block-2">
				<h2>Maatschappij</h2>
			</div>
			<img src="./images/maatschappij.png" class="o-pic-2">
			<div class="o-block-2">
				<p>Omdat veel kinderen opgroeien in een omgeving met weinig actieve rolmodellen, brengen</br> we hen in contact met diverse beroepen en inspirerende voorbeelden.Sociaal-cultureel: </br>In onze superdiverse samenleving leren we kinderen samenleven in verscheidenheid, met aandacht</br> voor zowel verschillen als gelijkenissen. We zien die diversiteit als een meerwaarde</br> en benutten ze in ons aanbod.Politiek-juridisch: We geven kinderen inzicht</br> in onze democratie en leren hen hoe ze kunnen deelnemen aan het</br> maatschappelijk debat, zodat ze later actief kunnen opkomen voor hun rechten</br> en belangen.</p>
			</div>
		</div>

		<div class="orientation-3">
			<div class="o-title-3">
				<h2>Ruimte: verkeer en mobiliteit</h2>
			</div>
			<div class="o-block-3">
				<p>Door het drukke verkeer leggen we de nadruk op verkeersveiligheid, zodat kinderen</br> zich veilig te voet en met de fiets kunnen verplaatsen. We maken</br> optimaal gebruik van het openbaar vervoer bij uitstappen in het</br> BHG, zodat kinderen leren zich zelfstandig te verplaatsen en hun leefwereld verbreden. Mobiliteit koppelen</br> we aan milieueducatie, waarbij we hen bewust maken van hun ecologische impact </br>en duurzame keuzes stimuleren.</p>
			</div>
		</div>

		<div class="orientation-4">
			<img src="./images/tijd.png" class="o-pic-3">
			<div class="o-title-4">
				<h2>Tijd</h2>
			</div>
			<div class="o-block-4">
				<p>Om mee te kunnen in een snel veranderende samenleving, leren we</br> kinderen hun dagelijks leven organiseren, beginnend bij tijdsbesef. Daarnaast laten we hen kennismaken</br> met historische gebeurtenissen, zodat ze onze maatschappij beter begrijpen en bewuster over </br>de toekomst kunnen nadenken.</p>
			</div>
		</div>

		<div class="orientation-5">
			<img src="./images/levende_natuur.png" class="o-pic-4">
			<div class="o-title-5">
				<h2>Natuur: levende natuur</h2>
			</div>
			<div class="o-block-5">
				<p>Onze kinderen groeien op in een verstedelijkt gebied en hebben</br> vaak beperkte voorkennis over de natuur. Daarom laten we hen</br> actief en ontdekkend kennismaken met diverse biotopen en organismen, binnen en buiten het BHG, zodat deze</br> ervaringen blijven hangen.</p>
			</div>
		</div>

		<div class="orientation-6">
			<div class="o-title-6">
				<h2>Natuur: gezondheid</h2>
			</div>
			<div class="o-block-6">
				<p>De levensomstandigheden van onze leerlingen houden verschillende gezondheidsrisico’s </br>in (zowel fysiek als mentaal). Daarom is een doorgedreven gezondheidsbeleid op school</br> van groot belang. Ook bewegingsopvoeding is hier een wezenlijk onderdeel van.</p>
			</div>
		</div>

		<div class="orientation-7">
			<img src="./images/natuur_milieu.png" class="o-pic-5">
			<div class="o-title-7">
				<h2>Natuur: Milieu</h2>
			</div>
			<div class="o-block-7">
				<p>Kinderen zien in hun omgeving weinig voorbeelden van respectvol</br> gedrag naar milieu. Zo wordt er bijvoorbeeld weinig gesorteerd en slingert er veel afval in</br> de omliggende straten. We willen dat onze leerlingen opgroeien tot burgers die</br> de wereld beter maken en dus is het belangrijk om vanuit de</br> school voldoende klemtoon te leggen op milieu-educatie en ecologie.</p>
			</div>
		</div>

		<div class="orientation-8">
			<div class="o-title-8">
				<h2>Techniek</h2>
			</div>
			<div class="o-block-8">
				<p>Onze wereld evolueert razendsnel. Techniek vormt het sleutelbegrip om de toekomst vorm te geven.</br> Gezien de ecologische, maatschappelijke uitdagingen is het</br> belangrijk om techniek een plaats te geven. Wij willen dat onze kinderen deze evolutie begrijpen en hierop kunnen anticiperen.</p>
			</div>
		</div>
	</div>`;
	});

	document.querySelector(".button-3").addEventListener("click", function () {
		document.getElementById("content").innerHTML = `
		<div class="container">

			<div class="learn-1">
				<img src="./images/samen.png" class="samen">
				<div class="l-title-1">
					<h2>Samen</h2>
				</div>
				<div class="l-block-1">
					<p>Als school willen we groeien als gemeenschap en organisatie. We vertrouwen in </br>de kracht van een team om tot die groei te komen. </br>Samen het leerplanconcept vorm geven in de klas in co – teaching, samen reflecteren</br> over onze ZILL aanpak in team – teaching zijn de concrete vertalingen van</br> dit geloof in groei.  </p>
					<p>Elke personeelslid op Sint – Joris Nieuwland treedt op als verbindende figuur tussen </br>de leerlingen, de school en de thuiscontext. Het ongedwongen en spontaan zijn</br> binnen ontmoeten als ervaringskans is voor onze school van groot belang. Daarbij dagen </br>we de leerlingen uit om via het ‘IK’ naar ‘JIJ’ tot het</br> sociale ‘WIJ’ te komen, waarbij het WIJ staat voor onze school als</br> gemeenschap, als familie waarin iedereen welkom is.</p>
				</div>
			</div>

			<div class="learn-2">
				<div class="l-title-2">
					<h2>Creatief</h2>
				</div>
				<div class="l-block-2">
					<p>Onze leerlingen worden gekenmerkt door een kleurrijk palet aan interesses, </br>voorkeuren en talenten. Door ze via ZILL onder te dompelen in betekenisvolle </br>contexten verruimen we hun blik op de wereld en begeleiden we ze </br>op hun tocht naar nieuwe ontdekkingen. De brede vorming die we kinderen</br> daarbij aanbieden krijgt een verlengstuk in onze Brede School, door activiteiten rond </br>cultuur, welzijn en sport.  </p>
					<p>Daarnaast willen we als school creatief met het leerplanconcept omspringen. Onze context</br> en onze leerlingen dwingen ons om inhoudelijke focussen te leggen die voor</br> onze school van belang zijn. Door op systematische basis kritisch te kijken</br> naar onze onderwijskwaliteit, willen we komen tot een duurzame onderwijsverbetering.</p>
				</div>
			</div>

			<div class="learn-3">
				<div class="l-title-3">
					<h2>Positief</h2>
				</div>
				<img src="./images/positief.png" class="positief">
				<div class="l-block-3">
					<p>We geloven oprecht in de leer – kracht van elke leerling op Nieuwland.</br> Dit uit zich in de ontmoeting met inspirerende persoonlijkheden die voor elke </br>betrokkene een voorbeeld kunnen zijn. Nadrukkelijk inzetten op veerkracht is voor ons</br> een voorwaarde om de leer – kracht te stimuleren. Als school zijn wij</br> ervan doordrongen dat we een cruciale bijdrage kunnen leveren in de ontwikkeling</br> van onze leerlingen door via veerkracht naar leer – kracht te streven.</p>
				</div>
			</div>

			<div class="learn-4">
				<div class="l-title-4">
					<h2>De lat van elk kind hoog</h2>
				</div>
				<img src="./images/lat_van_elk_kind.png" class="lat_kind">
				<div class="l-block-4">
					<p>Om het geloof in de leer – kracht van onze leerlingen vorm te </br>geven, stellen we realistische én ambitieuze verwachtingen ten opzichte van de ontwikkeling</br> van onze leerlingen. Door niet enkel te focussen op school – en klasniveau,</br> maar ook op leerlingniveau, willen we gelijke onderwijskansen creëren voor elke leerling. </br>Het unieke profiel van elke leerling vormt het uitgangspunt voor onze aanpak</br> binnen ZILL, waarbij het verschillend ontwikkelingstempo van elke leerling gerespecteerd wordt.</br> Ontwikkelingstrajecten op maat worden gecommuniceerd naar alle betrokkenen, zodat de verticale en</br> horizontale samenhang bewaakt wordt.</p>
				</div>
			</div>

			<div class="learn-5">
				<img src="./images/open.png" class="open">
				<div class="l-title-5">
					<h2>Open</h2>
				</div>
				<div class="l-block-5">
					<p>Vanuit onze christelijke inspiratie willen we samen werken aan een stimulerend en </br>open opvoedingsklimaat, door iedereen uit te nodigen om aan ons onderwijsproject mee</br> te werken. Andere levensbeschouwingen of religies verwelkomen we in dialoog met elkaar.</br> Binnen ZILL willen we hier niet enkel aan werken binnen het ontwikkelveld </br>Rooms – Katholieke Godsdienst, maar streven we naar een geïntegreerd onderwijsinhoudelijk aanbod waarbij </br>leren leren, leren werken en leren leven hand in hand gaan.</p>
				</div>
			</div>

			<div class="learn-6">
				<img src="./images/veilig.png" class="veilig">
				<div class="l-title-6">
					<h2>Veilig</h2>
				</div>
				<div class="l-block-6">
					<p>De leerkracht is de veilige baken binnen het leerplanconcept ZILL. Hij staat</br> aan het roer en bepaalt de koers, maar verleent ook mede eigenaarschap</br> aan de leerlingen door samen arrangementen uit te werken. Op die manier</br> wisselt elke leraar doorheen de arrangementen van rol: van kapitein naar</br> mede – onderzoeker, van faciliteren tot meespelen.</p>
					<p>Daarbij zorgt de leerkracht voor een veilig leef – en leerklimaat, waarbinnen fouten </br>maken toegestaan is en noodzakelijk is om tot leren te komen.</br> We investeren in een gedifferentieerd zelfbeeld (IK), relaties tussen alle betrokkenen die </br>gebaseerd zijn op vertrouwen, respect en zorg (JIJ) en het samenhorigheidsgevoel binnen</br> Nieuwland als gemeenschap, waarin onze diversiteit als rijkdom wordt aanzien.</p>
				</div>
			</div>
		</div>`;
	});
}

init();
