function solution(my_string, index_list) {
    return index_list.map(number => my_string[number]).join('');
}