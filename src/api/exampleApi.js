import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const fetchProtectedData = async () => {
  const { authAxios } = useContext(AuthContext);

  try {
    const response = await authAxios.get("/protected-endpoint");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
