export default class EventObserver {
		constructor() {
			this.observers = [];
		}

		subscribe(fn) {
			this.observers.push(fn);
		}

		unsubscribe(fn) {
			this.observers = this.observers.filter((subscriber) => subscriber !== fn);
		}

		broadcast({data, target = ""}) {
			this.observers.forEach((subscriber) => subscriber(data, target));
		}
}