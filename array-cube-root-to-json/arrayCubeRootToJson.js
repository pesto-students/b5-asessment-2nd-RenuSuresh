const arrayCubeRootToJson = (arr) => {
  const obj = {};
  try {
    arr.map((e) => {
      if (!isNaN(e) && e != null && e != undefined) {
        obj[e] = Math.cbrt(e);
      } else {
        throw "not a number";
      }
    });
    return obj;
  } catch (e) {
    console.log("error", e);
  }
};
export { arrayCubeRootToJson };
