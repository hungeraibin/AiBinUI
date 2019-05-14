function scopedClassMarker(prefix: string) {
  return function(name: string) {
    return [prefix, name].filter(Boolean).join('-');
  };
};

export {scopedClassMarker};