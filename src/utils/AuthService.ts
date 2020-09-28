import Router from "next/router";
import authStorage from "utils/authStorage";

const STORAGE_KEY = "auth";

export default class AuthService {
  loggedIn() {
    const token = this.getAccessToken();
    const id = this.getUserId();
    return !!token && !!id;
  }

  logout() {
    this.removeLoginInformation();
    Router.push("/login");
  }

  getAuth() {
    return authStorage.getItem(STORAGE_KEY);
  }

  getUserId() {
    return 1;
  }

  getAccessToken() {
    return "eyJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X3R5cGUiOiJZZW50YTo6Q2FyZWVyOOWdlbnRNZW1iZXIiLCJhY2NvdW50X2lkIjoxLCJ0b2tlbl90eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjAwOTY1MjYyLCJleHAiOjE2MDM1NTcyNjJ9.-b76sA2_INYGQoQCAD1s6rhR5BWbMuvRGjd-JENpNoo";
  }

  getDefaultLang() {
    return "ja";
  }

  setLoginInformation(data) {
    authStorage.setItem(STORAGE_KEY, data);
  }

  removeLoginInformation() {
    authStorage.removeItem(STORAGE_KEY);
  }
}
