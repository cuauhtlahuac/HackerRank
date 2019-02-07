function likes(names) {
  const lt = ' like this';
  // TODO
  switch(names.length){
    case 0:
    return 'no one likes this';
    case 1:
    return names[0] + ' likes this';
    case 2:
    return names[0] + ' and ' + names[1] + lt;
    case 3:
    return names[0] + ', ' + names[1] + ' and ' + names[2] + lt;
    case 4:
    return names[0] + ', ' + names[1] + ' and 2 others' + lt; 
  } 
}
