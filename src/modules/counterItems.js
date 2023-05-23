const counterItem = async (arg, emplacement) => {
  const values = await arg;
  if (Array.isArray(values)) {
    emplacement.innerHTML = `(${values.length})`;
    return arg;
  }

  return 0;
};

export default counterItem;