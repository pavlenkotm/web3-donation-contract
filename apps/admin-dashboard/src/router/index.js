import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../views/DashboardView.vue';
import CampaignsView from '../views/CampaignsView.vue';
import DonationsView from '../views/DonationsView.vue';
import UsersView from '../views/UsersView.vue';
import NFTsView from '../views/NFTsView.vue';
import SettingsView from '../views/SettingsView.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView
  },
  {
    path: '/campaigns',
    name: 'Campaigns',
    component: CampaignsView
  },
  {
    path: '/donations',
    name: 'Donations',
    component: DonationsView
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersView
  },
  {
    path: '/nfts',
    name: 'NFTs',
    component: NFTsView
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
