import services from ".";
const baseDomain = 'http://127.0.0.1:8000/api'
class BannerService {
    get (params = {}) {
        return services.get(`${baseDomain}/banners`, params)
    } 
}

export default new BannerService()