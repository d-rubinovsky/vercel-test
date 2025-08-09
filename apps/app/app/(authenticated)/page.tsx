import type { Metadata } from 'next';
import { Header } from './components/header';

const title = 'Dashboard - Ping Customer';
const description = 'Dashboard overview for your proxy services';

export const metadata: Metadata = {
  title,
  description,
};

const Dashboard = () => {
  return (
    <>
      <Header pages={['Dashboard']} page="Overview" />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold">Active Proxies</h3>
            <p className="mt-2 font-bold text-2xl">0</p>
            <p className="text-muted-foreground text-sm">
              No proxies configured
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold">Data Usage</h3>
            <p className="mt-2 font-bold text-2xl">0 GB</p>
            <p className="text-muted-foreground text-sm">This month</p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold">Success Rate</h3>
            <p className="mt-2 font-bold text-2xl">--%</p>
            <p className="text-muted-foreground text-sm">No data available</p>
          </div>
        </div>
        <div className="min-h-[400px] rounded-lg border bg-card p-6">
          <h3 className="mb-4 font-semibold">Recent Activity</h3>
          <p className="text-muted-foreground">No recent activity to display</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
