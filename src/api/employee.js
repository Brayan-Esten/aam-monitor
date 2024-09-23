import axios from "axios";

export default {
    findAll: async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/employee/find-all');
            return res;
        } catch (err) {
            console.log(err)
        }
    },
    findOne: async (id) => {
        try {
            const res = await axios.get(`http://localhost:3000/api/employee/find-one/${id}`);
            return res;
        } catch (err) {
            console.log(err)
        }
    },
    create: async (payload) => {
        try {
            const res = await axios.post('http://localhost:3000/api/employee/create', payload);
            return res;
        } catch (err) {
            console.log(err)
        }
    }
}