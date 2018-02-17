

const Card = function () {
    var t = document.querySelector("#Card");
    var list = document.querySelector('.list');
    var clone = document.importNode(t.content, true);
    list.insertBefore(clone, list.lastElementChild);

    
};

const List = [];

const addCard = document.querySelector(".new-card");
addCard.addEventListener('click', Card);