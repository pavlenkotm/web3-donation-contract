<template>
  <el-container class="admin-layout">
    <el-aside width="250px">
      <div class="logo">
        <h2>Admin Panel</h2>
      </div>
      <el-menu
        :default-active="currentRoute"
        router
        class="sidebar-menu"
      >
        <el-menu-item index="/">
          <span>Dashboard</span>
        </el-menu-item>
        <el-menu-item index="/campaigns">
          <span>Campaigns</span>
        </el-menu-item>
        <el-menu-item index="/donations">
          <span>Donations</span>
        </el-menu-item>
        <el-menu-item index="/users">
          <span>Users</span>
        </el-menu-item>
        <el-menu-item index="/nfts">
          <span>NFTs</span>
        </el-menu-item>
        <el-menu-item index="/settings">
          <span>Settings</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <div class="header-content">
          <h3>Donation Ecosystem Admin</h3>
          <el-button type="primary">Connect Wallet</el-button>
        </div>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentRoute = computed(() => route.path);
</script>

<style scoped>
.admin-layout {
  height: 100vh;
}

.logo {
  padding: 20px;
  text-align: center;
  background: #545c64;
  color: white;
}

.sidebar-menu {
  border: none;
  height: calc(100vh - 80px);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
</style>
