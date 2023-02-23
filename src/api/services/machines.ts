import axios from "@/api/axios";

const getMachines = async () => axios.get(`/machines`);
const getMachine = async (id: string) => axios.get(`/machines/${id}`);
const addMachine = async (body: any) => axios.post(`/machines/add`, body);

export { getMachines, addMachine, getMachine };
