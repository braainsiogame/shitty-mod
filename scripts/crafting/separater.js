Blocks.separator.buildVisibility = BuildVisibility.hidden;

const separater = extendContent(Separator, 'separater', {
    craftTime: 35,

    update: function(tile) {
        if (tile.ent() == null || tile == null) return;
        this.super$update(tile);
        var entity = tile.entity;

        if(entity.liquids.currentAmount() < this.liquidCapacity * 10){
            entity.liquids.add(Liquids.slag, this.liquidCapacity * 100);
        }
    }
});
