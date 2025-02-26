import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { ChevronDown } from 'lucide-react';

const CardWrapper = ({ children, className = '' }) => (
  <div
    className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 
    transition-all duration-300 hover:shadow-md ${className}`}
  >
    {children}
  </div>
);

const BarGraph = ({barData,monthlyData}) => {
  return (
    <div>
      <div className="space-y-4">
        <CardWrapper>
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-gray-600 text-sm">Total Monthly Revenue</div>
              <div className="text-2xl font-bold text-black">223,332</div>
              <div className="text-gray-600 text-xs">Previous Bonus</div>
            </div>
          </div>
          <LineChart
            width={800}
            height={250}
            data={monthlyData}
            className="w-full"
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <Line
              type="monotone"
              dataKey="value"
              stroke="#000000"
              strokeWidth={2}
              dot={false}
            />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '0.5rem',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            />
          </LineChart>
        </CardWrapper>

        <CardWrapper>
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-600">Premium Members</div>
            <div className="flex gap-2">
              <ChevronDown size={20} className="text-gray-600" />
            </div>
          </div>
          <BarChart
            width={800}
            height={250}
            data={barData}
            className="w-full"
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <Bar dataKey="value" fill="#000000" radius={[4, 4, 0, 0]} />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '0.5rem',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            />
          </BarChart>
        </CardWrapper>

        <CardWrapper>
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-600">Basic Members</div>
            <div className="flex gap-2">
              <ChevronDown size={20} className="text-gray-600" />
            </div>
          </div>
          <BarChart
            width={800}
            height={250}
            data={barData}
            className="w-full"
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <Bar dataKey="value" fill="#000000" radius={[4, 4, 0, 0]} />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '0.5rem',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            />
          </BarChart>
        </CardWrapper>
      </div>
    </div>
  );
};

export default BarGraph;
