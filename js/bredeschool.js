function init() {
	filterTitle();
	filterContent();
}

function filterTitle() {
	document.querySelector(".button-1").addEventListener('click', function () {
		document.getElementById('title').innerHTML = `
			<div class="bschool-title">
				<h1>Wat is Brede School?</h1>
			</div>`;

	});

	document.querySelector(".button-2").addEventListener('click', function () {
		document.getElementById('title').innerHTML = `
			<div class="hoofdst-title">
				<h1>Hoofdstedelijke Academie</h1>
			</div>`;

	});

	document.querySelector(".button-3").addEventListener('click', function () {
		document.getElementById('title').innerHTML = `
			<div class="buiteling-title">
				<h1>Buiteling</h1>
			</div>`;

	});

	document.querySelector(".button-4").addEventListener('click', function () {
		document.getElementById('title').innerHTML = `
		<div class="film-title">
				<h1>Filmclub</h1>
			</div>`;

	});

}


function filterContent() {
	document.querySelector(".button-1").addEventListener('click', function () {
		document.getElementById('content').innerHTML = `
      <div class="container">

		<div class="bschool-container">
			<div class="bschool-1">
				<h2>Wat is Brede School?</h2>
				<div class="s-rectangle">
				<p>Brede Scholen zijn scholen die alles inzetten op maximale ontwikkelingskansen voor kinderen en jongeren. Hoe ze dat voor elkaar krijgen? Door samen te werken met de buurt, ouders en organisaties – een écht geïntegreerde aanpak dus. </p>
				</div>
			</div>

			<div class="bschool-2">
				<h2>Maximale Ontwikkelingskansen</h2>
				<div class="s-rectangle">
				<p>Als we aan school denken, denken we vaak aan een schoolgebouw, verplichte lessen en examens. Een school kan veel meer zijn dan dat. Een school is een plaats waar jongeren zich kunnen ontwikkelen. Een Brede School werkt samen met de buurt, ouders en lokale partners in onderwijs, cultuur, sport, jeugd, kinderopvang en welzijn. Ze werken samen aan een leerrijke en fijne omgeving voor alle kinderen en jongeren, vanuit een eenzelfde pedagogische lijn.</p>
				</div>
			</div>

			<div class="bschool-3">
				<h2>Opgroeien als Brussels ketje</h2>
				<div class="s-rectangle">
				<p>Kinderen en jongeren hebben een veilige omgeving nodig om te leren, te oefenen en te ontdekken. Een Brede School is zo’n veilige omgeving. Ze biedt kinderen en jongeren maximale ontwikkelingskansen.  Elke Brede School heeft een eigen focus. Die ontstaat uit de behoeften en talenten van kinderen en jongeren en de mogelijkheden van de wijk.</p>
				</div>
			</div>

			<div class="bschool-4">
				<h2>Geloven in de Brede School</h2>
				<div class="s-rectangle">
				<p>In 2010 keurde het VGC-College de visietekst 'Brede School' goed. Dat gebeurde na een intensieve samenwerking over de grenzen van beleidsdomeinen heen.</p>
				<p>In de praktijk realiseert de VGC deze visie op drie manieren:</p>	
					<ol>
					<li>- VGC subsidieert de Brusselse Brede Scholen voor wijkgerichte en lokale coördinatie.</li>
					<li>- VGC ondersteunt Brusselse Brede Scholen inhoudelijk.</li>
					<li>- VGC stimuleert en coördineert de Brusselbrede samenwerking en ontwikkeling van Brede Scholen.</li>
				</ol>
				<p>De Vlaamse Gemeenschap is een belangrijke partner van de VGC bij de realisatie van Brede School in Brussel.</p>
				</div>
			</div>

			<div class="bschool-5">
				<h2>Ondersteuning van de Brede Scholen in Brussel</h2>
				<div class="s-rectangle">
				<p><strong>Inhoudelijke ondersteuning via het Platform Brede School Brussel</strong>
				<p>Het Platform Brede School Brussel is deel van het Onderwijscentrum Brussel (OCB). </p>
				<p>De doelstelling? Deskundigheid bevorderen en de kwaliteit van de Brede Scholen in Brussel bewaken. Ook scholen die geen subsidies ontvangen, kunnen inhoudelijke ondersteuning krijgen. Het OCB voorziet een vormingsaanbod in groep en coaching op maat.</p></p>
				</div>
			</div>
		</div>
	</div>`;

	});

	document.querySelector(".button-2").addEventListener('click', function () {
		document.getElementById('content').innerHTML = `
	<div class="container">

		<div class="hcontainer">
			<div class="item-1">
				<h2>MUZIEK, WOORD EN DANS</h2>
				<div class="h-rectangle">
				<p> De Hoofdstedelijke Academie is een creatieve omgeving waar zowel kinderen vanaf 6 jaar, jongeren als volwassenen lessen muziek, theater en dans kunnen volgen. Onze hoofdvestiging is gelegen in het centrum van Brussel, gemakkelijk bereikbaar vanuit alle hoeken van het land. Daarnaast organiseren we lessen op verschillende plaatsen in Laken, Neder-Over-Heembeek en Haren. De academie heeft een zeer gevarieerd lerarenteam. Naast het les geven zijn zij ook actief als acteur, danser of muzikant en nemen ze deze expertise mee naar de les. </p>
				</div>
			</div>

			<img src="./images/hoofdstedelijk_pic.png" class="pic">

			<div class="item-2">
				<div class="h-rectangle">
					<p>Op onze academie willen we de leerlingen de mogelijkheid bieden om hun talenten maximaal te ontplooien. Ons aanbod is daarom erg gevarieerd: leerlingen krijgen de keuze tussen klassieke muziek, jazz-pop-rock en oude muziek; speltheater en verteltheater; klassieke dans, hedendaagse dans en urban. Alvorens te kiezen krijgen de leerlingen de tijd om te proeven van de verschillende lessen en disciplines. </p>	
					<p>Tijdens de opleiding bieden we ook verschillende podium kansen aan onze leerlingen. In samenspraak met de leerkracht kunnen ze o.a. aan een concert, voorstelling of grote productie meewerken. Ook maken we gebruik van de cultuurmogelijkheden die Stad Brussel te bieden heeft zoals Bozar, Bronks, Flagey, etc., dit door o.a. het organiseren van uitstappen.</p>		
				</div>
			</div>
			
		</div>

		<div class="h-button">
				<a href="https://www.hoofdstedelijkeacademie.be/" target="_blank">Ontdek hier meer</a>
		</div>
	</div>`;

	});

	document.querySelector(".button-3").addEventListener('click', function () {
		document.getElementById('content').innerHTML = `
		<div class="bu-title">
		<h2>Welkom</h2>
	</div>

	<div class="container">

		<div class="bucontainer">
			<div class="bu-row-1">
				<div class="buiteling-1">
					<img src="/images/ons_brussel.png" class="bu-pic-1">
					<div class="bu-h3">
						<h3>Ons Brussel</h3>
					</div>
					<p>Als kinderopvang in de grootstad willen wij actief meewerken aan een maatschappij van gelijke kansen. Dit is te zien aan onze diverse ploeg, in onze buurtsamenwerkingen en aan onze tarieven. We omhelzen de stad als een leerrijke ontmoetingsplaats, waarin we volop kunnen spelen!</p>
				</div>

				<div class="buiteling-2">
					<img src="/images/allerlei_ateliers.png" class="bu-pic-2">
					<div class="bu-h3">
						<h3>Allerlei Ateliers</h3>
					</div>
					<p>Elke dag bieden we uiteenlopende activiteiten aan op onze locaties. Creatieve ateliers, sport, expressie of media, georganiseerd door onze eigen begeleiders of in samenwerking met onze partners. Zo creëren we een uitdagende en stimulerende speel- en leeromgeving.</p>
				</div>
			</div>

			<div class="bu-row-2">
				<div class="buiteling-3">
					<img src="/images/vrij_spel.png" class="bu-pic-3">
					<div class="bu-h3">
						<h3>Vrij Spel</h3>
					</div>
					<p>In De Buiteling zien wij de waarde van begeleid vrij spelen. Kinderen leren dagelijks spelend initiatief te nemen, te vertrouwen op zichzelf, anderen en andere meningen te respecteren en om te gaan met conflicten. Ze groeien en experimenteren er op los in een veilige omgeving.</p>
				</div>

				<div class="buiteling-4">
					<img src="/images/samen_leren.png" class="bu-pic-4">
					<div class="bu-h3">
						<h3>Samen Leren</h3>
					</div>
					<p>Ook onze begeleiders in opleiding leren iedere dag van onze ervaren begeleiders in de opvang. Ze volgen taaltrajecten om hun Nederlands aan te scherpen en diverse opleidingen en workshops om hun capaciteiten op de werkvloer verder te ontwikkelen.</p>
					<p>Inschrijven voor de Buiteling kan op school of via:</p>
					<div class="buiteling-button">
						<a href="https://www.debuiteling.be/" target="_blank">De Buiteling</a>
					</div>
				</div>
			</div>
		</div>
		
	</div>`;
	});

	document.querySelector(".button-4").addEventListener('click', function () {
		document.getElementById('content').innerHTML = `
			<div class="main-filmcontainer">
		<div class="filmcontainer">
			<img src="images/Icon_film.png" class="film-icon">
				<p>De OFFICIAL Filmclub toont kwaliteitsfilm op donderdagavond voor kinderen van het derde leerjaar tot het zesde leerjaar</p>
				<p>...met een hart voor cinema.</p>
				<p>Inschrijven kan bij meester Brian.</p>
				<p class="sentence">Ontdek meer over de Filmclub op</p>
				<div class="film-button">
					<a href="https://www.jeugdfilm.be/film-zoeken" target="_blank">Filmclub</a>
				</div>
		</div>
	</div>`;
	});
}

init();