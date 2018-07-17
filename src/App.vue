<template>
  <div id="app">
    <payment v-for="payment in payments" v-bind:key="payment.payment_id" v-bind:info="payment"></payment>
  </div>
</template>

<script>
import axios from 'axios';
import Payment from './components/Payment.vue'

function randomish() {
  return Math.ceil(Math.random() * 3);
}

export default {
  name: 'app',
  components: { Payment },
  data () {
    return {
      payments: [],
      paymentIds: [],
    }
  },
  mounted () {
    this.poll();
    this.loop();
  },
  methods: {
    poll: function() {
      axios
        .get(`https://cors.io/?https://venmo.com/api/v5/public?limit=${randomish()}`)
        .then(response => {
          response.data.data.forEach(payment => {
            if (!this.paymentIds.includes(payment.payment_id)) {
              this.payments.unshift(payment);
              this.paymentIds.unshift(payment.payment_id);
            }
          })
        });
    },
    loop: function() {
      let self = this;

      setTimeout(function(){
        self.poll();
        self.loop();
      }, randomish() * 700);
    }
  }
};
</script>
