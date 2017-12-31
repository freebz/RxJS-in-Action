// Listing 10.1  A React account balances that updates every second

const AccountBalance = React.createClass({
    getInitialState() {
	return {checking: 0, savings: 0};
    },
    componentDidMount() {
	Rx.Observable.interval(1000)
	    .map(value => ({checking: value, savings: value}))
	    .subscribe(state => this.setState(state))
    },
    render() {
	return React.createElement('div', {},
	  `Checking: ${this.state.checking} USD
	   Savings: ${this.state.savings} USD`
	);
    }
});
