import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly photoRepository: Repository<UserEntity>
  ) {}

  @Get()
  getData(): Promise<UserEntity[]> {
    return this.photoRepository.find();
  }
}
