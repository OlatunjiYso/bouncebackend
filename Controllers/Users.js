import BaseController from './BaseController.js';
import UserService from '../Services/Users.js';

class UserController extends BaseController {
    
    constructor() {
        super();
      }

    async fetchUsers(req, res) {
        try {
            const response = await UserService.getAll();
            const { data } = response;
            return super.okResponse(res, data, 'All users');
        }
        catch (err) {
            return super.ServerErrorResponse(res, err);
        }
    }

    async addUser(req, res) {
        try {
            const user = req.body;
            await UserService.addNew(user);
            return super.createdResponse(res, 'User successfully created');
        }
        catch (err) {
            console.log('err', err.message)
            return super.ServerErrorResponse(res, err);
        }
    }

    async updateUser(req, res) {
        try {
            const userId = req.params.id;
            const user  = req.body;
            await UserService.update(userId, user);
            let allUsers = await UserService.getAll();
            return super.okResponse(res, allUsers.data, 'User successfully updated')
        }
        catch (err) {
            return super.ServerErrorResponse(res, err);
        }
    }

    async deleteUser(req, res) {
        try {
            const userId = req.params.id;
            await UserService.delete(userId);
            let allUsers = await UserService.getAll();
            return super.okResponse(res, allUsers.data, 'User successfully deleted')
        }
        catch (err) {
            console.log(error.message)
            return super.ServerErrorResponse(res, err);
        }
    }
}


export default new UserController();