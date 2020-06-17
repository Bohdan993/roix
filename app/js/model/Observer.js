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

		broadcast({data, param = ""}) {
			this.observers.forEach((subscriber) => subscriber(data, param));
		}
}