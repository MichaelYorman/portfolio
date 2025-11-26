// ---------------------------
// HeadWear functions
// ---------------------------
export const addItemFromSearch = (i, wearlist, wearState, setWearState,setMyStyle,currentSearchCategoryTitle) => {
  const itemName = wearlist[i].label;
  const itemIsIncluded = wearState[currentSearchCategoryTitle].chosenItems.find(h => h.name === itemName);
  if (itemIsIncluded) {
    alert("Item already added");
  } else {
    setWearState(prev => {
      const newChosen = [...prev, { name: itemName, amount: 1 }];
      setMyStyle(prev => ({
        ...prev,
        itemName: newChosen
      }));
      return newChosen;
    });
  }
};

export const increaseItemAmount = (i, wearState,setWearState,setMyStyle) => {
  const itemName = ChosenHeadWear[i].name;
  setWearState(prev => {
    const newChosen = prev.map(h => h.name === itemName ? { ...h, amount: h.amount + 1 } : h);
    setMyStyle(prev => ({
      ...prev,
      itemName: newChosen
    }));
    return newChosen;
  });
};

export const decreaseItemAmount = (i, ChosenHeadWear, setChosenHeadWear, deleteHeadWear, setOptionsChosen) => {
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

export const deleteSingleItem = (i, ChosenHeadWear, setChosenHeadWear, setOptionsChosen) => {
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