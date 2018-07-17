<template>
  <div class="card list-complete-item">
    <div class="card-content">
      <p class="title is-5">{{info.message}}</p>
      <span class="is-pulled-right"><a :href="`https://venmo.com/${info.permalink}`">{{info.created_time | moment('HH:mm:ss')}}</a></span>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <span>
          From {{info.actor.name}} (<a :href="`https://venmo.com/${info.actor.username}`">@{{info.actor.username}}</a>)
        </span>
      </p>
      <p class="card-footer-item">
        <span>
          To {{info.transactions[0].target.name}} (<a :href="`https://venmo.com/${info.transactions[0].target.name}`">@{{info.transactions[0].target.name}}</a>)
        </span>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['info'],
};
</script>

<style>
  .list-complete-item {
    transition: all 1s;
    margin-top: 20px;
  }
</style>
