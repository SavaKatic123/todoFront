import router from '../router'
import {axiosService} from '../services/axios.service'
import {API_ENDPOINTS} from '../constants'
import isNil from 'lodash/isNil'

class AuthService {

  loginUser(user) {
    let token;
    axiosService.postCall(API_ENDPOINTS.LOGIN_USER, {
      email: user.email,
      password: user.password,
    }).then((response) => {
      token = response.data.access_token;
      localStorage.setItem("token", token);
      router.push('/dashboard');
    });
  }

  registerUser(user) {
    let result;
    axiosService.postCall(API_ENDPOINTS.REGISTER_USER, {
      email: user.email,
      password: user.password,
    }).then((response) => {
      result = response.data;
      router.push('/login');
    });
  }

  logoutUser() {
    localStorage.removeItem('token');
  }

  isUserLogged() {
    return !isNil(localStorage.getItem('token'));
  }

  redirectNonUser() {
    if(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined) {
      router.push('/');
      return true;
    }
    return false;
  }

}


export const authService = new AuthService();