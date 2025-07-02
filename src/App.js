import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, Zap, TrendingUp, Shield, DollarSign, Package, Users, AlertCircle, CheckCircle, Camera, Star, Clock } from 'lucide-react';
import rolexImage from './rolex.jpg';
import margaretImage from './margret.jpg';
import chineseImage from './chinese.jpg';

// Demo Component
const AuctionAIDemo = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeTab, setActiveTab] = useState('ecosystem');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiInsights, setAiInsights] = useState(null);
  const [images, setImages] = useState({
    rolex: null,
    painting: null,
    vase: null
  });

  // Create CSS-based placeholder images
  const createPlaceholderImage = (type) => {
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    const ctx = canvas.getContext('2d');
    
    if (type === 'watch') {
      // Create a watch-like gradient
      const gradient = ctx.createRadialGradient(150, 150, 0, 150, 150, 150);
      gradient.addColorStop(0, '#1a1a1a');
      gradient.addColorStop(0.7, '#333333');
      gradient.addColorStop(1, '#111111');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 300, 300);
      
      // Add watch elements
      ctx.strokeStyle = '#c0c0c0';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(150, 150, 80, 0, 2 * Math.PI);
      ctx.stroke();
      
      ctx.fillStyle = '#ffffff';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('ROLEX', 150, 140);
      ctx.fillText('SUBMARINER', 150, 160);
    } else if (type === 'painting') {
      // Create an artistic gradient
      const gradient = ctx.createLinearGradient(0, 0, 300, 300);
      gradient.addColorStop(0, '#8B4513');
      gradient.addColorStop(0.3, '#D2691E');
      gradient.addColorStop(0.6, '#F4A460');
      gradient.addColorStop(1, '#DEB887');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 300, 300);
      
      // Add artistic elements
      ctx.fillStyle = 'rgba(0,0,0,0.7)';
      ctx.beginPath();
      ctx.arc(150, 120, 40, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(140, 115, 8, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(160, 115, 8, 0, 2 * Math.PI);
      ctx.fill();
    } else if (type === 'vase') {
      // Create a vase-like shape
      ctx.fillStyle = '#f8f8ff';
      ctx.fillRect(0, 0, 300, 300);
      
      // Vase outline
      ctx.strokeStyle = '#4169E1';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(130, 50);
      ctx.lineTo(170, 50);
      ctx.lineTo(175, 80);
      ctx.lineTo(180, 120);
      ctx.lineTo(170, 200);
      ctx.lineTo(160, 250);
      ctx.lineTo(140, 250);
      ctx.lineTo(130, 200);
      ctx.lineTo(120, 120);
      ctx.lineTo(125, 80);
      ctx.closePath();
      ctx.stroke();
      
      // Decorative pattern
      ctx.fillStyle = '#4169E1';
      ctx.beginPath();
      ctx.arc(150, 140, 15, 0, 2 * Math.PI);
      ctx.fill();
    }
    
    return canvas.toDataURL();
  };

  useEffect(() => {
    // Since we're now using real imported images, we can set them directly
    setImages({
      rolex: rolexImage,
      painting: margaretImage,
      vase: chineseImage
    });
  }, []);

  const handleImageAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAiInsights({
        identified: "Likely a vintage Cartier Santos watch",
        estimatedValue: "$3,500 - $5,200",
        authenticity: "87% confidence - authentic",
        nextSteps: "Upload additional photos of case back and movement for expert verification"
      });
    }, 2000);
  };

  const mockAuctions = [
    {
      id: 1,
      title: "Vintage Rolex Submariner 1960s",
      image: rolexImage,
      imageType: "url",
      currentBid: 12500,
      estimatedValue: "15,000-18,000",
      aiScore: 9.2,
      authenticity: "Verified",
      timeLeft: "2d 14h",
      category: "Watches",
      seller: "Heritage Timepieces",
      sellerRating: 4.9,
      aiInsights: {
        marketTrend: "Strong upward trend (+15% last 6 months)",
        bidRecommendation: "Consider bidding up to $16,000",
        rarity: "Rare dial variant - only 200 known examples",
        condition: "Excellent (8.5/10) - minor service marks visible"
      }
    },
    {
      id: 2,
      title: "Margaret Keane - Big Eyes Oil Painting",
      image: margaretImage,
      imageType: "url",
      currentBid: 2850,
      estimatedValue: "3,200-4,800",
      aiScore: 8.7,
      authenticity: "Expert Verified",
      timeLeft: "1d 8h",
      category: "Art",
      seller: "Metropolitan Fine Arts",
      sellerRating: 4.7,
      aiInsights: {
        marketTrend: "Strong market for Keane's signature style (+22% YoY)",
        bidRecommendation: "Excellent value up to $4,200",
        rarity: "Classic 'Big Eyes' period - highly collectible",
        condition: "Excellent - original frame, vibrant colors"
      }
    },
    {
      id: 3,
      title: "Antique Chinese Blue & White Porcelain Vase",
      image: chineseImage,
      imageType: "url",
      currentBid: 2200,
      estimatedValue: "3,000-5,000",
      aiScore: 8.5,
      authenticity: "Expert Verified",
      timeLeft: "3h 22m",
      category: "Antiques",
      seller: "Asian Art Specialists",
      sellerRating: 4.8,
      aiInsights: {
        marketTrend: "High demand for Qing dynasty blue & white (+18%)",
        bidRecommendation: "Strong buy up to $4,200",
        rarity: "Imperial dragon motif - museum quality piece",
        condition: "Excellent - no chips or cracks detected by AI scan"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-800 to-slate-800 text-white text-sm">
      {/* Compact Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-3 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CollectIQ Demo
              </h1>
            </div>
            {currentPage !== 'home' && (
              <nav className="flex space-x-4">
                {['ecosystem', 'intelligence', 'marketplace'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      activeTab === tab
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            )}
            {currentPage !== 'home' && (
              <button
                onClick={() => setCurrentPage('home')}
                className="text-gray-300 hover:text-white hover:bg-white/10 px-2 py-1 rounded-lg transition-all text-xs"
              >
                Home
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Compact Main Content */}
      <main className="max-w-6xl mx-auto px-3 py-4">
        {currentPage === 'home' && (
          <div className="space-y-8">
            {/* Compact Hero */}
            <div className="text-center space-y-4 py-8">
              <h2 className="text-3xl font-bold">AI-Powered Auction Platform</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Unified discovery, authentication, and marketplace for collectors worldwide
              </p>
              <button
                onClick={() => setCurrentPage('app')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-xl font-semibold transition-all"
              >
                Explore Features
              </button>
            </div>

            {/* Compact Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <Search className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <h3 className="font-semibold mb-1">Universal Search</h3>
                <p className="text-xs text-gray-400">All platforms, one search</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <Zap className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <h3 className="font-semibold mb-1">AI Authentication</h3>
                <p className="text-xs text-gray-400">Instant verification</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <h3 className="font-semibold mb-1">Smart Insights</h3>
                <p className="text-xs text-gray-400">Predictive analytics</p>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'app' && (
          <div>
            {activeTab === 'ecosystem' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">Complete Ecosystem</h2>
                  <p className="text-gray-300 text-sm">One platform for the entire auction journey</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="font-semibold text-red-400 mb-2">Current (Fragmented)</h3>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 bg-red-500/20 rounded text-center text-red-400 text-xs">1</span>
                        <span>Search on Barnebys</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 bg-red-500/20 rounded text-center text-red-400 text-xs">2</span>
                        <span>Redirect to LiveAuctioneers</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 bg-red-500/20 rounded text-center text-red-400 text-xs">3</span>
                        <span>Get appraisal elsewhere</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 bg-red-500/20 rounded text-center text-red-400 text-xs">4</span>
                        <span>Arrange shipping separately</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="font-semibold text-green-400 mb-2">Our Solution (Unified)</h3>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Search all platforms</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Instant AI appraisal</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Smart bidding</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Integrated logistics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'intelligence' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">AI Intelligence</h2>
                  <p className="text-gray-300 text-sm">Advanced authentication and market analysis</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Camera className="w-4 h-4 mr-2 text-blue-400" />
                      AI Analysis Demo
                    </h3>
                    <div className="space-y-3">
                      <div className="border border-dashed border-white/30 rounded-lg p-4 text-center">
                        <Camera className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                        <button
                          onClick={handleImageAnalysis}
                          disabled={isAnalyzing}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded text-xs font-medium disabled:opacity-50"
                        >
                          {isAnalyzing ? 'Analyzing...' : 'Demo Analysis'}
                        </button>
                      </div>

                      {isAnalyzing && (
                        <div className="text-center">
                          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                          <div className="text-xs text-gray-300">
                            <p>🔍 Scanning image...</p>
                            <p>📊 Analyzing market data...</p>
                          </div>
                        </div>
                      )}

                      {aiInsights && (
                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                          <div className="flex items-center space-x-2 mb-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <h4 className="font-semibold text-xs">Analysis Complete</h4>
                          </div>
                          <div className="space-y-1 text-xs">
                            <div><strong>Item:</strong> {aiInsights.identified}</div>
                            <div><strong>Value:</strong> {aiInsights.estimatedValue}</div>
                            <div><strong>Auth:</strong> {aiInsights.authenticity}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                      Market Intelligence
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-blue-500/20 rounded p-3">
                        <h4 className="font-medium text-blue-400 text-sm">Market Trends</h4>
                        <div className="text-xl font-bold text-green-400">+18.5%</div>
                        <p className="text-xs text-gray-300">6-month growth</p>
                      </div>
                      
                      <div className="bg-purple-500/20 rounded p-3">
                        <h4 className="font-medium text-purple-400 text-sm">Smart Bidding</h4>
                        <p className="text-xs">Recommended max: $16,200</p>
                      </div>

                      <div className="bg-orange-500/20 rounded p-3">
                        <h4 className="font-medium text-orange-400 text-sm">Rarity Score</h4>
                        <div className="text-lg font-bold">9.2/10</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'marketplace' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">Unified Marketplace</h2>
                  <p className="text-gray-300 text-sm">Cross-platform discovery and bidding</p>
                </div>

                {/* Compact Search */}
                <div className="relative max-w-lg mx-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search all platforms..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm"
                  />
                </div>

                {/* Compact Auctions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {mockAuctions.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-all cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="h-24 flex items-center justify-center bg-white/5 rounded mb-2">
                        {item.image && (
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="max-w-full max-h-full object-contain"
                          />
                        )}
                      </div>
                      <h3 className="font-semibold text-sm mb-1 line-clamp-2">{item.title}</h3>
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-green-400 font-bold">${item.currentBid.toLocaleString()}</div>
                        <div className="flex items-center space-x-1">
                          <Zap className="w-3 h-3 text-yellow-400" />
                          <span className="text-xs">{item.aiScore}</span>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-green-400">{item.authenticity}</span>
                        <span className="text-orange-400">{item.timeLeft}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Compact Item Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-lg border border-white/20 max-w-md w-full">
              <div className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold">{selectedItem.title}</h3>
                  <button onClick={() => setSelectedItem(null)} className="text-gray-400">✕</button>
                </div>

                <div className="h-32 flex items-center justify-center bg-slate-700 rounded mb-4">
                  {selectedItem.image && (
                    <img 
                      src={selectedItem.image} 
                      alt={selectedItem.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-blue-400 text-xs">Current Bid</h4>
                    <p className="text-xl font-bold text-green-400">${selectedItem.currentBid.toLocaleString()}</p>
                  </div>
                  <div>
                    <h4 className="text-blue-400 text-xs">AI Score</h4>
                    <div className="flex items-center space-x-1">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span className="text-lg font-bold">{selectedItem.aiScore}/10</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded p-3 mb-4">
                  <h4 className="text-blue-400 text-xs mb-2">AI Insights</h4>
                  <div className="space-y-1 text-xs">
                    <div><strong>Trend:</strong> {selectedItem.aiInsights.marketTrend}</div>
                    <div><strong>Rec:</strong> {selectedItem.aiInsights.bidRecommendation}</div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 py-2 rounded text-sm">
                    Bid
                  </button>
                  <button className="flex-1 bg-white/10 py-2 rounded text-sm">
                    Watch
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};


const AuctionIndustryPresentation = () => {
  // Load Inter font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'title',
      title: '',
      subtitle: '',
      content: (
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Auction Industry Research</h1>
            <h2 className="text-2xl text-gray-300">Market Analysis & Industry Insights</h2>
          </div>
          <div className="bg-white/10 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-lg">Research conducted on LiveAuctioneers, Barnebys, ValueMyStuff, and Catawiki</p>
          </div>
        </div>
      )
    },
    {
      id: 'problem',
      title: 'The Problem',
      subtitle: 'Fragmented auction ecosystem creates user friction',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">The Current User Journey is Broken</h2>
          </div>
          
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-red-400 mb-4">What Collectors Face Today:</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 font-bold">1</span>
                <span>Search for items on Barnebys</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 font-bold">2</span>
                <span>Get redirected to LiveAuctioneers to bid</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 font-bold">3</span>
                <span>Use ValueMyStuff for separate appraisals ($28 each)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 font-bold">4</span>
                <span>Arrange shipping and insurance separately</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 font-bold">5</span>
                <span>Handle authentication disputes independently</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Result:</h3>
            <p className="text-lg">High friction, poor user experience, and missed opportunities for both buyers and sellers</p>
          </div>
        </div>
      )
    },
    {
      id: 'market-research',
      title: 'Market Research Findings',
      subtitle: 'Analysis of key platforms in the auction ecosystem',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-3">LiveAuctioneers</h3>
              <div className="space-y-2 text-sm">
                <p><strong>What they do:</strong> Live auction platform</p>
                <p><strong>Scale:</strong> 56M+ bidder sessions, 5M+ users</p>
                <p><strong>Strengths:</strong> Real-time bidding, massive inventory</p>
                <p><strong>Pain points:</strong> High fees (15-30%), complex logistics</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Catawiki</h3>
              <div className="space-y-2 text-sm">
                <p><strong>What they do:</strong> Expert-curated auctions</p>
                <p><strong>Scale:</strong> €98M revenue, 10M monthly visitors</p>
                <p><strong>Strengths:</strong> Quality curation, authentication</p>
                <p><strong>Limitations:</strong> 65K items/week limit, closed ecosystem</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-3">Barnebys</h3>
              <div className="space-y-2 text-sm">
                <p><strong>What they do:</strong> Auction search aggregator</p>
                <p><strong>Scale:</strong> 3K+ auction houses indexed</p>
                <p><strong>Strengths:</strong> Cross-platform discovery</p>
                <p><strong>Limitations:</strong> No unified bidding, redirects only</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-3">ValueMyStuff</h3>
              <div className="space-y-2 text-sm">
                <p><strong>What they do:</strong> Online appraisal service</p>
                <p><strong>Scale:</strong> 500K+ users, $28/appraisal</p>
                <p><strong>Strengths:</strong> Expert network, convenience</p>
                <p><strong>Limitations:</strong> Standalone service, no integration</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-2">Key Market Insight:</h3>
            <p className="text-lg">Each platform excels in one area but forces users to juggle multiple services. <strong>No one has unified the entire experience.</strong></p>
          </div>
        </div>
      )
    },
    {
      id: 'opportunity',
      title: 'The Opportunity',
      subtitle: 'Build the "Google of Auctions" - unified ecosystem with AI intelligence',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Our Solution: CollectIQ</h2>
            <p className="text-xl text-gray-300">The first cross-platform auction aggregator with AI intelligence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-green-400">What We Build:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Search className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-semibold">Universal Discovery</h4>
                    <p className="text-sm text-gray-400">Search across ALL auction platforms simultaneously</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Camera className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h4 className="font-semibold">AI Authentication</h4>
                    <p className="text-sm text-gray-400">Instant authenticity verification and valuations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-semibold">Smart Bidding</h4>
                    <p className="text-sm text-gray-400">AI-powered market analysis and bidding strategies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Package className="w-6 h-6 text-orange-400 mt-1" />
                  <div>
                    <h4 className="font-semibold">End-to-End Service</h4>
                    <p className="text-sm text-gray-400">Integrated shipping, insurance, and logistics</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Market Position</h3>
              <div className="space-y-3 text-sm">
                <p><strong>Think:</strong> Roku for streaming services</p>
                <p><strong>We aggregate:</strong> Catawiki + LiveAuctioneers + Christie's + 50+ platforms</p>
                <p><strong>Value add:</strong> AI intelligence, unified experience, cross-platform insights</p>
                <p><strong>Revenue:</strong> Transaction fees, AI services, premium features</p>
              </div>
            </div>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <p className="text-center text-lg"><strong>We're not competing with existing platforms - we're making them all more valuable and accessible.</strong></p>
          </div>
        </div>
      )
    },
    {
      id: 'competitive-analysis',
      title: 'Competitive Differentiation',
      subtitle: 'How we position against each major player',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-400 mb-3">Catawiki Limitations</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Limited to 65K items weekly</span>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Closed ecosystem</span>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Human bottleneck (240 experts)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>No cross-platform comparison</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-yellow-400 mb-3">Barnebys + Others</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Search only - no transactions</span>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Redirects to external platforms</span>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Static data, no intelligence</span>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Fragmented experience</span>
                </div>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-400 mb-3">Our Advantages</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>AI scales to millions of items</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Open ecosystem (all platforms)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Unified bidding interface</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Predictive market intelligence</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Key Strategic Insight</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-400 mb-2">Traditional Approach:</h4>
                <p className="text-sm">Build another auction house and compete for market share</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Our Approach:</h4>
                <p className="text-sm">Build the intelligent layer that connects ALL auction houses</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'business-model',
      title: 'Business Model & Revenue',
      subtitle: 'Multiple revenue streams with proven market demand',
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-400">Revenue Streams</h3>
              <div className="space-y-4">
                <div className="bg-blue-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-400">Transaction Fees</h4>
                  <p className="text-sm text-gray-300">5-12% on sales (competitive with existing)</p>
                  <p className="text-xs text-gray-400">Primary revenue driver</p>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-green-400">AI Appraisals</h4>
                  <p className="text-sm text-gray-300">$15-50 per item (vs ValueMyStuff $28)</p>
                  <p className="text-xs text-gray-400">Higher margin, scalable</p>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-400">Premium Insights</h4>
                  <p className="text-sm text-gray-300">$29-99/month subscriptions</p>
                  <p className="text-xs text-gray-400">Recurring revenue for power users</p>
                </div>
                <div className="bg-orange-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-400">B2B Services</h4>
                  <p className="text-sm text-gray-300">White-label AI tools for auction houses</p>
                  <p className="text-xs text-gray-400">Enterprise sales</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-400">Market Validation</h3>
              <div className="bg-white/10 rounded-xl p-6 space-y-4">
                <div>
                  <h4 className="font-semibold">Proven Demand:</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• Catawiki: €98M revenue</li>
                    <li>• LiveAuctioneers: 56M+ sessions</li>
                    <li>• ValueMyStuff: 500K+ users</li>
                    <li>• Barnebys: 1.5M+ monthly visitors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Market Growth:</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• COVID accelerated online adoption</li>
                    <li>• 70% growth in LiveAuctioneers users</li>
                    <li>• Increasing demand for authentication</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-6">
                <h4 className="font-semibold text-green-400 mb-2">Competitive Advantage:</h4>
                <p className="text-sm">We monetize the aggregation itself, not competition with auction houses. This creates alignment instead of conflict.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'next-steps',
      title: 'Recommended Next Steps',
      subtitle: 'Path to launch and market validation',
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-400">Phase 1: MVP Development</h3>
              <div className="space-y-4">
                <div className="bg-blue-500/20 rounded-lg p-4">
                  <h4 className="font-semibold">Core Features (3-6 months)</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• Cross-platform search aggregation</li>
                    <li>• Basic AI image recognition</li>
                    <li>• Price comparison dashboard</li>
                    <li>• User authentication system</li>
                  </ul>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4">
                  <h4 className="font-semibold">Target Categories</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• Vintage watches (high value, clear authentication)</li>
                    <li>• Contemporary art (strong market data)</li>
                    <li>• Designer items (clear provenance)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-purple-400">Phase 2: Market Entry</h3>
              <div className="space-y-4">
                <div className="bg-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold">Go-to-Market Strategy</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• Partner with 2-3 mid-tier auction houses</li>
                    <li>• Target collectors frustrated with current tools</li>
                    <li>• Launch with freemium model</li>
                  </ul>
                </div>
                <div className="bg-orange-500/20 rounded-lg p-4">
                  <h4 className="font-semibold">Validation Metrics</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• User engagement with search</li>
                    <li>• AI accuracy feedback</li>
                    <li>• Transaction conversion rates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Technology & Implementation Challenges</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-red-400 mb-2">Technical Complexity</h4>
                <ul className="text-sm space-y-1">
                  <li>• API integrations with 20+ platforms</li>
                  <li>• Real-time data synchronization</li>
                  <li>• Image recognition at scale</li>
                  <li>• Cross-platform authentication</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Data Challenges</h4>
                <ul className="text-sm space-y-1">
                  <li>• Inconsistent data formats</li>
                  <li>• Quality/accuracy validation</li>
                  <li>• Historical price modeling</li>
                  <li>• Multi-language support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Operational Hurdles</h4>
                <ul className="text-sm space-y-1">
                  <li>• Platform partnership negotiations</li>
                  <li>• Regulatory compliance (payments)</li>
                  <li>• Fraud detection systems</li>
                  <li>• International logistics coordination</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/20 pt-6">
              <h4 className="text-xl font-bold text-green-400 mb-4">Practical Solutions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="bg-green-500/10 rounded-lg p-4">
                    <h5 className="font-semibold text-green-400 mb-2">Phased Integration Approach</h5>
                    <p className="text-sm">Start with 3-5 major platforms (LiveAuctioneers, Catawiki, Heritage) using web scraping + official APIs where available. Standardize data schema internally before expanding.</p>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-400 mb-2">AI Training Strategy</h5>
                    <p className="text-sm">Leverage existing computer vision models (Google Vision API, AWS Rekognition) fine-tuned on auction data. Start with high-value categories where accuracy matters most.</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-purple-500/10 rounded-lg p-4">
                    <h5 className="font-semibold text-purple-400 mb-2">Partnership-First Strategy</h5>
                    <p className="text-sm">Position as technology partner, not competitor. Offer white-label solutions to smaller auction houses in exchange for data access and integration support.</p>
                  </div>
                  <div className="bg-orange-500/10 rounded-lg p-4">
                    <h5 className="font-semibold text-orange-400 mb-2">Compliance & Payments</h5>
                    <p className="text-sm">Use established payment processors (Stripe Connect, PayPal) and partner with existing logistics providers rather than building in-house infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'demo',
      title: 'Live Demo',
      subtitle: 'Experience the CollectIQ platform in action',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Interactive Platform Demo</h2>
            <p className="text-xl text-gray-300 mb-6">See how our unified auction ecosystem works in practice (click)</p>
          </div>
          
          {/* Demo Component Container */}
          <div className="bg-white/5 rounded-xl border border-white/20 p-1">
            <AuctionAIDemo />
          </div>
          
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-green-400 mb-2">Demo Highlights</h3>
            <p className="text-gray-300">
              Bringing together fragmented auction services 
              into one intelligent, AI-powered platform that benefits both buyers and sellers.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'conclusion',
      title: 'Summary & Recommendation',
      subtitle: 'Strong opportunity to build the intelligent layer for auction ecosystem',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Key Takeaways</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-3">Strong Market Opportunity</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Proven market demand ($350M+ combined revenue)</li>
                  <li>• Clear pain point (fragmentation)</li>
                  <li>• Growing online adoption post-COVID</li>
                  <li>• No unified solution exists</li>
                </ul>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Clear Differentiation</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Cross-platform aggregation (vs. closed ecosystems)</li>
                  <li>• AI-powered intelligence (vs. human limitations)</li>
                  <li>• Unified experience (vs. fragmented journey)</li>
                  <li>• Complementary positioning (vs. direct competition)</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Multiple Revenue Streams</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Transaction fees (proven model)</li>
                  <li>• AI services (high margin)</li>
                  <li>• Premium subscriptions (recurring)</li>
                  <li>• B2B solutions (enterprise)</li>
                </ul>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Executable Plan</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Clear MVP scope (3-6 months)</li>
                  <li>• Reasonable funding requirement ($500K-1M)</li>
                  <li>• Defined success metrics</li>
                  <li>• Strategic partnerships available</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Recommendation</h3>
            <p className="text-lg mb-4">
              Proceed with MVP development. Opportunity to build the "Google of Auctions" 
              in a market with proven demand and clear technological advantages with artifical intelligence.
            </p>
            <p className="text-sm text-gray-300">
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <h1 className="text-lg font-bold">Auction Industry Research</h1>
          </div>
          <div className="text-sm text-gray-400">
            Slide {currentSlide + 1} of {slides.length}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">{slides[currentSlide].title}</h1>
              <p className="text-xl text-gray-300">{slides[currentSlide].subtitle}</p>
            </div>
            
            <div className="min-h-[500px]">
              {slides[currentSlide].content}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-black/20 backdrop-blur-sm border-t border-white/10 p-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {/* Slide indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-blue-500'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuctionIndustryPresentation;