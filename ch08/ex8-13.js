const updatePriceChange = (rowElem, change) => {
    let [,, changeElem] = rowElem.childNodes;
    let priceClass = "green-text", priceIcon="up-green";
    if(parseFloat(change) < 0) {
	priceClass = "red-text"; priceIcon="down-red";
    }
    changeElem.innerHTML =
	`<span class="${priceClass}">
	    <span class="${priceIcon}">
	        (${parseFloat(Math.abs(change)).toFixed(2)})
            </span>
	</span>`;
};
