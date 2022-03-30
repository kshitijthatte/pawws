const logoutService = () => {
  localStorage.removeItem("PAWWS_USER");
  localStorage.removeItem("AUTH_TOKEN");
};

export { logoutService };
