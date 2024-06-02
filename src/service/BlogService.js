
import http from '../http-common'

class BlogService {
    async create(data){

        return await http.post("/blog/create",data)
    }

    async update(data){
        return await http.post("/blog/update",data);
    }

    async filter(data){
        return await http.post("/blog",data);
    }

    async getAll(pageNumber){
        return await http.get("/blog?pageNo="+ pageNumber)
    }
}

export default new BlogService();