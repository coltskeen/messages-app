//Sits in front the repo and is used by the controller to access the repository
import { MessagesRepository } from "./messages.repository";

export class MessagesService {
    messagesRepo: MessagesRepository;
    
    constructor() {
        // Service is creating its own dependencies
        // DONT DO THIS ON REAL APPS --> IN NEST YOU'LL USE DEPENDENCY INJECTION INSTEAD
        // THIS CODE IS TEMPORARY FOR NOW
        this.messagesRepo = new MessagesRepository();
    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }
}