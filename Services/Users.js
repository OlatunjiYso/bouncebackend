import requestClient from "../Utiils/RequestClient.js";

class UserService {

    static async getAll() {
        try{
            const response = await requestClient.get('/users');
            return response;
        }
        catch(err) {
            throw err
        }
        
    }

    static async addNew(user) {
        try{
            const response = await requestClient.post('/users', user)
            return response;
        } 
        catch(err) {
            throw err;
        }
    }

    static async update(userId, user) {
        try{
            const response = await requestClient.put(`/users/${userId}`, user)
            response;
        } 
        catch(err) {
            throw err;
        }
    }

    static async delete(userId) {
        try{
            const response = await requestClient.delete(`/users/${userId}`);
            return response;
        }
        catch(err){
            throw err;
        }
    }
}


export default UserService;