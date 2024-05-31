import http from "../http-common"

class AuthenticationService {
    get(id){
        return http.get("/auth/user/"+id)
    }

    login(data){
        return http.post("/auth/login", data)
    }

    register(data){
        return http.post("/auth/register", data)
    }
}

export default new AuthenticationService();