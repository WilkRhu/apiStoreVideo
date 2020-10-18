function formatDate(dateDeadLine){
  var date = new Date(dateDeadLine),
      day  = date.getDate().toString(),
      dayF = (day.length == 1) ? '0'+ day : day,
      month  = (date.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      monthF = (month.length == 1) ? '0'+month : month,
      yearF = date.getFullYear();
  return dayF+"/"+monthF+"/"+yearF;
}

function dateReturn(date) {
  const parts = date.split('/');
  const mydate = new Date(parts[2] + "-" + parts[1] + "-" + parts[0]);
  return mydate;
}

module.exports = {
  formatDate,
  dateReturn
};
