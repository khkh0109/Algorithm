function solution(food) {
    const halfFood = food.map(item => {
        const floor = Math.floor(item / 2);
        return Math.max(floor, 0);
    });
    
    const front = halfFood.map((count, idx) => String(idx).repeat(count));
    const back = [...front].reverse();
    
    return front.join("") + '0' + back.join("");
}