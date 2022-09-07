class Parking {
  constructor(numberOfParkingSpaces) {
    this.#parkingSpaces = numberOfParkingSpaces;
    this.#parkingLots = [];
    this.#parkingReport = [];
    this.#parkingProfit = 0;
  }
  park(vehicle) {
    if (this.#parkingSpaces > 0) {
      this.#parkingLots.push(vehicle);
      vehicle.setEntryTime();
      this.#parkingSpaces--;
      return true;
    } else {
      return false;
    }
  }
  freeSpace(vehicleId) {
    const vehicle = this.#parkingLots.find(
      (vehicle) => vehicle.id == vehicleId
    );
    this.#parkingLots = this.#parkingLots.filter(
      (vehicle) => vehicle.id != vehicleId
    );
    vehicle.setExitTime();
    this.#updateParkingData(vehicle);
  }

  #updateParkingData(vehicle) {
    this.#parkingProfit += vehicle.getTotalCost();
    this.#parkingReport.push(vehicle.getReport());
    this.#parkingSpaces++;
  }
  generateReport() {
    this.#parkingLots.map((vehicle) => {
      this.#parkingReport.push(vehicle.getReport());
    });
    return this.#parkingReport;
  }
  getProfit = () => this.#parkingProfit;
}
