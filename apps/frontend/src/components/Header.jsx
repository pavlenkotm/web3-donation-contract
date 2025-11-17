import { Link } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Heart } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-red-500" />
            <span className="text-2xl font-bold text-gray-900">
              Donation Ecosystem
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-500 transition">
              Home
            </Link>
            <Link to="/campaigns" className="text-gray-700 hover:text-red-500 transition">
              Campaigns
            </Link>
            <Link to="/nft" className="text-gray-700 hover:text-red-500 transition">
              NFT Rewards
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-red-500 transition">
              Profile
            </Link>
          </nav>

          <ConnectButton />
        </div>
      </div>
    </header>
  );
}
