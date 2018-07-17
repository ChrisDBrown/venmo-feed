<template>
  <div>
    Sender: {{info.actor.name}} ({{info.actor.username}})<br />
    Recipient: {{info.transactions[0].target.name}} ({{info.transactions[0].target.username}})<br />
    Message: {{info.message}}<br />
  </div>
</template>

<script>
export default {
  props: ['info']
};
</script>
