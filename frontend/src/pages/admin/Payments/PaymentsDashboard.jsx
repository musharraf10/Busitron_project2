import { Share, Search, Settings, Calendar } from 'lucide-react';
import BarGraph from './BarGraph';

// Sample data for charts
const monthlyData = [
  { name: 'Aug', value: 2000 },
  { name: 'Jul', value: 3500 },
  { name: 'Aug', value: 3000 },
  { name: 'Sep', value: 3800 },
  { name: 'Dec', value: 3200 },
  { name: 'Feb', value: 3900 },
];

const barData = [
  { month: '1', value: 20 },
  { month: '2', value: 25 },
  { month: '3', value: 45 },
  { month: '4', value: 30 },
  { month: '5', value: 55 },
  { month: '6', value: 35 },
  { month: '7', value: 60 },
];

// Reusable card component with a clean black and white design
const CardWrapper = ({ children, className = '' }) => (
  <div
    className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 
    transition-all duration-300 hover:shadow-md ${className}`}
  >
    {children}
  </div>
);

const PaymentsDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm overflow-hidden border border-gray-200">
        <div className="grid grid-cols-6 h-full">
          {/* Sidebar */}
          <CardWrapper className="col-span-1 border-r border-gray-200 rounded-none h-full">
            <div className="mb-6">
              <h2 className="text-black font-semibold mb-4">Generic</h2>
              <nav className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 bg-gray-100 rounded-lg p-2">
                  <Calendar size={18} />
                  <span>Monthly</span>
                </div>
              </nav>
            </div>
          </CardWrapper>

          {/* Main Content */}
          <div className="col-span-5 p-6 bg-gray-50">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-4">
                <button
                  className="bg-black text-white px-4 py-2 rounded-lg 
                  transition-all duration-300 hover:bg-gray-800"
                >
                  PaymentsDashboard
                </button>
              </div>
              <div className="flex gap-6 text-gray-600">
                <Share
                  size={20}
                  className="hover:text-black transition-colors cursor-pointer"
                />
                <Settings
                  size={20}
                  className="hover:text-black transition-colors cursor-pointer"
                />
                <Search
                  size={20}
                  className="hover:text-black transition-colors cursor-pointer"
                />
              </div>
            </div>

            {/* Top Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <CardWrapper>
                <div className="text-gray-600 text-sm">Basic User Revenue</div>
                <div className="text-2xl font-bold text-black">20,51305</div>
              </CardWrapper>
              <CardWrapper>
                <div className="text-gray-600 text-sm">Pro Premium Revenue</div>
                <div className="text-2xl font-bold text-black">20,51305</div>
              </CardWrapper>
              <CardWrapper>
                <div className="text-gray-600 text-sm">Features</div>
                <div className="text-2xl font-bold text-black">1</div>
              </CardWrapper>
              <CardWrapper>
                <div className="text-gray-600 text-sm">Month</div>
                <div className="text-2xl font-bold text-black">325%</div>
                <div className="text-gray-600 text-xs">Last month</div>
              </CardWrapper>
            </div>

            {/* Middle Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <CardWrapper>
                <div className="text-gray-600 text-sm">Today Revenue</div>
                <div className="text-3xl font-bold text-black">0,133</div>
                <div className="text-gray-600 text-xs">Last / Series</div>
              </CardWrapper>
              <CardWrapper>
                <div className="text-gray-600 text-sm">Six Months</div>
                <div className="text-3xl font-bold text-black">461730</div>
                <div className="text-gray-600 text-xs">Pro 1 Series</div>
              </CardWrapper>
              <CardWrapper>
                <div className="flex justify-between items-center">
                  <div className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm">
                    Last/Month
                  </div>
                  <div className="text-gray-600 text-sm">Last Monthly</div>
                </div>
                <div className="flex items-end gap-2 mt-2">
                  <div className="text-3xl font-bold text-black">44,</div>
                  <div className="text-gray-600 mb-1">Type</div>
                </div>
              </CardWrapper>
            </div>

            {/* Bottom Charts - Stacked */}

            <BarGraph barData={barData} monthlyData={monthlyData} />

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsDashboard;
