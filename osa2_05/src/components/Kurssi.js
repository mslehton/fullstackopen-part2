import React from 'react'

const Otsikko = (props) => (
	<h2>{props.nimi}</h2>
)

const Sisalto = (props) => (
	<ul>
	{props.kurssi.osat.map(osa => <Osa key={osa.id} osa={osa}/>)}
	</ul>
)

const Osa = props => (
	<li>{props.osa.nimi} {props.osa.tehtavia}</li>
)

const Kurssi = (props) => (
	<div>
	<Otsikko nimi={props.kurssi.nimi} />
	<Sisalto kurssi={props.kurssi} />
	<Yhteensa kurssi={props.kurssi} />
	</div>
)


const Yhteensa = (props) => (
	<p>
	Yhteensä {props.kurssi.osat.reduce((acc, cur) => acc + cur.tehtavia,0)} tehtävää
	</p>
)

export default Kurssi
