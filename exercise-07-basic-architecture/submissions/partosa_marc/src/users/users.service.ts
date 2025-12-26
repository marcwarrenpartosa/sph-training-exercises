import { Injectable } from '@nestjs/common';
import { User } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private users: User [] = [
        {id: "1", name : "Marc Partosa", email : "marcpartosa@gmail.com", token:"1234"},
        {id: "2", name: "Sam Olicia", email: "samolicia@gmail.com", token:"4567"},
        {id: "3", name: "Alcris Tapic", email: "alcristapic@gmail.com", token:"7890"},
    ]

    getAllUsers(){
        return this.users;
    }

    getUserById(id: string): User | undefined {
        return this.users.find(user => user.id === id);
    }

    verifyToken(token: string): string | null {
        const user = this.users.find(user => user.token === token);
        if (!user) {
            return null;
        }
        return user.id;
    }
}


