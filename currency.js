/*import vase farakhani ye mazhol hastesh ke mishe azash estefade konim. */
import React from 'react';
//baray in ke port 3000 ro bekhone
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
app.get('/currency', function (req, res) {
	const pathToHtmlFile = path.resolve(__dirname, '../rate');
	const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
	res.send(contentFromHtmlFile);
}); 
app.use('/static', express.static(path.resolve(__dirname, '../rate')));

function currency(props) { return(
	<div ClassName="card" key={props.index}>
		<div ClassName="body-card d-flex justify-content-between">
			<div ClassName="buy-sell-card">
				<h6 ClassName="buy-card">
					/*eleman be khater inke nare khat bad az tag span estefade shode. */
					<span> فروش: </span> 
					<b> {props.buy-curreny}</b>
				</h6>
				<h6 ClassName="sell-card">
					<span> خرید: </span>
					<b> {props.sell-currency} </b>
				</h6>
			</div>
			<div ClassName="d-flex justify-content-between align-items-center">
				<h4 className="code-currency"> 
					{props.code-courency}
				</h4>
				<img className="img" src={`${window.location.origin}/parcham/${props.courency_parcham}.png`} width="43" height="33" alt={props.code-courency}/>
			</div>
		</div>
	</div>
	)
}
/* export mese return amal mikone. */
export default currency;