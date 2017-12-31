React.createElement(
    type,
    [props],
    [...children]
)



const element = ReactDOM.render(
    React.createElement('div', {}, 'Hello RxJS!'),
    document.getElementById('root')
);



const element = '<div>Hello RxJS!</div>';



const HelloWorld = props =>
      React.createElement('div', {}, `${props.greeting} RxJS!`);



ReactDOM.render(
    React.createElement(HelloWorld, {greeting: 'Hola'}),
    document.getElementById('root')
);



const AccountBalance = props =>
      React.createElement('div', [] `Checking: ${props.checking} USD
	  Savings: ${props.savings}`);



Rx.Observable.interval(1000)
    .map(value => ({checking: value, saving: value}))
    .subscribe(props =>
	       ReactDOM.render(
		   React.createElement(AccountBalance, props),
		   document.getElementById('root')
	       )
	      );



const AccountBalance = React.createClass({
    render() {
	return React.createElement('div', {},
            `Checking: ${this.props.checking} USD
	     Savings: ${this.props.saving} USD`)
    }
});
