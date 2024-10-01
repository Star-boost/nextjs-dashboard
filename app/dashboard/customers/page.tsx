import CustomersTable from '@/app/ui/customers/table';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';
import { FormattedCustomersTable } from '@/app/lib/definitions';

export const metadata: Metadata = {
  title: 'Customers',
}

export default async function Page( {
    searchParams,
  }: {
    searchParams?: {
      query?: string;
    };
  }) {
    const query = searchParams?.query || '';
    const customers: FormattedCustomersTable[] = await fetchFilteredCustomers(query);
    return (
        <Suspense fallback={<p>Loading...</p>}> 
            <CustomersTable customers={customers}> </CustomersTable>
        </Suspense>
    );
  }