const getRaw = function() {
  return {
    id: this.id,
    name: this.name,
    createdAt: this.createdAt.toISOString(),
    updatedAt: this.updatedAt.toISOString()
  };
};

module.exports = getRaw;
