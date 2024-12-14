import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  async validatePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  async findByEmail(email: string) {
    return this.repository.findOneBy({ email });
  }

  async findById(id: number) {
    return await this.repository.findOneBy({ id });
  }

  async create(dto: CreateUserDto) {
    const hashPassword = await bcrypt.hash(
      dto.password,
      await bcrypt.genSalt(),
    );

    return this.repository.save({
      email: dto.email,
      password: hashPassword,
      fullName: dto.fullName,
    });
  }
}
