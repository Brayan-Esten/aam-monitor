<template>
  <nav class="navbar navbar-expand-lg custom-navbar-color">
    <div class="container-fluid">
      <span class="navbar-brand me-5">AAM-Monitoring</span>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" @click.prevent="goToAdminDashboard()">Dashboard</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script src="./js/navigation-bar.js"></script>

<style lang="sass" scoped>
  .custom-navbar-color {
    background-color: #a6b3a9;
  }

  .nav-link {
    cursor: pointer
  }
</style>