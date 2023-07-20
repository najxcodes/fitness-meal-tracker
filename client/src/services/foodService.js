import axios from 'axios';

const API_BASE_URL = 'http://localhost:3015/fitness/food';

export const getFoods = async () => {
  try {
    const response = await axios.get(API_BASE_URL,{ withCredentials: true });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch foods');
  }
};

export const addFood = async (foodData) => {
  try {
    const response = await axios.post(API_BASE_URL, foodData, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw new Error('Failed to add food');
  }
};


export const deleteFood = async (foodId) => {
  try {
    await axios.delete(`${API_BASE_URL}/${foodId}`, { withCredentials: true });
  } catch (error) {
    throw new Error('Failed to delete food');
  }
};

export const updateFood = async (foodId, updatedFoodData) => {
  try {
    await axios.put(`${API_BASE_URL}/${foodId}`, updatedFoodData, { withCredentials: true });
  } catch (error) {
    throw new Error('Failed to update food');
  }
};
