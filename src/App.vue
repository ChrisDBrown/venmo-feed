<template>
  <div id="app">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Live Venmo Payments
          </h1>
          <h2 class="subtitle">
            UPDATE: Venmo no longer allows paged requests to the API, so this will only show a small set of payments.
            Previously it was possible to load each payment as it occured.
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
  },
  methods: {
    poll() {
      axios
        .get('https://cors-anywhere.herokuapp.com/https://venmo.com/api/v5/public')
        .then((response) => {
          response.data.data.forEach((payment) => {
            if (!this.paymentIds.includes(payment.payment_id)) {
              this.payments.unshift(payment);
              this.paymentIds.unshift(payment.payment_id);
            }
          });
        });
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
