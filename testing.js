const counterId = (function () {
    var counter = 0;

    var assign = function () {
        this.counter++;
        return this.counter;
    }

    return {
        counter,
        assign
    };
})();

const Card = function () {
    var t = document.querySelector("#Card");
    var card = t.content.querySelector('.card');
    card.dataset.cardId = counterId.assign();
    var list = document.querySelector('.list');
    var clone = document.importNode(t.content, true);
    list.insertBefore(clone, list.lastElementChild);


};

const List = [];

const addCard = document.querySelector(".new-card");
addCard.addEventListener('click', Card);

const Lists = document.querySelector(".list");
Lists.addEventListener('click', function(e) {
    let card = e.target.closest('.card');

    if (!card) {
        return;
    }

    switch (event.target.closest('a').dataset.action) {
        case "delete":
            this.removeChild(card);
    }
    
    console.log(card.dataset.cardId);
});