
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


