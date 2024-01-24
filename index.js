const axios = require("axios");
const post = async () => {
  try {
    const result = await axios
      .get("https://dummyapi.io/data/v1/post?page=1&limit=5", {
        headers: { "app-id": "65adda3a7698f89794330f14" },
      })
      .then((response) => {
        // handle success
        //   console.log(response.data);
      });
    return result;
  } catch (error) {}
};
const user = async () => {
  try {
    const result = await axios
      .get("https://dummyapi.io/data/v1/user?page=1&limit=5", {
        headers: { "app-id": "65adda3a7698f89794330f14" },
      })
      .then((error) => {
        // throw new Error(error.message);
      });
    return result;
  } catch (error) {}
};

// use data get-leh
// post data get-leh
const a = async () => {
  await user();
  await post();
};
// const userInfo = async () => {
//   await axios
//     .get("https://dummyapi.io/data/v1/user/:id", {
//       headers: { "app-id": "65adda3a7698f89794330f14" },
//     })
//     .then((res) => {
//       console.log(res.data);
//     });
// };
// userInfo();

// api Key: "65adda3a7698f89794330f14"

// axios({
//     method: 'get',
//     url: 'http://bit.ly/2mTM3nY',
//     responseType: 'stream'
//   })
//     .then(function (response) {
//       response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//     });
