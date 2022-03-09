
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result =[];
  if(matrix === undefined) return result;
  let newArr = matrix.map((item, index)=>index%2==0? item: item.reverse());
  for(let i=0; i<matrix.length; i++){
    result = result.concat(newArr[i]); 
  }
  return result;
}
