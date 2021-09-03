import React, { useState } from "react";
import "./styles.css";

const techTalksDatabase = {
	Internet: [
		{
			name: "How you can help transform the internet into a place of trust",
			speaker: "Claire Wardle",
			link:
				"https://www.ted.com/talks/hans_block_and_moritz_riesewieck_the_price_of_a_clean_internet?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
		},
		{
			name: "The price of a 'clean' internet",
			speaker: "Hans Block and Moritz Riesewieck",
			link:
				"https://www.ted.com/talks/claire_wardle_how_you_can_help_transform_the_internet_into_a_place_of_trust?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
		},
		{
			name: "The hidden network that makes the internet possible",
			speaker: "Sajan Saini",
			link:
				"https://www.ted.com/talks/sajan_saini_the_hidden_network_that_makes_the_internet_possible?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
		}
	],
	Computers: [
		{
			name: "Everything around you can become a computer",
			speaker: "Ivan Poupyrev",
			link:
				"https://www.ted.com/talks/ivan_poupyrev_everything_around_you_can_become_a_computer?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
		},
		{
			name: "The high-stakes race to make quantum computers work",
			speaker: "Chiara Decaroli",
			link:
				"https://www.ted.com/talks/chiara_decaroli_the_high_stakes_race_to_make_quantum_computers_work?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
		},
		{
			name: "How close are we to uploading our minds?",
			speaker: "Michael S.A. Graziano",
			link:
				"https://www.ted.com/talks/michael_s_a_graziano_how_close_are_we_to_uploading_our_minds?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
		}
	],
	"Virtual Reality": [
		{
			name: "Virtual Worlds",
			speaker: "Far Flung",
			link:
				"https://www.ted.com/talks/far_flung_virtual_worlds?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
		},
		{
			name: "How virtual reality turns students into scientists",
			speaker: "Jessica Ochoa Hendrix",
			link:
				"https://www.ted.com/talks/jessica_ochoa_hendrix_how_virtual_reality_turns_students_into_scientists?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
		},
		{
			name: "The future of news? Virtual reality",
			speaker: "Nonny de la Peña",
			link:
				"https://www.ted.com/talks/nonny_de_la_pena_the_future_of_news_virtual_reality?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
		},
		{
			name: "The birth of virtual reality as an art form",
			speaker: "Chris Milk",
			link:
				"https://www.ted.com/talks/chris_milk_the_birth_of_virtual_reality_as_an_art_form?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
		}
	],
	"Artificial Intelligence": [
		{
			name: "How does artificial intelligence learn?",
			speaker: "Briana Brownell",
			link:
				"https://www.ted.com/talks/briana_brownell_how_does_artificial_intelligence_learn?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
		},
		{
			name: "How we can bring AI personalities to life",
			speaker: "Mariana Lin",
			link:
				"https://www.ted.com/talks/mariana_lin_how_we_can_bring_ai_personalities_to_life?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
		},
		{
			name: "Art in the age of machine intelligence",
			speaker: "Refik Anadol",
			link:
				"https://www.ted.com/talks/refik_anadol_art_in_the_age_of_machine_intelligence?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
		},
		{
			name: "How AI can help shatter barriers to equality",
			speaker: "Jamila Gordon",
			link:
				"https://www.ted.com/talks/jamila_gordon_how_ai_can_help_shatter_barriers_to_equality?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
		},
		{
			name: "6 big ethical questions about the future of AI",
			speaker: "Genevieve Bell",
			link:
				"https://www.ted.com/talks/genevieve_bell_6_big_ethical_questions_about_the_future_of_ai?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
		}
	],
	Blockchain: [
		{
			name: "The future of money",
			speaker: "Neha Narula",
			link:
				"https://www.ted.com/talks/neha_narula_the_future_of_money?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
		},
		{
			name: "The potential of blockchain",
			speaker: "Mike Schwartz",
			link:
				"https://www.ted.com/talks/mike_schwartz_the_potential_of_blockchain?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
		},
		{
			name: "How supply chain transparency can help the planet",
			speaker: "Markus Mutz",
			link:
				"https://www.ted.com/talks/markus_mutz_how_supply_chain_transparency_can_help_the_planet?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
		},
		{
			name: "How the blockchain is changing money and business",
			speaker: "Don Tapscott",
			link:
				"https://www.ted.com/talks/don_tapscott_how_the_blockchain_is_changing_money_and_business?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"
		}
	]
};

export default function App() {
	//object to array
	var dataBase = Object.keys(techTalksDatabase);

	//for genre
	var [selectedGenre, setSelectedGenre] = useState("Internet");

	function clickHandler(genre) {
		setSelectedGenre(genre);
	}
	return (
		<div className="App">
			{/* HEADER */}
			<header className="header">
				<h1 className="header-h1">
					TECH<span className="header-h1-talks">Talks</span>
				</h1>
				<h2 className="header-text">TED Talks on Technology</h2>
			</header>

			<section className="content">
				{/* INSTRUCTION */}
				<div className="content-text">
					{
						"Seclect your favorite genre and click on the TEDTalk to watch."
					}
				</div>

				{/* GENRE BUTTONS*/}
				<div>
					{dataBase.map((genre) => {
						return (
							<button
								className="button"
								key={genre}
								onClick={() => clickHandler(genre)}
							>
								{genre}
							</button>
						);
					})}
				</div>
			</section>

			{/* DISPLAY GENRE */}
			<h1 className="genre-display">{selectedGenre}</h1>

			{/* DISPLAY TED TALKS LIST */}
			<section className="talks-display">
				<ul className="talks-list">
					{techTalksDatabase[selectedGenre].map((talks) => {
						return (
							<li className="talks" key={talks}>
								<h2 className="talks-name">{talks.name}</h2>
								<div className="talks-speaker">{talks.speaker}</div>
								<a className="talks-link" href={talks.link}>
									Watch Now
								</a>
							</li>
						);
					})}
				</ul>
			</section>
		</div>
	);
}
