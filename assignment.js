// problem 1
function kilometerToMeter(kilometer) {
  const meter = kilometer * 1000;
  if (kilometer <= 0) {
    return 'Please enter a valid number';
  }
  else {
    return meter;
  }
}

// problem 2
function budgetCalculator(watch, mobile, laptop) {
  let totalBudget = 0;
  watchPrice = watch * 50;
  mobilePrice = mobile * 100;
  laptopPrice = laptop * 500;
  totalBudget = watchPrice + mobilePrice + laptopPrice;
  if (watch <= 0 || mobile <= 0 || laptop <= 0) {
    return 'Please enter a valid number'
  }
  return totalBudget;
}

// problem 3
function hotelCost(days) {
  let totalCost = 0;
  if (days <= 0) {
    return 'Please enter a valid number';
  }
  else if (days <= 10 && days > 0) {
    totalCost = days * 100;
    return totalCost;
  }
  else if (days <= 20) {
    totalCost = 1000;
    totalDays = days - 10;
    totalCost = totalCost + totalDays * 80;
    return totalCost;
  }
  else {
    totalCost = 1800;
    totalDays = days - 20;
    totalCost = totalCost + totalDays * 50;
    return totalCost;
  }
}

// problem 4
function megaFriend(friendList) {
  let megaFriend = ''
  if (friendList.length <= 1) {
    return 'Please enter more value to compare'
  }
  else {
    for (let i = 0; i < friendList.length; i++) {
      let item = friendList[i];
      if (item.length > megaFriend.length) {
        megaFriend = item;
      }
    }
    return megaFriend;
  }
}