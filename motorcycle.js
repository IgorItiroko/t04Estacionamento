import Vehicle from "./vehicle";
export default class Motorcycle extends Vehicle {
  constructor(id, licensePlate, brand, color, ownerName) {
    super(id, licensePlate, brand, color, ownerName);
    this.#doorsNumber = doorsNumber;
  }
  getTotalCost() {
    const parkedTime = this.getTotalTime();
    switch (parkedTime) {
      case parkedTime <= 30:
        return 0;
      case 30 < parkedTime < 60:
        return 2;
      case parkedTime > 240:
        return 10;
    }
  }
}
