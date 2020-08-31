const getBannerUrl = (fields) => {
  let banners = fields.filter((obj) => {
    return obj.name === "Banner";
  });
  return banners[0].value[0].url;
};

export default getBannerUrl;
