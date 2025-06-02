'use client';

import { BookingWidget } from '@/components/booking/BookingWidget';

export default function WidgetPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">Booking Widget</h1>
        <p className="text-gray-600 text-center mb-8">
          This standalone widget can be embedded on third-party websites.
        </p>
        <BookingWidget standalone={true} />
      </div>
      
      <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Embed Code</h2>
        <p className="text-gray-600 mb-4">
          Copy and paste the following code to embed this booking widget on your website:
        </p>
        <div className="bg-gray-100 p-4 rounded overflow-x-auto">
          <pre className="text-sm text-gray-800">
            {`<iframe
  src="${typeof window !== 'undefined' ? window.location.origin : ''}/widget"
  width="100%"
  height="600"
  frameborder="0"
  title="RideEase Booking Widget"
></iframe>`}
          </pre>
        </div>
        <p className="text-gray-600 mt-4 text-sm">
          The widget will inherit the width of its container. For best results, place it in a container between 300-500px wide.
        </p>
      </div>
    </div>
  );
}