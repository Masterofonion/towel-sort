
 //You should implement your task here.

module.exports = function towelSort (matrix) {
    if ((typeof matrix) == 'undefined') {
        return [];
    } else if (matrix.length == 0) {
        return [];
    } else {
        return matrix.reduce(function(preItem, item, index) {
            if (index % 2 == 0) {
                return preItem.concat(item);
            } else {
                return preItem.concat(item.reverse());
            }
        }, []); 
    }

}




