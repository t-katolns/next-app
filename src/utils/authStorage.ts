import localforage from "localforage";

const authStorage = localforage.createInstance({
  driver: localforage.LOCALSTORAGE,
  name: "local",
  storeName: "auth",
  version: 1,
});

export default authStorage;
