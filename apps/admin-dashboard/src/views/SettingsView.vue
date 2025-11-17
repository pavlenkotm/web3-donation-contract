<template>
  <div>
    <h1>Settings</h1>
    <el-form style="max-width: 600px; margin-top: 20px">
      <el-form-item label="Contract Address">
        <el-input placeholder="0x..." />
      </el-form-item>
      <el-form-item label="RPC URL">
        <el-input placeholder="https://..." />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Save Settings</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
