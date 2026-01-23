import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c7ec08e100ad4d02adf1cf5778015171",
  },
});
