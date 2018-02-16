

//list factory function
const List = () => ({
  
    listTitle: 'Untitled',
    listMembers: [],
    setListTitle (listTitle) {
      this.listTitle = listTitle;
      return this;
    },
    addMember () {
        
      let ace =newCard(this.listTitle);
    this.listMembers.push(ace);
      return this;
    },
    
    render () {
        let listNode = document.createElement('div');
        this.listMembers.forEach(function(card) {
            let div = document.createElement('div');
            div.appendChild(card.render());
            listNode.appendChild(div);
        });
        document.body.appendChild(listNode);
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



const Card = function() {
    let title = 'enter card title';
    let text = 'some text here';
    let setText = function (newText) {
        this.text = newText;
        return this;
    };
    let attachImage = function (imgSrc) {
        this.image = imgSrc;
        return this;
    };
    let render = function () {
        let fragment = document.createDocumentFragment();
        let cardText = document.createElement('p');
        
        let cardImg = document.createElement('img');
        cardText.textContent = this.text;
        cardImg.src = this.image;
        fragment.appendChild(cardText);
        fragment.appendChild(cardImg);

        return fragment;
    }

    

    return {
        text,
        image,
        parent,
        setText,
        attachImage,
        render
    }
}