import { Injectable } from "@angular/core";
import { Cart } from  "./cart.model";

@Injectable()
export class Order {
    public id: number;
    public name: string;
    public adress: string;
    public city: string;
    public state: string;
    public zip: string;
    public country: string;
    public shipped: boolean = false;

    constructor (public cart: Cart) {}

    clear () {
        this.id = null;
        this.name = this.adress = this.city = null;
        this.state = this.zip = this.country = null;
        this.shipped = null;
        this.cart.clear();
    }
}