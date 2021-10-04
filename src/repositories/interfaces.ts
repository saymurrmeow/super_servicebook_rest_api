import { UserEntity } from '../domain/model';
import CreateUserDto from '../dto/createUser.dto';

export interface IUserRepository {
  create(dto: CreateUserDto): Promise<any>;
  findById(id: string): Promise<any>;
  // findByEmail(email: string): Promise<UserModel>;
}
