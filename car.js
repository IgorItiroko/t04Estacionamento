import Vehicle from "./vehicle";
export default class Car extends Vehicle {
  constructor(id, licensePlate, brand, color, ownerName, doorsNumber) {
    super(id, licensePlate, brand, color, ownerName);
    this.#doorsNumber = doorsNumber;
  }
  getTotalCost() {
    const parkedTime = this.getTotalTime();
    switch (parkedTime) {
      case parkedTime <= 15:
        return 0;
      case 15 < parkedTime < 60:
        return 4;
      case parkedTime > 240:
        return 20;
    }
  }
}
