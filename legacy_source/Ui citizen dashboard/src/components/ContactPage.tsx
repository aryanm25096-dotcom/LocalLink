import { Mail, Phone, Building, Send, MessageCircle, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Footer } from './Footer';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactCards = [
    {
      icon: MessageCircle,
      title: 'General Queries',
      description: 'Questions about LocalLink features and services',
      email: 'hello@locallink.io',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Phone,
      title: 'Technical Support',
      description: 'Need help with the app or experiencing issues?',
      email: 'support@locallink.io',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Building,
      title: 'Government Partnerships',
      description: 'Interested in deploying LocalLink in your city?',
      email: 'partnerships@locallink.io',
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#E8F1FB] to-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-6">
            <span className="px-4 py-2 bg-[#0A66C2]/10 text-[#0A66C2] rounded-full">
              Contact & Support
            </span>
          </div>
          <h1 className="text-[#0F172A] mb-6">
            We're Here to Help
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl">
            Have questions? Need support? Want to bring LocalLink to your city? 
            Reach out to us—we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {contactCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-[#0F172A] mb-3">{card.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {card.description}
                </p>
                <a
                  href={`mailto:${card.email}`}
                  className="inline-flex items-center gap-2 text-[#0A66C2] hover:text-[#1B76D1] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {card.email}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-br from-[#0A66C2] to-[#1B76D1] p-8 text-white">
                <h2 className="mb-2">Send Us a Message</h2>
                <p className="text-blue-100">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-[#0F172A] mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#0A66C2] transition-colors"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-[#0F172A] mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#0A66C2] transition-colors"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-[#0F172A] mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    rows={6}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#0A66C2] transition-colors resize-none"
                    required
                  />
                </div>

                {/* Image Upload (Optional) */}
                <div>
                  <label htmlFor="image" className="block text-[#0F172A] mb-3">
                    Upload Image <span className="text-gray-500">(Optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#0A66C2] transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#0A66C2] file:text-white file:cursor-pointer hover:file:bg-[#1B76D1]"
                    />
                  </div>
                  <p className="text-gray-500 mt-2">
                    Max file size: 5MB. Supported formats: JPG, PNG, GIF
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#0A66C2] hover:bg-[#1B76D1] text-white py-6 rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-[#0F172A] mb-3">How do I report an issue?</h3>
              <p className="text-gray-600 leading-relaxed">
                Simply open the LocalLink app, take a photo of the issue, and tap submit. Our AI will automatically classify and route it to the right department.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-[#0F172A] mb-3">How long does it take to resolve issues?</h3>
              <p className="text-gray-600 leading-relaxed">
                Average resolution time is 3.2 days, though this varies by issue type and severity. You'll receive real-time updates throughout the process.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-[#0F172A] mb-3">Is LocalLink available in my city?</h3>
              <p className="text-gray-600 leading-relaxed">
                We're currently deployed in select cities. Contact our partnerships team to bring LocalLink to your municipality.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-[#0F172A] mb-3">How do Green Credits work?</h3>
              <p className="text-gray-600 leading-relaxed">
                You earn Green Credits for verified reports and resolved issues. Accumulate credits to unlock badges, climb leaderboards, and become a civic champion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#0F172A] mb-6">Visit Our Office</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8F1FB] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-[#0A66C2]" />
                  </div>
                  <div>
                    <p className="text-[#0F172A] mb-1">Address</p>
                    <p className="text-gray-600">
                      123 Innovation Way<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8F1FB] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#0A66C2]" />
                  </div>
                  <div>
                    <p className="text-[#0F172A] mb-1">Email</p>
                    <p className="text-gray-600">hello@locallink.io</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8F1FB] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#0A66C2]" />
                  </div>
                  <div>
                    <p className="text-[#0F172A] mb-1">Office Hours</p>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-3xl h-[400px] flex items-center justify-center">
              <p className="text-gray-500">Map Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
