import { API_ENDPOINTS } from '../utils/constants';

export const fetchGitHubUsers = async (perPage = 100) => {
  try {
    const response = await fetch(
      `${API_ENDPOINTS.GITHUB_USERS}?per_page=${perPage}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    throw error;
  }
};
