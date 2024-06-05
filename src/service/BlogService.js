
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
        return await http.get("/blog?pageNo="+ pageNumber);
    } 

    delete(data) {
        return http.delete("/blog/delete/"+ data);
    }

    async filterBlog(data){
        return await http.post("/blog",data);
    }

    updateViews(id){
        return  http.post("/blog/views/"+ id);
    }
}

export default new BlogService();