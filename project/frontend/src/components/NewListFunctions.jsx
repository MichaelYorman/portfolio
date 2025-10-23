
// ---------------------------
// HeadWear functions
// ---------------------------
export const addHeadWearFromSearch = (i, HeadWear, ChosenHeadWear, setChosenHeadWear) => {
  const itemName = HeadWear[i].label;
  const itemIsIncluded = ChosenHeadWear.find(h => h.name === itemName);
  if (itemIsIncluded) alert("Item already added");
  else setChosenHeadWear(prev => [...prev, { name: itemName, amount: 1 }]);
};

export const increaseHeadWear = (i, ChosenHeadWear, setChosenHeadWear) => {
  const itemName = ChosenHeadWear[i].name;
  const itemIsIncluded = ChosenHeadWear.find(h => h.name === itemName);
  if (itemIsIncluded) {
    setChosenHeadWear(prev =>
      prev.map(h => h.name === itemName ? { ...h, amount: h.amount + 1 } : h)
    );
  } else {
    setChosenHeadWear(prev => [...prev, { name: itemName, amount: 1 }]);
  }
};

export const decreaseHeadWear = (i, ChosenHeadWear, setChosenHeadWear, deleteHeadWear) => {
  const itemName = ChosenHeadWear[i].name;
  if (ChosenHeadWear[i].amount === 1) {
    deleteHeadWear(i, ChosenHeadWear, setChosenHeadWear);
  } else {
    setChosenHeadWear(prev =>
      prev.map(h => h.name === itemName ? { ...h, amount: h.amount - 1 } : h)
    );
  }
};

export const deleteHeadWear = (i, ChosenHeadWear, setChosenHeadWear) => {
  const itemName = ChosenHeadWear[i].name;
  setChosenHeadWear(prev => prev.filter(h => h.name !== itemName));
};

// ---------------------------
// BodyWear functions
// ---------------------------
export const addBodyWearFromSearch = (i, BodyWear, ChosenBodyWear, setChosenBodyWear) => {
  const itemName = BodyWear[i].label;
  const itemIsIncluded = ChosenBodyWear.find(h => h.name === itemName);
  if (itemIsIncluded) alert("Item already added");
  else setChosenBodyWear(prev => [...prev, { name: itemName, amount: 1 }]);
};

export const increaseBodyWear = (i, ChosenBodyWear, setChosenBodyWear) => {
  const itemName = ChosenBodyWear[i].name;
  const itemIsIncluded = ChosenBodyWear.find(h => h.name === itemName);
  if (itemIsIncluded) {
    setChosenBodyWear(prev =>
      prev.map(h => h.name === itemName ? { ...h, amount: h.amount + 1 } : h)
    );
  } else {
    setChosenBodyWear(prev => [...prev, { name: itemName, amount: 1 }]);
  }
};

export const decreaseBodyWear = (i, ChosenBodyWear, setChosenBodyWear, deleteBodyWear) => {
  const itemName = ChosenBodyWear[i].name;
  if (ChosenBodyWear[i].amount === 1) {
    deleteBodyWear(i, ChosenBodyWear, setChosenBodyWear);
  } else {
    setChosenBodyWear(prev =>
      prev.map(h => h.name === itemName ? { ...h, amount: h.amount - 1 } : h)
    );
  }
};

export const deleteBodyWear = (i, ChosenBodyWear, setChosenBodyWear) => {
  const itemName = ChosenBodyWear[i].name;
  setChosenBodyWear(prev => prev.filter(h => h.name !== itemName));
};

// ---------------------------
// HandWear functions
// ---------------------------
export const addHandWearFromSearch = (i, HandWear, ChosenHandWear, setChosenHandWear) => {
  const itemName = HandWear[i].label;
  const itemIsIncluded = ChosenHandWear.find(h => h.name === itemName);
  if (itemIsIncluded) alert("Item already added");
  else setChosenHandWear(prev => [...prev, { name: itemName, amount: 1 }]);
};

export const increaseHandWear = (i, ChosenHandWear, setChosenHandWear) => {
  const itemName = ChosenHandWear[i].name;
  const itemIsIncluded = ChosenHandWear.find(h => h.name === itemName);
  if (itemIsIncluded) {
    setChosenHandWear(prev =>
      prev.map(h => h.name === itemName ? { ...h, amount: h.amount + 1 } : h)
    );
  } else {
    setChosenHandWear(prev => [...prev, { name: itemName, amount: 1 }]);
  }
};

export const decreaseHandWear = (i, ChosenHandWear, setChosenHandWear, deleteHandWear) => {
  const itemName = ChosenHandWear[i].name;
  if (ChosenHandWear[i].amount === 1) {
    deleteHandWear(i, ChosenHandWear, setChosenHandWear);
  } else {
    setChosenHandWear(prev =>
      prev.map(h => h.name === itemName ? { ...h, amount: h.amount - 1 } : h)
    );
  }
};

export const deleteHandWear = (i, ChosenHandWear, setChosenHandWear) => {
  const itemName = ChosenHandWear[i].name;
  setChosenHandWear(prev => prev.filter(h => h.name !== itemName));
};

// ---------------------------
// LegWear functions
// ---------------------------
export const addLegWearFromSearch = (i, LegWear, ChosenLegWear, setChosenLegWear) => {
  const itemName = LegWear[i].label;
  const itemIsIncluded = ChosenLegWear.find(h => h.name === itemName);
  if (itemIsIncluded) alert("Item already added");
  else setChosenLegWear(prev => [...prev, { name: itemName, amount: 1 }]);
};

export const increaseLegWear = (i, ChosenLegWear, setChosenLegWear) => {
  const itemName = ChosenLegWear[i].name;
  const itemIsIncluded = ChosenLegWear.find(h => h.name === itemName);
  if (itemIsIncluded) {
    setChosenLegWear(prev =>
      prev.map(h => h.name === itemName ? { ...h, amount: h.amount + 1 } : h)
    );
  } else {
    setChosenLegWear(prev => [...prev, { name: itemName, amount: 1 }]);
  }
};

export const decreaseLegWear = (i, ChosenLegWear, setChosenLegWear, deleteLegWear) => {
  const itemName = ChosenLegWear[i].name;
  if (ChosenLegWear[i].amount === 1) {
    deleteLegWear(i, ChosenLegWear, setChosenLegWear);
  } else {
    setChosenLegWear(prev =>
      prev.map(h => h.name === itemName ? { ...h, amount: h.amount - 1 } : h)
    );
  }
};

export const deleteLegWear = (i, ChosenLegWear, setChosenLegWear) => {
  const itemName = ChosenLegWear[i].name;
  setChosenLegWear(prev => prev.filter(h => h.name !== itemName));
};

// ---------------------------
// FootWear functions
// ---------------------------
export const addFootWearFromSearch = (i, FootWear, ChosenFootWear, setChosenFootWear) => {
  const itemName = FootWear[i].label;
  const itemIsIncluded = ChosenFootWear.find(h => h.name === itemName);
  if (itemIsIncluded) alert("Item already added");
  else setChosenFootWear(prev => [...prev, { name: itemName, amount: 1 }]);
};

export const increaseFootWear = (i, ChosenFootWear, setChosenFootWear) => {
  const itemName = ChosenFootWear[i].name;
  const itemIsIncluded = ChosenFootWear.find(h => h.name === itemName);
  if (itemIsIncluded) {
    setChosenFootWear(prev =>
      prev.map(h => h.name === itemName ? { ...h, amount: h.amount + 1 } : h)
    );
  } else {
    setChosenFootWear(prev => [...prev, { name: itemName, amount: 1 }]);
  }
};

export const decreaseFootWear = (i, ChosenFootWear, setChosenFootWear, deleteFootWear) => {
  const itemName = ChosenFootWear[i].name;
  if (ChosenFootWear[i].amount === 1) {
    deleteFootWear(i, ChosenFootWear, setChosenFootWear);
  } else {
    setChosenFootWear(prev =>
      prev.map(h => h.name === itemName ? { ...h, amount: h.amount - 1 } : h)
    );
  }
};

export const deleteFootWear = (i, ChosenFootWear, setChosenFootWear) => {
  const itemName = ChosenFootWear[i].name;
  setChosenFootWear(prev => prev.filter(h => h.name !== itemName));
};