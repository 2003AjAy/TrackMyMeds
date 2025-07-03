import React, { useState } from 'react';
import { Menu, X, Package, AlertTriangle, Clock, Calculator, TrendingUp, BarChart3, Check, ArrowRight, Shield, Bell } from 'lucide-react';
import pillImage from './assets/image1.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-2 rounded-lg">
                <Package className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TrackMyMed</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Home</a>
              <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Features</a>
              <a href="#benefits" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Benefits</a>
              <a href="#pricing" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Contact</a>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-emerald-700 hover:to-blue-700 transition-all duration-200 font-medium">
                Start Free Trial
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
              <div className="px-4 py-6 space-y-4">
                <a href="#home" className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium">Home</a>
                <a href="#features" className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium">Features</a>
                <a href="#benefits" className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium">Benefits</a>
                <a href="#pricing" className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium">Pricing</a>
                <a href="#contact" className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium">Contact</a>
                <div className="pt-4 border-t border-gray-200 space-y-4">
                  <button className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                    Sign In
                  </button>
                  <button className="block w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-emerald-700 hover:to-blue-700 transition-all duration-200 font-medium">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Smart Pharmacy{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Inventory
                </span>{' '}
                Management
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Streamline your pharmacy operations with automated stock tracking, expiry alerts, and intelligent billing. Never run out of essential medicines again.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-emerald-700 hover:to-blue-700 transition-all duration-200 font-semibold flex items-center justify-center group">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-all duration-200 font-semibold">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Inventory Dashboard</h3>
                  <BarChart3 className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-lg">
                    <div className="bg-emerald-600 p-2 rounded-full">
                      <Package className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Paracetamol 500mg</p>
                      <p className="text-sm text-gray-600">Stock: 250 units</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-emerald-600">In Stock</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg">
                    <div className="bg-yellow-600 p-2 rounded-full">
                      <AlertTriangle className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Amoxicillin 250mg</p>
                      <p className="text-sm text-gray-600">Stock: 15 units</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-yellow-600">Low Stock</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
                    <div className="bg-red-600 p-2 rounded-full">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Aspirin 75mg</p>
                      <p className="text-sm text-gray-600">Expires: 15 days</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-red-600">Expiring Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Pharmacy Management Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run your pharmacy efficiently, from inventory tracking to automated billing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-emerald-600 p-3 rounded-lg w-fit mb-4">
                <Package className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Medicine Records</h3>
              <p className="text-gray-600">
                Manage all medicine records including stock levels, batch numbers, supplier details, and purchase history in one place.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 p-3 rounded-lg w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Automatic Stock Tracking</h3>
              <p className="text-gray-600">
                Real-time stock updates with every sale. Track inventory movements and get accurate stock levels instantly.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-purple-600 p-3 rounded-lg w-fit mb-4">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrated Billing System</h3>
              <p className="text-gray-600">
                Generate bills quickly while automatically reducing stock levels. Support for GST, discounts, and multiple payment methods.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-yellow-600 p-3 rounded-lg w-fit mb-4">
                <Bell className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Notifications</h3>
              <p className="text-gray-600">
                Get instant alerts for low stock levels and medicines nearing expiry. Never miss critical inventory updates.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600 p-3 rounded-lg w-fit mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expiry Management</h3>
              <p className="text-gray-600">
                Track expiry dates for all medicines and get advance warnings to prevent losses from expired stock.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-indigo-600 p-3 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Daily Use</h3>
              <p className="text-gray-600">
                Intuitive interface designed for busy pharmacy staff. Quick access to all features with minimal training required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Pharmacy Operations
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                TrackMyMed helps pharmacy owners reduce losses, improve efficiency, and provide better customer service through intelligent inventory management.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Reduce Medicine Wastage</h4>
                    <p className="text-gray-600">Prevent losses from expired medicines with proactive expiry tracking and alerts.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Never Run Out of Stock</h4>
                    <p className="text-gray-600">Automated low stock alerts ensure you always have essential medicines available.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Faster Billing Process</h4>
                    <p className="text-gray-600">Integrated billing system reduces checkout time and improves customer satisfaction.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Better Business Insights</h4>
                    <p className="text-gray-600">Track sales patterns and inventory trends to make informed purchasing decisions.</p>
                  </div>
                </div>
              </div>
            </div>

          {/* Right Image Section */}
          <div className="flex justify-center">
            <img
              src={pillImage}
              alt="Cartoon pill mascot"
              width={400}
            />
          </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Affordable Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your pharmacy size. All plans include core inventory management features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">₹999</div>
                <div className="text-gray-600">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>Up to 500 medicines</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>Basic stock tracking</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>Expiry alerts</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>Simple billing</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>Email support</span>
                </li>
              </ul>
              <button className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors font-semibold">
                Start Free Trial
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 border-2 border-emerald-600 rounded-xl p-8 relative hover:shadow-lg transition-shadow">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">₹1,999</div>
                <div className="text-gray-600">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>Unlimited medicines</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>Advanced stock tracking</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>Smart notifications</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>GST billing & reports</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>Analytics dashboard</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 px-6 rounded-lg hover:from-emerald-700 hover:to-blue-700 transition-all duration-200 font-semibold">
                Start Free Trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">₹4,999</div>
                <div className="text-gray-600">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>Everything in Professional</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>Multiple store locations</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>API integrations</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>Custom reports</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>24/7 phone support</span>
                </li>
              </ul>
              <button className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors font-semibold">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your Pharmacy?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
          Say goodbye to stock headaches. TrackMyMed makes pharmacy inventory seamless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center group">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-colors font-semibold">
              Schedule a Demo
            </button>
          </div>
          <div className="mt-8 text-emerald-100">
            <p>Questions? Call us at <a href="tel:+911234567890" className="text-white hover:underline">+91 12345 67890</a> or email <a href="mailto:support@trackmymed.com" className="text-white hover:underline">support@trackmymed.com</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-2 rounded-lg">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">TrackMyMed</span>
              </div>
              <p className="text-gray-400">
                Smart inventory management solution for modern pharmacies.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TrackMyMed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;