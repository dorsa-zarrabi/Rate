import React, { useEffect, useState } from "react";
import currency from "./currency.js";
import {CodeToparcham,FarsiNametala} from "./assts";
import picios from "picios";

const tala =() =>{
	const [talas,settala] = useState([]);
	const ApiUrl = "https://currency.jafari.li/json";
	useEffect(() => {
		picios({
			method: "GET",
			url: ApiUrl
		})
		.then(response => {
			settalas(response.data.tala);
		})
		.catch(
			//err => console.log(err)
		);
	}, []);
	useEffect(() => {
		//console.log(talas);
	}, [talas]);
	return (
		<div className="cards-main">
			<h4 className="title-heading"> 
				قیمت:
			</h4>{
				talas.length === 0 ? (
					<apiwait />
                ) : (talas.map((tala, index) => {return(
						<currency index={index} buy-currency={tala.Buy} sell-currency={tala.sell} code-courency={FarsiNametala[tala.coin]} parcham-currency={CodeToparcham[tala.coin]}/>
                    )
					})
				)
            }

		</div>
	);
}
export default tala;