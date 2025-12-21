import React, { useState } from 'react';
import { Mail, MapPin, Send, Loader2, CheckCircle, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Your deployed Google Apps Script URL
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyHEtO2V9cfkodPTDrUW2Hqzt0pPJ1V9zed8JFOd9wf3hexRES1l4JgqAWfoT5LBqvH/exec";

    try {
      const formData = new URLSearchParams();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('message', formState.message);

      // Using 'no-cors' for Google Apps Script simple POST triggers
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      });

      // Show success state
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Submission recorded locally:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 animate-[fadeInUp_0.6s_ease-out]" data-reveal>
        <h2 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter uppercase">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto font-medium text-lg leading-relaxed">
          I'm always open to discussing new projects, creative ideas or original visions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <div className="space-y-8 animate-[fadeInUp_0.8s_ease-out]" data-reveal="left">
           <div className="glass-card p-10 rounded-[2.5rem] border border-gray-200 dark:border-white/10 shadow-2xl dark:shadow-none bg-white/40 dark:bg-black/20 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Contact Details</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="p-4 bg-brand/10 text-brand rounded-2xl group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-gray-900 dark:text-white font-semibold">contact@hasnain.dev</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="p-4 bg-brand/10 text-brand rounded-2xl group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Office</h4>
                    <p className="text-gray-900 dark:text-white font-semibold">Remote • GMT+5 (PK)</p>
                  </div>
                </div>
              </div>
           </div>

           <div className="p-10 rounded-[2.5rem] bg-brand text-white shadow-xl shadow-brand/20 relative overflow-hidden group">
              <Sparkles className="absolute top-4 right-4 text-white/20 group-hover:scale-125 transition-transform duration-500" size={40} />
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Availability</h3>
              <p className="opacity-90 font-medium mb-6">
                Current workload allows for 1 new project starting next month. Secure your slot by sending your project brief today.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                Accepting Briefs
              </div>
           </div>
        </div>

        {/* Form Area */}
        <div className="glass-card p-10 rounded-[2.5rem] border border-gray-200 dark:border-white/10 shadow-2xl dark:shadow-none relative animate-[fadeInUp_1s_ease-out]" data-reveal="right">
          
          {isSuccess ? (
            <div className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-6 animate-[fadeInUp_0.4s_ease-out]">
                <div className="w-20 h-20 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">Message Received!</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium max-w-xs">
                  Thank you for reaching out. I've received your inquiry and will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-brand font-bold text-sm hover:underline"
                >
                  Send another message
                </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  disabled={isSubmitting}
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/5 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all dark:text-white font-medium"
                  placeholder="Full Name"
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  disabled={isSubmitting}
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/5 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all dark:text-white font-medium"
                  placeholder="name@provider.com"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1">Message</label>
                <textarea 
                  required
                  rows={4}
                  disabled={isSubmitting}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/5 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all resize-none dark:text-white font-medium"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-5 rounded-2xl font-black text-white flex items-center justify-center gap-3 transition-all duration-300 shadow-xl overflow-hidden ${
                  isSubmitting ? 'bg-gray-400' : 'bg-gray-900 dark:bg-white dark:text-black hover:bg-brand dark:hover:bg-brand dark:hover:text-white'
                }`}
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>SEND MESSAGE <Send size={20} /></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;