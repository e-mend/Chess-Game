import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// ORM to implement
export type User = any;

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: '8iMlG@example.com',
      password: 'password',
      elo: 1550,
      wins: 2,
      losses: 1,
      draws: 0
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: '2vVb0@example.com',
      password: 'password',
      elo: 1700,
      wins: 10,
      losses: 2,
      draws: 0
    }
  ];

  public async create(createUserDto: CreateUserDto): Promise<boolean>
  {
    this.users.push(createUserDto);

    return true;
  }

  public async findAll(): Promise<User[] | []>
  {
    return this.users;
  }

  public async findOne(id: number): Promise<User | undefined>
  {
    return this.users.find(user => user.id === id);
  }

  public async update(id: number, updateUserDto: UpdateUserDto): Promise<boolean>
  {
    const user = this.findOne(id);
    if (!user) return false;
    Object.assign(user, updateUserDto);

    return true;
  }

  public async remove(id: number): Promise<boolean>
  {
    const user = this.findOne(id);
    if (!user) return false;
    this.users.splice(this.users.indexOf(user), 1);

    return true;
  }
}
