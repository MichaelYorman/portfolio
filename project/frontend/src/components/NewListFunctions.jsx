// ---------------------------
// HeadWear functions
// ---------------------------
export const addHeadWearFromSearch = (i, HeadWear, ChosenHeadWear, setChosenHeadWear, setOptionsChosen) => {
  const itemName = HeadWear[i].label;
  const itemIsIncluded = ChosenHeadWear.find(h => h.name === itemName);
  if (itemIsIncluded) {
    alert("Item already added");
  } else {
    setChosenHeadWear(prev => {
      const newChosen = [...prev, { name: itemName, amount: 1 }];
      setOptionsChosen(prev => ({
        ...prev,
        headwear: newChosen
      }));
      return newChosen;
    });
  }
};

export const increaseHeadWear = (i, ChosenHeadWear, setChosenHeadWear, setOptionsChosen) => {
  const itemName = ChosenHeadWear[i].name;
  setChosenHeadWear(prev => {
    const newChosen = prev.map(h => h.name === itemName ? { ...h, amount: h.amount + 1 } : h);
    setOptionsChosen(prev => ({
      ...prev,
      headwear: newChosen
    }));
    return newChosen;
  });
};

export const decreaseHeadWear = (i, ChosenHeadWear, setChosenHeadWear, deleteHeadWear, setOptionsChosen) => {
  const itemName = ChosenHeadWear[i].name;
  if (ChosenHeadWear[i].amount === 1) {
    deleteHeadWear(i, ChosenHeadWear, setChosenHeadWear, setOptionsChosen);
  } else {
    setChosenHeadWear(prev => {
      const newChosen = prev.map(h => h.name === itemName ? { ...h, amount: h.amount - 1 } : h);
      setOptionsChosen(prev => ({
        ...prev,
        headwear: newChosen
      }));
      return newChosen;
    });
  }
};

export const deleteHeadWear = (i, ChosenHeadWear, setChosenHeadWear, setOptionsChosen) => {
  const itemName = ChosenHeadWear[i].name;
  setChosenHeadWear(prev => {
    const newChosen = prev.filter(h => h.name !== itemName);
    setOptionsChosen(prev => ({
      ...prev,
      headwear: newChosen
    }));
    return newChosen;
  });
};


// ---------------------------
// BodyWear functions
// ---------------------------
export const addBodyWearFromSearch = (i, BodyWear, ChosenBodyWear, setChosenBodyWear, setOptionsChosen) => {
  const itemName = BodyWear[i].label;
  const itemIsIncluded = ChosenBodyWear.find(h => h.name === itemName);
  if (itemIsIncluded) {
    alert("Item already added");
  } else {
    setChosenBodyWear(prev => {
      const newChosen = [...prev, { name: itemName, amount: 1 }];
      setOptionsChosen(prev => ({
        ...prev,
        bodywear: newChosen
      }));
      return newChosen;
    });
  }
};

export const increaseBodyWear = (i, ChosenBodyWear, setChosenBodyWear, setOptionsChosen) => {
  const itemName = ChosenBodyWear[i].name;
  setChosenBodyWear(prev => {
    const newChosen = prev.map(h => h.name === itemName ? { ...h, amount: h.amount + 1 } : h);
    setOptionsChosen(prev => ({
      ...prev,
      bodywear: newChosen
    }));
    return newChosen;
  });
};

export const decreaseBodyWear = (i, ChosenBodyWear, setChosenBodyWear, deleteBodyWear, setOptionsChosen) => {
  const itemName = ChosenBodyWear[i].name;
  if (ChosenBodyWear[i].amount === 1) {
    deleteBodyWear(i, ChosenBodyWear, setChosenBodyWear, setOptionsChosen);
  } else {
    setChosenBodyWear(prev => {
      const newChosen = prev.map(h => h.name === itemName ? { ...h, amount: h.amount - 1 } : h);
      setOptionsChosen(prev => ({
        ...prev,
        bodywear: newChosen
      }));
      return newChosen;
    });
  }
};

export const deleteBodyWear = (i, ChosenBodyWear, setChosenBodyWear, setOptionsChosen) => {
  const itemName = ChosenBodyWear[i].name;
  setChosenBodyWear(prev => {
    const newChosen = prev.filter(h => h.name !== itemName);
    setOptionsChosen(prev => ({
      ...prev,
      bodywear: newChosen
    }));
    return newChosen;
  });
};


// ---------------------------
// HandWear functions
// ---------------------------
export const addHandWearFromSearch = (i, HandWear, ChosenHandWear, setChosenHandWear, setOptionsChosen) => {
  const itemName = HandWear[i].label;
  const itemIsIncluded = ChosenHandWear.find(h => h.name === itemName);
  if (itemIsIncluded) {
    alert("Item already added");
  } else {
    setChosenHandWear(prev => {
      const newChosen = [...prev, { name: itemName, amount: 1 }];
      setOptionsChosen(prev => ({
        ...prev,
        handwear: newChosen
      }));
      return newChosen;
    });
  }
};

export const increaseHandWear = (i, ChosenHandWear, setChosenHandWear, setOptionsChosen) => {
  const itemName = ChosenHandWear[i].name;
  setChosenHandWear(prev => {
    const newChosen = prev.map(h => h.name === itemName ? { ...h, amount: h.amount + 1 } : h);
    setOptionsChosen(prev => ({
      ...prev,
      handwear: newChosen
    }));
    return newChosen;
  });
};

export const decreaseHandWear = (i, ChosenHandWear, setChosenHandWear, deleteHandWear, setOptionsChosen) => {
  const itemName = ChosenHandWear[i].name;
  if (ChosenHandWear[i].amount === 1) {
    deleteHandWear(i, ChosenHandWear, setChosenHandWear, setOptionsChosen);
  } else {
    setChosenHandWear(prev => {
      const newChosen = prev.map(h => h.name === itemName ? { ...h, amount: h.amount - 1 } : h);
      setOptionsChosen(prev => ({
        ...prev,
        handwear: newChosen
      }));
      return newChosen;
    });
  }
};

export const deleteHandWear = (i, ChosenHandWear, setChosenHandWear, setOptionsChosen) => {
  const itemName = ChosenHandWear[i].name;
  setChosenHandWear(prev => {
    const newChosen = prev.filter(h => h.name !== itemName);
    setOptionsChosen(prev => ({
      ...prev,
      handwear: newChosen
    }));
    return newChosen;
  });
};


// ---------------------------
// LegWear functions
// ---------------------------
export const addLegWearFromSearch = (i, LegWear, ChosenLegWear, setChosenLegWear, setOptionsChosen) => {
  const itemName = LegWear[i].label;
  const itemIsIncluded = ChosenLegWear.find(h => h.name === itemName);
  if (itemIsIncluded) {
    alert("Item already added");
  } else {
    setChosenLegWear(prev => {
      const newChosen = [...prev, { name: itemName, amount: 1 }];
      setOptionsChosen(prev => ({
        ...prev,
        legwear: newChosen
      }));
      return newChosen;
    });
  }
};

export const increaseLegWear = (i, ChosenLegWear, setChosenLegWear, setOptionsChosen) => {
  const itemName = ChosenLegWear[i].name;
  setChosenLegWear(prev => {
    const newChosen = prev.map(h => h.name === itemName ? { ...h, amount: h.amount + 1 } : h);
    setOptionsChosen(prev => ({
      ...prev,
      legwear: newChosen
    }));
    return newChosen;
  });
};

export const decreaseLegWear = (i, ChosenLegWear, setChosenLegWear, deleteLegWear, setOptionsChosen) => {
  const itemName = ChosenLegWear[i].name;
  if (ChosenLegWear[i].amount === 1) {
    deleteLegWear(i, ChosenLegWear, setChosenLegWear, setOptionsChosen);
  } else {
    setChosenLegWear(prev => {
      const newChosen = prev.map(h => h.name === itemName ? { ...h, amount: h.amount - 1 } : h);
      setOptionsChosen(prev => ({
        ...prev,
        legwear: newChosen
      }));
      return newChosen;
    });
  }
};

export const deleteLegWear = (i, ChosenLegWear, setChosenLegWear, setOptionsChosen) => {
  const itemName = ChosenLegWear[i].name;
  setChosenLegWear(prev => {
    const newChosen = prev.filter(h => h.name !== itemName);
    setOptionsChosen(prev => ({
      ...prev,
      legwear: newChosen
    }));
    return newChosen;
  });
};


// ---------------------------
// FootWear functions
// ---------------------------
export const addFootWearFromSearch = (i, FootWear, ChosenFootWear, setChosenFootWear, setOptionsChosen) => {
  const itemName = FootWear[i].label;
  const itemIsIncluded = ChosenFootWear.find(h => h.name === itemName);
  if (itemIsIncluded) {
    alert("Item already added");
  } else {
    setChosenFootWear(prev => {
      const newChosen = [...prev, { name: itemName, amount: 1 }];
      setOptionsChosen(prev => ({
        ...prev,
        footwear: newChosen
      }));
      return newChosen;
    });
  }
};

export const increaseFootWear = (i, ChosenFootWear, setChosenFootWear, setOptionsChosen) => {
  const itemName = ChosenFootWear[i].name;
  setChosenFootWear(prev => {
    const newChosen = prev.map(h => h.name === itemName ? { ...h, amount: h.amount + 1 } : h);
    setOptionsChosen(prev => ({
      ...prev,
      footwear: newChosen
    }));
    return newChosen;
  });
};

export const decreaseFootWear = (i, ChosenFootWear, setChosenFootWear, deleteFootWear, setOptionsChosen) => {
  const itemName = ChosenFootWear[i].name;
  if (ChosenFootWear[i].amount === 1) {
    deleteFootWear(i, ChosenFootWear, setChosenFootWear, setOptionsChosen);
  } else {
    setChosenFootWear(prev => {
      const newChosen = prev.map(h => h.name === itemName ? { ...h, amount: h.amount - 1 } : h);
      setOptionsChosen(prev => ({
        ...prev,
        footwear: newChosen
      }));
      return newChosen;
    });
  }
};

export const deleteFootWear = (i, ChosenFootWear, setChosenFootWear, setOptionsChosen) => {
  const itemName = ChosenFootWear[i].name;
  setChosenFootWear(prev => {
    const newChosen = prev.filter(h => h.name !== itemName);
    setOptionsChosen(prev => ({
      ...prev,
      footwear: newChosen
    }));
    return newChosen;
  });
};