<template>
  <div class="dashboard">
    <h1>Dashboard Overview</h1>

    <el-row :gutter="20" class="stats-row">
      <el-col :span="6">
        <el-card>
          <h3>Total Donations</h3>
          <p class="stat-value">$0</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <h3>Active Campaigns</h3>
          <p class="stat-value">0</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <h3>Total Users</h3>
          <p class="stat-value">0</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <h3>NFTs Minted</h3>
          <p class="stat-value">0</p>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="12">
        <el-card>
          <h3>Recent Donations</h3>
          <p>No donations yet</p>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <h3>Campaign Performance</h3>
          <p>No data available</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
</script>

<style scoped>
.dashboard h1 {
  margin-bottom: 20px;
}

.stats-row {
  margin-top: 20px;
}

.stat-value {
  font-size: 32px;
  font-weight: bold;
  color: #409eff;
  margin-top: 10px;
}
</style>
