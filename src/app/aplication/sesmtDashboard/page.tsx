// Arquivo DashboardSesmt.js
'use client';

import DefaultLayout from '@/components/dashComponents/Layouts/DefaultLaout';
import Breadcrumb from '@/components/dashComponents/Breadcrumbs/Breadcrumb';
import CIDs from '@/components/dashComponents/charts/BarGrafic';
import Donuts from '@/components/dashComponents/charts/circleGrafic';
import MultiAxisChart from '@/components/dashComponents/charts/multieX';
import PieChart from '@/components/dashComponents/charts/pieGraph';
import TimeChart from '@/components/dashComponents/charts/timeChart';

export default function DashboardSesmt() {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Dashboards" />
      <div className=" z-40 grid grid-cols-2 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-4 dark:bg-gray-900">
          <CIDs />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 dark:bg-gray-900">
          <Donuts />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 dark:bg-gray-900">
          <PieChart />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 dark:bg-gray-900">
          <MultiAxisChart />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 dark:bg-gray-900">
          <TimeChart />
        </div>
      </div>
    </DefaultLayout>
  );
}
