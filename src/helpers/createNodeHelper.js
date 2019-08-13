let nextId = 0;

const createNode = (label) => {
  nextId += 1;

  return {
    id: nextId,
    label,
    children: [],
  };
};

export default createNode;
