import {ApiService} from "./ApiService";


class CarService extends ApiService {
    getAll = async () => {
        const { data } = await this.client.get('cars');

        return data;

    }

    get = async (id) => {
        const { data } = await this.client.get(`cars/${id}`);

        return data;
    }

}
export default new CarService();