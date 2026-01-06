import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/blogs`,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 30000
});

/**
 * Blog Public APIs
 */
export const blogService = {
  /**
   * GET ALL BLOGS (PUBLIC)
   * @param {Object} params
   *  - page
   *  - limit
   *  - type
   *  - tag
   *  - search
   */
  getAllBlogs: (params = {}) => {
    return API.get("/", { params });
  },

  /**
   * GET SINGLE BLOG BY SLUG (PUBLIC)
   * @param {string} slug
   */
  getSingleBlog: (slug) => {
    if (!slug) {
      throw new Error("Slug is required to fetch blog");
    }
    return API.get(`/${slug}`);
  }
};
