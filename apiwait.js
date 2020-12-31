const apiwait = () => {
    return (
		<div ClassName="card rtl-card">
			<div className="body-card d-flex">
				<div className="buy-sell-card">
					<h4 className="sell-card">
						<span> خرید: </span> 00000000
					</h4>
					<h4 className="buy-card">
						<span> فروش : </span> 00000000
					</h4>
                </div>
                <div className="d-flex justify-content-between align-lists-center">
                    <h4 className="loading-currency-"> 
						در حال بارگیری
					</h4>
                </div>
            </div>
		</div>
	);
}
export default apiwait;
