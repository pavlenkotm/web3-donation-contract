export default function CampaignsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Active Campaigns</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-2">Campaign Coming Soon</h3>
          <p className="text-gray-600">Browse and support amazing causes</p>
        </div>
      </div>
    </div>
  );
}
