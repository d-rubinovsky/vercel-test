import type { Metadata } from 'next';
import { Header } from '../components/header';

const title = 'Private Proxies - Ping Customer';
const description = 'Manage your private proxy services';

export const metadata: Metadata = {
  title,
  description,
};

const PrivateProxies = () => {
  return (
    <>
      <Header pages={['Private Proxies']} page="Overview" />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex h-[400px] items-center justify-center rounded-lg border bg-card">
          <div className="text-center">
            <h3 className="mb-2 font-semibold text-lg">Private Proxies</h3>
            <p className="text-muted-foreground">
              This page will contain private proxy management features.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivateProxies;
