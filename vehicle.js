export default class Vehicle {
  constructor(id, licensePlate, brand, color, ownerName) {
    this.#id = id;
    this.#licensePlate = licensePlate;
    this.#brand = brand;
    this.#color = color;
    this.#ownerName = ownerName;
    this.#entryTimeInMinutes = 0;
    this.#exitTimeInMinutes = 0;
  }
  setEntryTime() {
    const entryTime = new Date();
    this.#entryTimeInMinutes = entryTime.getHours() * 60;
    this.#entryTimeInMinutes += entryTime.getMinutes();
  }
  getEntryTime = () => this.#entryTimeInMinutes;

  setExitTime() {
    const exitTime = new Date();
    this.#exitTimeInMinutes = exitTime.getHours() * 60;
    this.#exitTimeInMinutes += exitTime.getMinutes();
  }
  getReport() {
    const entryTime =
      this.#entryTimeInMinutes / 60 + ":" + (this.#entryTimeInMinutes % 60);
    const exitTime =
      this.#exitTimeInMinutes / 60 + ":" + (this.#exitTimeInMinutes % 60);
    return { id: this.id, entry: entryTime, exit: exitTime };
  }
  getTotalTime = () => this.#exitTimeInMinutes - this.#entryTimeInMinutes;
}
