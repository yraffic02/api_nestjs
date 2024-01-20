import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  private readonly cars: Car[] = []
  private id: number = 1
  
  create(createCarDto: CreateCarDto) {
    const newCar = {
      id: this.id,
      brand: createCarDto.brand,
      model: createCarDto.model,
      year: createCarDto.year
    }
    this.id += this.id

    this.cars.push(newCar);
    return newCar;
  }

  findAll() {
    return this.cars;
  }

  findOne(id: number) {
    const car = this.cars.find(car => car.id === id)

    if(!car){
      throw new NotFoundException('Carro não existe')
    }
    return ;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    const car = this.cars.find(car => car.id === id)

    if(!car){
      throw new NotFoundException('Carro não existe')
    }
    
    if(car){
      car.brand = updateCarDto.brand
      car.model = updateCarDto.model
      car.year = updateCarDto.year
      return
    }
  }

  remove(id: number) {
    const car = this.cars.find(car => car.id === id)

    if(!car){
      throw new NotFoundException('Carro não existe')
    }

    if(car){
      const index = this.cars.findIndex(car => car.id === id)
      this.cars.splice(index, 1)
      return;
    }
  }
}
