<template>
  <div>
    <h1>Campaigns Management</h1>
    <el-button type="primary" style="margin: 20px 0">Create Campaign</el-button>
    <el-table :data="[]" style="width: 100%">
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="title" label="Title" />
      <el-table-column prop="goal" label="Goal" />
      <el-table-column prop="raised" label="Raised" />
      <el-table-column label="Actions">
        <template #default>
          <el-button size="small">Edit</el-button>
          <el-button size="small" type="danger">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
