import services from ".";
const baseDomain = 'http://127.0.0.1:8000/api'
class ProductService {
    get (params = {}) {
        return services.get(`${baseDomain}/products`, params)
    }

    getDetail(slug) { // Nhận slug làm đối số
        return services.get(`${baseDomain}/products/laptop-1`); // Sử dụng slug trong URL
    }

}

export default new ProductService()