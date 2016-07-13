
export default function Bus(initial) {
  const that = this;
  this.value = initial;
  this.subscribers = [];
  this.current = () => this.value;
  this.subscribe = (subscriber) => this.subscribers.push(subscriber);
  this.push = (v) => {
    this.value = v;
    this.subscribers.forEach((fn) => fn(that.current()))
  };
}
