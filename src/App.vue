<template>
  <div id="app">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Live Venmo Payments
          </h1>
          <h2 class="subtitle">
            Venmo's public feed gives away a surprising amount of information...
          </h2>
        </div>
      </div>
    </section>

    <div class="columns">
      <div class="column is-two-thirds is-offset-2">
        <transition-group name="list-complete" class="div">
          <payment
            v-for="payment in payments"
            v-bind:key="payment.payment_id"
            v-bind:info="payment">
          </payment>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Payment from './components/Payment.vue';

function randomish() {
  return Math.ceil(Math.random() * 3);
}

export default {
  name: 'app',
  components: { Payment },
  data() {
    return {
      payments: [],
      paymentIds: [],
    };
  },
  mounted() {
    this.poll();
    this.loop();
  },
  methods: {
    poll() {
      axios
        .get(`https://cors.io/?https://venmo.com/api/v5/public?limit=${randomish()}`)
        .then((response) => {
          response.data.data.forEach((payment) => {
            if (!this.paymentIds.includes(payment.payment_id)) {
              this.payments.unshift(payment);
              this.paymentIds.unshift(payment.payment_id);
            }
          });
        });
    },
    loop() {
      const self = this;

      setTimeout(() => {
        self.poll();
        self.loop();
      }, randomish() * 1000);
    },
  },
};
</script>

<style>
  .list-complete-enter, .list-complete-leave-to
  /* .list-complete-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(-30px);
  }
</style>
