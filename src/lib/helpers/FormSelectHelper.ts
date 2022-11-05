export const searchData = (data, inputValue, minLengthToSearch = 3) => {
  if (inputValue.length >= minLengthToSearch) {
    return (
      data.length > 0 &&
      data.filter(item =>
        item.label.toLowerCase().includes(inputValue.toLowerCase()),
      )
    );
  }
  return data;
};

export const setValue = (data, initialValue, keyLabel, keyValue) => {
  const result = data.find(item => {
    if (item[keyValue] === initialValue) {
      return { label: item[keyLabel], value: item[keyValue] };
    }
    return false;
  });

  return result ? { label: result[keyLabel], value: result[keyValue] } : null;
};
