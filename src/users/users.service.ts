import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {id:1, name:"alice"},
        {id:2, name:"bob"},
        {id:3, name:"john"},
    ];

    findAll(){
        return this.users;
    }

    findOne(id:number){
        return this.users.find(user=> user.id===id);
    }
}


// @Injectable() makes the service available for dependency injection.

// findAll() returns all users.

// findOne(id) returns a user matching the ID, or undefined if none exists.