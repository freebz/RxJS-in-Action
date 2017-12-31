// Listing 10.2  Communicating to child components using a single parent

const AccountBalance = props =>
      React.createElement('div', {}, `${props.name}: ${props.value} USD`);

const checking$ = Rx.Observable.timer(0, 1000);
const savings$ = Rx.Observable.timer(0, 1000 * 5);

const balance$ = Rx.Observable.combineLatest(checking$, savings$);

const Balances = React.createClass({
    getInitialState() {
	return {checking: 0, savings: 0};
    },
    componentDidMount() {
	this.props.balance$
	    .subscribe(([checking, savings]) =>
		       this.setState({checking, savings})
	    );
    },
    render() {
	const { checking, savings } = this.state;
	return (
	    React.createElement('div', {},
		  React.createElement(AccountBalance,
		    {name: 'Checking', value: checking}),
		  React.createElement(AccountBalance,
		    {name: 'Savings', value: savings}))
	);
    }
});

ReactDOM.render(
    React.createElement(Balances, {balance$}),
    document.getElementById('root')
);
