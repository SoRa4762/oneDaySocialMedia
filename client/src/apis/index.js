import axios from "axios";
const route = "http://localhost:8000/post";
const deleteApi = async (id) => {
  try {
    await axios.delete(`${route}/${id}`);
    // const resData = await res.data;
    return true;
  } catch (err) {
    console.log("Error Deleting the Post!", err);
  }

  //   axios.delete(`${route}/${id}`).then(
  //     (res) => {
  //       console.log(res.data);
  //       return res.data;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // .catch((err) => console.log("Error Deleting the Post!", err));
};

const updateApi = async (id, updatedPost) => {
  //   return axios.put(`${route}/${id}`, updatedPost).then(
  //     (res) => {
  //       console.log(`The Post ${id} was updated Succesfully!`);
  //       res.data;
  //     },
  //     (err) => {
  //       console.log("Error Updating the Post: ", err);
  //     }
  //   );
  try {
    const res = await axios.put(`${route}/${id}`, updatedPost);
    return res.data;
  } catch (err) {
    console.log("Error Updating the Post: ", err);
  }
};

export { deleteApi, updateApi };
