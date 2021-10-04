import { UserEntity } from '../domain/model';
import CreateUserDto from '../dto/createUser.dto';

export interface IUserRepository {
  create(dto: CreateUserDto): Promise<UserEntity>;
  // findById(id: string): Promise<UserModel>;
  // findByEmail(email: string): Promise<UserModel>;
}
