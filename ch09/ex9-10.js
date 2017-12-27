it('Create time from a marble diagram', function () {
    let scheduler = new Rx.TestScheduler();
    let time = scheduler.createTime('-----|');
    expect(time).to.equal(50);
});



it('Should parse a marble string into a series of notifications',
   function () {
       let result = Rx.TestScheduler.parseMarbles(
	   '--1---b---|',
	   { a: 'A', b: 'B' });
       expect(result).deep.equal([
	   { frame: 20, notification: Rx.Notification.createNext('A') },
	   { frame: 60, notification: Rx.Notification.createNext('B') },
	   { frame: 100, notification: Rx.Notification.createComplete() }
       ]);
   });
