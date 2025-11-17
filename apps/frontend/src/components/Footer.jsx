import { Heart, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-red-500" />
              <span className="text-xl font-bold">Donation Ecosystem</span>
            </div>
            <p className="text-gray-400">
              Empowering change through blockchain technology
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/campaigns" className="hover:text-white">Campaigns</a></li>
              <li><a href="/nft" className="hover:text-white">NFT Rewards</a></li>
              <li><a href="/profile" className="hover:text-white">Profile</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Donation Ecosystem by PavlenkoTM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
