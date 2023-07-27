import axiosClient from './axiosClient';

const LiteWalletAPI = {
    Register: async (email, password) => {
        const path = '/user/register';
        return axiosClient.post(path, { email, password})
    },
    Login: async (email, password) => {
        const path = '/user/login';
        return axiosClient.post(path, {email, password})
    },
    ChangePass: async (oldPassword, newPassword) => {
        const path = '/user/change-password';
        return axiosClient.put(path, {oldPassword, newPassword})
    },
    ForgotPass: async (email) => {
        const path = `/user/forgot-password?email=${email}`;
        return axiosClient.get(path, {email})
    },
    ResetPass: async (email, password, verifyCode) => {
        const path = '/user/reset-password';
        return axiosClient.put(path, {email, password, verifyCode})
    },
    Transaction: async () => {
        const path = '/transaction';
        return axiosClient.get(path)
    }
}

export default LiteWalletAPI;