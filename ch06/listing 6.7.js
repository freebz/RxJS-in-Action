// Listing 6.7  Google URL shortener stream

const GKEY = '<YOUR-GENERATED-OAUTH-KEY>';

const gAPILoadAsObservable = Rx.Observable.bindCallback(gapi.load);

const goog$ = url => Rx.Observable.of(url)
      .filter(R.compose($.not, R.isEmpty))
      .map(encodeURIComponent)
      .switchMap(() =>
          gAPILoadAsObservable('client'))
      .do(() => gapi.client.setApiKey(GKEY))
      .switchMap(() =>
          Rx.Observable.fromPromise(gapi.client.load('urlshortener', 'v1')))
      .switchMap(() =>
          Rx.Observable.fromPromise(gapi.client.urlshortener.url.insert(
	    {'longUrl': example_url}))
      )
      .filter(obj => obj.status === 200)
      .pluck('result', 'id');
