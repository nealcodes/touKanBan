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

const Component = function (obj) {
    var template = document.querySelector(obj.template);
}

const List = [];

const addCard = document.querySelector(".new-card");
addCard.addEventListener('click', Card);

const Lists = document.querySelector(".list");
Lists.addEventListener('click', function(e) {
    let t = e.target;
    let list = t.closest('.list');
    let card = t.closest('.card');
    let action = t.closest('a').dataset.action;
    let component;

    //captures component type
    if (!list) {
        return;
    }

    if (!card) {
        component = List;
    }

    //component = Card;




    switch (action) {
        case "delete":
            list.removeChild(card);

        case "edit":
            card.querySelector(".content").contentEditable = true;
    }
    
    console.log(card.dataset.cardId);
});

const State = {


    //state for the currentBoard object, which contains all lists, cards and other board-specific props
    currentBoard: {},

    //state for userPreferences goes here, I think
};

const Actions = {

    create () {},

    read () {},

    update () {},

    del () {}



};