import React, { useEffect, useState } from "react";
import axcios from "axios";
import {CodeToparcham,FarsiNametala} from "./assts";
import apiwait from './apiwait.js';
import currency from './currency.js';
const tala = () =>{
	const [lists,setlists] = useState([]);
	const ApiUrl = "https://currency.jafari.li/json";
	useEffect(() => {
		axios({
			method: "GET",
			url: ApiUrl
		})
		.then(response => {
			setlists(response.data.list);
		})
		.catch(
			/* error => console.log(err) */
		);
    }, []);
	useEffect(() => {
        /* console.log(lists); */
    }, [lists]);
	return (
        <div className="main-cards">
            <h4 className="title-heading">
				قیمت :
			</h4>
            {(lists.map((list, index) => {return(
				<currency index={index} currency-buy={list.Rate} currency-sell={list.Rate} currency-code={FarsiNametala[list.Name]} currency-parcham={CodeToparcham[list.Name]}/>
				)
				})
			)}
		</div>
	);
}
export default tala;
