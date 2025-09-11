import axiosInstance from "./axios";

export const getBlogs = async () => {     //random
  const { data } = await axiosInstance.get("/blogs");
  return data;
};

