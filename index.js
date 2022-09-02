class PlaneParams {
  constructor(model, maxSpeed) {
    this.model = model;
    this.maxSpeed = maxSpeed;
  }
}

class TU154 {
  constructor(name) {
    //Композиция
    this.params = new PlaneParams('ТУ-154', 150);
    this.status = 'land';
    this.name = name;
  }
  takeof() {
    this.status = 'air';
  }
  landing() {
    this.status = 'land';
  }
}
class MIG {
  constructor(name) {
    //Композиция
    this.params = new PlaneParams('МИГ', 200);
    this.status = 'land';
    this.name = name;
  }
  takeof() {
    this.status = 'air';
  }
  landing() {
    this.status = 'land';
  }
  attack() {
    console.log('самолет атакует');
  }
}

class Airport {
  constructor(...initPlanesArr) {
    // Агрегация
    this.planes = [...initPlanesArr];
  }
  planeIn(plane) {
    if (!this.planes.includes(plane)) {
      this.planes.push(plane);
      plane.landing();
      console.log(plane.name, 'прибыл');
    } else {
      console.log(plane.name, 'уже в аэропорту');
    }
  }
  planeOut(plane) {
    if (this.planes.includes(plane)) {
      this.planes = this.planes.filter((pl) => pl !== plane);
      plane.takeof();
      console.log(plane.name, 'освободил место и улетел');
    } else {
      console.log(plane.name, 'еще не прибыл');
    }
  }
  planeParking(plane) {
    if (this.planes.includes(plane)) {
      console.log(plane.name, 'ушел на стоянку');
    } else {
      console.log(plane.name, 'еще не прибыл');
    }
  }
  planeReady(plane) {
    if (this.planes.includes(plane)) {
      console.log(plane.name, 'готов взлетать');
    } else {
      console.log(plane.name, 'еще не прибыл');
    }
  }
  planeService(plane) {
    if (this.planes.includes(plane)) {
      console.log(
        plane.name,
        plane.params.model,
        'отправился на техническое обслуживание'
      );
    } else {
      console.log(plane.name, 'еще не прибыл');
    }
  }
  info() {
    console.log('Количество самолетов в аэропорту:', this.planes.length);
  }
}
