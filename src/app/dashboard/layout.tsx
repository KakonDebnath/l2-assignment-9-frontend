import Sidebar from '@/components/pages/Dashboard/Sidebar';
import { TChildrenProps } from '@/type';
import React from 'react';

const AdminDashboardLayout = ({ children }: TChildrenProps) => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <div className='col-span-10 h-full'>
        {children}
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
