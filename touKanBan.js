const Card = () => ({

    cardTitle: 'card title',
    cardBody: '...',
    setCardTitle (cardTitle) {
        this.cardTitle = cardTitle;
        return this;
    },
    setCardBody (cardBody) {
        this.cardBody = cardBody;
        return this;
    }
});


//list factory function
const List = () => ({
  
    listTitle: 'Untitled',
    listMembers: [],
    setListTitle (listTitle) {
      this.listTitle = listTitle;
      return this;
    },
    addMember (memberName) {
      this.listMembers.push(memberName);
      return this;
    }
  

});

//board factory function
const Board = () => ({
  
    boardTitle: 'Untitled',
    boardMembers: [],
    setBoardTitle (boardTitle) {
      this.boardTitle = boardTitle;
      return this;
    },
    addMember (memberName) {
      this.boardMembers.push(memberName);
      return this;
    }
  

});

const Render = {
    card: function (card) {
        let title = document.createElement('h2');
        let body = document.createElement('p');

        
            title.textContent = card.cardTitle;
            body.textContent = card.cardBody;

            document.body.appendChild(title);
            document.body.appendChild(body);
        
        
    }
    };

