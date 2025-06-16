function init() {
	filter();
}


function filter() {
	document.querySelector(".button-1").addEventListener('click', function () {
		document.getElementById('content').innerHTML = `
      <div class="container">

		<div class="bschool-container">
			<div class="bschool-1">
				<h2>Wat is Brede School?</h2>
				<div class="rectangle">
				<p>Brede Scholen zijn scholen die alles inzetten op maximale ontwikkelingskansen voor kinderen en jongeren. Hoe ze dat voor elkaar krijgen? Door samen te werken met de buurt, ouders en organisaties – een écht geïntegreerde aanpak dus. </p>
				</div>
			</div>

			<div class="bschool-2">
				<h2>Maximale Ontwikkelingskansen</h2>
				<div class="rectangle">
				<p>Als we aan school denken, denken we vaak aan een schoolgebouw, verplichte lessen en examens. Een school kan veel meer zijn dan dat. Een school is een plaats waar jongeren zich kunnen ontwikkelen. Een Brede School werkt samen met de buurt, ouders en lokale partners in onderwijs, cultuur, sport, jeugd, kinderopvang en welzijn. Ze werken samen aan een leerrijke en fijne omgeving voor alle kinderen en jongeren, vanuit een eenzelfde pedagogische lijn.</p>
				</div>
			</div>

			<div class="bschool-3">
				<h2>Opgroeien als Brussels ketje</h2>
				<div class="rectangle">
				<p>Kinderen en jongeren hebben een veilige omgeving nodig om te leren, te oefenen en te ontdekken. Een Brede School is zo’n veilige omgeving. Ze biedt kinderen en jongeren maximale ontwikkelingskansen.  Elke Brede School heeft een eigen focus. Die ontstaat uit de behoeften en talenten van kinderen en jongeren en de mogelijkheden van de wijk.</p>
				</div>
			</div>

			<div class="bschool-4">
				<h2>Geloven in de Brede School</h2>
				<div class="rectangle">
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
				<div class="rectangle">
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
			<div class="hoofdst-1">
				<h2>MUZIEK, WOORD EN DANS</h2>
				<div class="rectangle">
				<p> De Hoofdstedelijke Academie is een creatieve omgeving waar zowel kinderen vanaf 6 jaar, jongeren als volwassenen lessen muziek, theater en dans kunnen volgen. Onze hoofdvestiging is gelegen in het centrum van Brussel, gemakkelijk bereikbaar vanuit alle hoeken van het land. Daarnaast organiseren we lessen op verschillende plaatsen in Laken, Neder-Over-Heembeek en Haren. De academie heeft een zeer gevarieerd lerarenteam. Naast het les geven zijn zij ook actief als acteur, danser of muzikant en nemen ze deze expertise mee naar de les. </p>
				</div>
			</div>

			<img src="./images/hoofdstedelijk_pic.png" class="pic">

			<div class="item-2">
				<div class="rectangle">
					<p>Op onze academie willen we de leerlingen de mogelijkheid bieden om hun talenten maximaal te ontplooien. Ons aanbod is daarom erg gevarieerd: leerlingen krijgen de keuze tussen klassieke muziek, jazz-pop-rock en oude muziek; speltheater en verteltheater; klassieke dans, hedendaagse dans en urban. Alvorens te kiezen krijgen de leerlingen de tijd om te proeven van de verschillende lessen en disciplines. </p>	
					<p>Tijdens de opleiding bieden we ook verschillende podium kansen aan onze leerlingen. In samenspraak met de leerkracht kunnen ze o.a. aan een concert, voorstelling of grote productie meewerken. Ook maken we gebruik van de cultuurmogelijkheden die Stad Brussel te bieden heeft zoals Bozar, Bronks, Flagey, etc., dit door o.a. het organiseren van uitstappen.</p>		
				</div>
			</div>
			
		</div>

		<div class="hoofdstedelijk-button">
				<a href="https://www.hoofdstedelijkeacademie.be/" target="_blank">Ontdek hier meer</a>
		</div>
	</div>`;

	});

	document.querySelector(".button-3").addEventListener('click', function () {
		document.getElementById('content').innerHTML = ``;
	});

	document.querySelector(".button-4").addEventListener('click', function () {
		document.getElementById('content').innerHTML = ``;
	});
}

init();