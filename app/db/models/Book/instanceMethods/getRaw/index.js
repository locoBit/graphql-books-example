const getRaw = function() {
  return {
    id: this.id,
    title: this.title,
    createdAt: this.createdAt.toISOString(),
    updatedAt: this.updatedAt.toISOString()
  };
};

module.exports = getRaw;
