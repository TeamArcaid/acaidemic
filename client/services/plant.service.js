import http from '../http-common'

class PlantDataService {
    getAll(){
        return http.get('/plants')
    }

    get(id){
        return http.get(`/plants/${id}`)
    }

    create(data){
        return http.post('/plants', data)
    }

    update(id, data){
        return http.put(`/plants/${id}`, data)
    }
}

export default new PlantDataService()