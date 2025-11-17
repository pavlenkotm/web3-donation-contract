import { Link } from 'react-router-dom';
import { Heart, TrendingUp, Award } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Make a Difference with Web3
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Support causes you care about with cryptocurrency. Transparent, secure, and rewarding.
          </p>
          <Link
            to="/campaigns"
            className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Explore Campaigns
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Donations</h3>
              <p className="text-gray-600">
                Every donation is recorded on the blockchain, ensuring complete transparency
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Impact</h3>
              <p className="text-gray-600">
                See real-time progress of campaigns and their impact
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">NFT Rewards</h3>
              <p className="text-gray-600">
                Receive unique NFTs as a thank you for your generosity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">$0</div>
              <div className="text-gray-600">Total Donated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">0</div>
              <div className="text-gray-600">Active Campaigns</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">0</div>
              <div className="text-gray-600">Donors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">0</div>
              <div className="text-gray-600">NFTs Minted</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
