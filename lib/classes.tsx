interface Options {
  extra: string | undefined
}

function scopedClassMarker(prefix: string) {
  return function(name: string, options?: Options) {
    const result = [prefix, name].filter(Boolean).join('-');
    if (options && options.extra) {
      return [result, options && options.extra].filter(Boolean).join(' ');
    } else {
      return result;
    }
  };
};

export {scopedClassMarker};