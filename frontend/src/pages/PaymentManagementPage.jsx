// import React, { useState, useEffect } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/Button/Button';
// import { Table, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
// import { DownloadIcon, FilterIcon } from 'lucide-react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const PaymentManagementPage = () => {
//   const [payments, setPayments] = useState([]);
//   const [filteredPayments, setFilteredPayments] = useState([]);
//   const [subscriptionPlans, setSubscriptionPlans] = useState([]);
//   const [revenueData, setRevenueData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch payment data, subscription plans, and revenue growth data here
//     setLoading(false);
//   }, []);

//   const handleFilter = () => {
//     // Add filter logic for payments
//   };

//   const handleExport = () => {
//     // Export payment data as CSV/Excel
//   };

//   return (
//     <div className="p-4 space-y-6">
//       <Card>
//         <CardContent>
//           <h2 className="text-xl font-semibold mb-4">Revenue Overview</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="income" stroke="#82ca9d" />
//               <Line type="monotone" dataKey="subscriptions" stroke="#8884d8" />
//             </LineChart>
//           </ResponsiveContainer>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardContent>
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold">Payments</h2>
//             <div className="flex space-x-2">
//               <Button onClick={handleFilter} className="flex items-center space-x-1">
//                 <FilterIcon className="h-4 w-4" />
//                 <span>Filter</span>
//               </Button>
//               <Button onClick={handleExport} className="flex items-center space-x-1">
//                 <DownloadIcon className="h-4 w-4" />
//                 <span>Export CSV</span>
//               </Button>
//             </div>
//           </div>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Date</TableCell>
//                 <TableCell>Amount</TableCell>
//                 <TableCell>User</TableCell>
//                 <TableCell>Status</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredPayments.map((payment) => (
//                 <TableRow key={payment.id}>
//                   <TableCell>{payment.date}</TableCell>
//                   <TableCell>{payment.amount}</TableCell>
//                   <TableCell>{payment.user}</TableCell>
//                   <TableCell>{payment.status}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardContent>
//           <h2 className="text-xl font-semibold mb-4">Subscription Plans</h2>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Plan</TableCell>
//                 <TableCell>Price</TableCell>
//                 <TableCell>Features</TableCell>
//                 <TableCell>Action</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {subscriptionPlans.map((plan) => (
//                 <TableRow key={plan.id}>
//                   <TableCell>{plan.name}</TableCell>
//                   <TableCell>{plan.price}</TableCell>
//                   <TableCell>{plan.features.join(', ')}</TableCell>
//                   <TableCell>
//                     <Button>Edit</Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardContent>
//           <h2 className="text-xl font-semibold mb-4">Payouts for Content Creators</h2>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Creator</TableCell>
//                 <TableCell>Commission Rate</TableCell>
//                 <TableCell>Payout History</TableCell>
//                 <TableCell>Tax Information</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {/** Add payout data here */}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default PaymentManagementPage;
