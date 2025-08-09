import type { Metadata } from 'next';
import { Header } from '../components/header';

const title = 'Residential Proxies - Ping Customer';
const description = 'Manage your residential proxy services';

export const metadata: Metadata = {
  title,
  description,
};

const ResidentialProxies = () => {
  return (
    <>
      <Header pages={['Residential Proxies']} page="Overview" />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex h-[400px] items-center justify-center rounded-lg border bg-card">
          <div className="text-center">
            <h3 className="mb-2 text-lg font-semibold">Residential Proxies</h3>
            <p className="text-muted-foreground">
              This page will contain residential proxy management features.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResidentialProxies;
