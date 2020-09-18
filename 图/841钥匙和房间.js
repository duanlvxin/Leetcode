/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

var canVisitAllRooms = function(rooms) {
    let visited = [];
    for(let i=0;i<rooms.length;i++){
        visited[i] = false;
    }
    visited[0] = true;

    function f(rooms){
        let keys = new Set(rooms[0]);
        keys.add(0);
        while(keys.size!=rooms.length){
            let flag = false;
            for(let key of keys){
                if(!visited[key]){
                    visited[key] = true;
                    for(let item of rooms[key]){
                        if(!visited[item]){
                            flag = true;
                            keys.add(item);
                        }
                    }
                }
            }
            if(!flag){
                return false;
            }
        }
        return true;
    }

    return f(rooms)
};


/***********BFS************/
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

var canVisitAllRooms = function(rooms) {
    let visited = new Set([0]),queue = [0];

    while(queue.length){
        let key = queue.pop();
        for(let item of rooms[key]){
            if(!visited.has(item)){
                visited.add(item);
                queue.unshift(item);
            }
        }
    }
    
    return visited.size==rooms.length;
};

/***********DFS************/
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

var canVisitAllRooms = function(rooms) {
    let visited = new Set([0]),queue = [0];

    while(queue.length){
        let key = queue.pop();
        for(let item of rooms[key]){
            if(!visited.has(item)){
                visited.add(item);
                queue.push(item);
            }
        }
    }
    
    return visited.size==rooms.length;
};