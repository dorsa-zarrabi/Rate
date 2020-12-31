/*import vase farakhani ye mazhol hastesh ke mishe azash estefade konim. */
import React from 'react';
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
					{props.code-courrency}
				</h4>
				<img className="img" src={`${window.location.origin}/parcham/${props.courrency-parcham}.png`} width="43" height="33" alt={props.code-courency}/>
			</div>
		</div>
	</div>
	)
}
/* export mese return amal mikone. */
export default currency;
