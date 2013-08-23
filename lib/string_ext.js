if(!String.prototype.firstLetterToUpperCase) {
  String.prototype.firstLetterToUpperCase = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
  };
}
