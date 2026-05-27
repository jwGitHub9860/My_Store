// TEMP: Rename to "Product-list.ts" or Keep as "Item.ts"?
export class Item {
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
    item_purchase_amount: number;

    // Initializes "Item" to ONE Empty NONEXISTENT Item
    constructor() {
        this.id = 0;
        this.name = '';
        this.price = 1;
        this.url = '';
        this.description = '';
        this.item_purchase_amount = 0;
    }
}