<template>
  <div>
    <h1>Donations History</h1>
    <el-table :data="[]" style="width: 100%; margin-top: 20px">
      <el-table-column prop="txHash" label="Transaction" />
      <el-table-column prop="donor" label="Donor" />
      <el-table-column prop="amount" label="Amount" />
      <el-table-column prop="date" label="Date" />
    </el-table>
  </div>
</template>
