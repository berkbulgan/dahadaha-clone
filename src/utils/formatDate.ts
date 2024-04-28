function formatDate(date: string){
  const [day, month, year] = date.split('.');
  const dateObj = new Date(+year, +month - 1, +day);
  const remainingDays = Math.floor((dateObj.getTime() - new Date().getTime()) / (1000 * 3600 * 24));
  if (remainingDays === 0) {
    return 'bugün son';
  } else if (remainingDays > 0) {
    return `son ${remainingDays} gün`;
  }
}

export default formatDate;