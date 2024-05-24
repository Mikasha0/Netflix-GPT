export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/bcb20c8e-ba81-4a34-932c-1703f04d881e/NP-en-20240506-popsignuptwoweeks-perspective_alpha_website_small.jpg";

const api_key = process.env.REACT_APP_TMDB_API;
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + api_key,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
