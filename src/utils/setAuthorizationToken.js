import Axios from "axios";

export default function setAuthorizationToken(token) {
  if (token) {
    Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    Axios.defaults.headers.common["Accept-Language"] = "vi";
  } else {
    delete Axios.defaults.headers.common["Authorization"];
  }
}
