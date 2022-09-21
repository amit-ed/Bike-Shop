export class Bike {
  id !: number;
  brand !: string;
  price !: number;
  // copy(bike : Bike)
  // {
  //   this.id = bike.id;
  //   this.brand = bike.brand;
  //   this.price = bike.price;
  // }
}

export let bikes = [
  {
    id: 1,
    brand: 'Yakuza',
    price: 799,
  },
  {
    id: 2,
    brand: 'Race',
    price: 699,
  },
  {
    id: 3,
    brand: 'Stl',
    price: 299,
  }
];
