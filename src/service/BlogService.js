
import http from '../http-common'

class BlogService {
    async create(data){

        return await http.post("/blog/create",data,{
            headers : {
                "Content-Type" : 'multipart/form-data'
            }
        })
    }

    async update(data){
        return await http.post("/blog/update",data,{
            headers : {
                "Content-Type" : 'multipart/form-data'
            }
        });
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

    async updateViews(id){
        return await  http.post("/blog/views/"+ id);
    }

    async blogViewAndUserInfo(data){
        return await http.get("/blog/getBlogsByUsername/"+data)
    }

    async getById(data){
        return await http.get("/blog/"+data)
    }


}

export default new BlogService();