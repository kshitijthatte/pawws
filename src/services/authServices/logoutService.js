const logoutService = () => {
  localStorage.removeItem("WB_USER");
  localStorage.removeItem("AUTH_TOKEN");
};

export { logoutService };
