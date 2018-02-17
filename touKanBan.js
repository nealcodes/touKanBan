

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
    lists: [],
    setBoardTitle (boardTitle) {
      this.boardTitle = boardTitle;
      return this;
    },
    addList () {
      this.lists.push(List());
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
    
    let render = function () {
        var tem = document.querySelector('#Card');
        var title = tem.content.querySelectorAll('.card-header-title'),
        text = tem.content.querySelectorAll('.content');
        title[0].textContent = this.title;
        text[0].textContent = this.text;

        var col = document.querySelector('.column');
        var clone = document.importNode(tem.content, true);
        col.appendChild(clone);
    }

    

    return {
        title,
        text,
        
        setText,
        
        render
    }
}