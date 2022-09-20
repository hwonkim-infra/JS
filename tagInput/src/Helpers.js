class Helpers {
  static contains(orig, filter) {
    let res = filter.map(item => {
      return orig.includes(item);
    });
    return !res.includes(false);
  }

  static hasDuplicates(array){
    return (new Set(array)).size !== array.length;
  }
}

export default Helpers