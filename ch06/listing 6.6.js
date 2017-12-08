// Listing 6.6  Bitly URL shortener stream

const ajaxAsObservable = Rx.Observable.bindCallback(ajax);

const bitly$ = url => Rx.Observable.of(url)
      .filter(R.compose(R.not, R.isEmpty))
      .map(encodeURIComponent)
      .map(encodedUrl =>
	   `${API}/v3/shorten?longUrl=${encodedUrl}&login=${LOGIN}&apiKey=${KEY}`)
      .switchMap(url => ajaxAsObservable(url).map(R.head))
      .filter(obj => obj.status_code === 200 && obj.status_txt === 'OK')
      .pluck('data', 'url');
