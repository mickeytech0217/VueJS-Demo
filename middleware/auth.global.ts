export default defineNuxtRouteMiddleware((to, from) => {
  const token = true;

  if (!authRouteName.includes(to.name as any)) {
    return !token ? navigateTo("/login") : "";
  } else {
    setPageLayout("auth");
  }
});
