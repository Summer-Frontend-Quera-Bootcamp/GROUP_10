import axios from 'axios';

interface IRegister{
    username: string,
    email: string,
    password: string
}

interface IUpdateAccount{
    username: string,
    email: string,
    first_name: string,
    last_name: string,
    phone_number ?: string,
    thumbnail ?: string
}

interface IChangePassword{
    old_password: string,
    new_password: string,
    new_password1: string
}

  interface ILogin{
    username: string,
    password: string
}

  interface ISetPassword{
    token: string,
    password: string,
    password1: string
}
axios.defaults.baseURL = 'https://quera.iran.liara.run/accounts';

export const AccountRequests = {
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3OTk1NDM3LCJpYXQiOjE2OTc5NzM4MzcsImp0aSI6IjY1ZGU5NGIwMWNlODQ1MTI5NTA2MmZjYjU3ZWY3NWRlIiwidXNlcl9pZCI6MTUxfQ.w8FZ798T1A9p_C9Nq8P41UaJpFfurpIu33VvwS5xfEg",
    refrehToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5ODA2MDIzNywiaWF0IjoxNjk3OTczODM3LCJqdGkiOiI0ZTdmY2EzYjE2ZGI0Zjc3OWNlNjg1NDFjMjMzMWU3YSIsInVzZXJfaWQiOjE1MX0.bYt6SgOi1GnV954SNZd2zeMvzYufkmDeDHeRZDp455A",

    getAllAccounts() {
        return axios.get('/');
      },

    getOneAccount(id: number){
        return axios.get(`/${id}/`);
    },

    registerAccount(requestBody: IRegister){
        return axios.post('/', requestBody);
    },

    updateAccount(id: number, requestBody: IUpdateAccount){
        return axios.patch(`/${id}/`, requestBody, {
            headers: { 'Authorization': `Bearer ${this.accessToken}` },
        });
    },

    deleteAccount(id: number){
        return axios.delete(`/${id}/`);
    },

    changePassword(requestBody: IChangePassword){
        return axios.put(`/change-password/`, requestBody, {
            headers: { 'Authorization': `Bearer ${this.accessToken}` },
        });
    },

    loginAccount(requestBody: ILogin){
        return axios.post(`/login/`, requestBody);
    },

    refreshAccount(refresh: string){
        return axios.post(`/login/refresh/`, refresh, {
            headers: { 'Authorization': `Bearer ${this.accessToken}` },
        });
    },

    forgetPassword(email: string){
        return axios.post(`/reset-password/`, email, {
            headers: { 'Authorization': `Bearer ${this.accessToken}` },
        });
    },

    setPassword(requestBody: ISetPassword){
        return axios.patch(`/reset-password/set-password/`, requestBody, {
            headers: { 'Authorization': `Bearer ${this.accessToken}` },
        });
    }

};
