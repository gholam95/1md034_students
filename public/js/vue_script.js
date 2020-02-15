'use strict';
const socket = io();

//Here we use json list
const vm = new Vue({
    el: '#theMain',
    data: {
        food: food,
        name: '',
        email: '',
        paymentOption: '',
        theGender: '',
        showOrder: false,
        checked: [],
        orders: {},
        order: {
            details: {x: 0, y: 0},
            showT: false
        },
        amountOfOrder: 1,
    },
    methods: {
        getNext: function() {
            /* This function returns the next available key (order number) in
             * the orders object, it works under the assumptions that all keys
             * are integers. */
            /*let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
                return Math.max(last, next);
            }, 0);*/
            return this.amountOfOrder++;
        },
        addOrder: function(event) {
            /* When you click in the map, a click event object is sent as parameter
             * to the function designated in v-on:click (i.e. this one).
             * The click event object contains among other things different
             * coordinates that we need when calculating where in the map the click
             * actually happened. */
            this.showOrder = true,
            socket.emit('addOrder', {
                orderId: this.getNext(),
                details: {
                    x: this.order.details.x,
                    y: this.order.details.y,
                },
                customerInformation: [this.name, this.email, this.paymentOption, this.theGender]
                orderItems: this.checked,
                //this.showOrder = true,
            });
        },
        markDone: function() {
            orderInformation();
            this.showOrder = true;
        },
        displayOrder: function(event) {
            
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };
            this.order.details.x = event.clientX - 10 - offset.x,
            this.order.details.y = event.clientY - 10 - offset.y,
            this.order.showT = true
        } 
    }
});
