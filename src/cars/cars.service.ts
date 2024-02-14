import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CarsService {
  private readonly cars: Car[] = []
  private id: number = 1
  
  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuidv4(),
      brand: createCarDto.brand,
      model: createCarDto.model,
      year: createCarDto.year
    };

    this.cars.push(newCar);
    return newCar;
  }

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    const car = this.cars.find(car => car.id === id)

    if(!car){
      throw new NotFoundException('Carro não existe')
    } 
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
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

  remove(id: string) {
    const carIndex = this.cars.findIndex(car => car.id === id);

    if (carIndex === -1) {
      throw new NotFoundException('Carro não existe');
    }

    this.cars.splice(carIndex, 1);
    return;
  }
}
