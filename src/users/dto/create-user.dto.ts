import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: '@gmail.com',
    description: 'Почта',
  })
  email: string;

  @ApiProperty({
    default: 'Default',
    description: 'Полное Имя',
  })
  fullName: string;

  @ApiProperty({
    default: '123456',
    description: 'Пароль',
  })
  password: string;
}
