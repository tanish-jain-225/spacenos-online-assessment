'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, User } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

const INITIAL_CONVERSATION = [
  {
    role: 'user',
    text: 'What does Saturn in my 7th house mean for marriage?',
  },
  {
    role: 'ai',
    text: 'Saturn in the 7th house (Kalatra Bhava) typically delays marriage and adds responsibilities to partnerships. In your chart, Saturn is in Pisces with reasonable strength — this suggests marriage after 28, but once committed, deeply loyal. The current Rahu dasha activates this further. Your best window opens in 2025–26.',
  },
  {
    role: 'user',
    text: "Should I wait or is there a good muhurat this year?",
  },
  {
    role: 'ai',
    text: 'November 2025 has two Jupiter-Venus conjunctions that activate your 7th house favorably. The Shukla Paksha period between Nov 5–15 carries strong muhurat energy for new commitments. I\'d recommend finalizing arrangements then.',
  },
];

const PROMPT_SUGGESTIONS = [
  'What does Saturn in 7th house mean?',
  'When is my career peak period?',
  'Which planets affect my finances?',
  'Is 2025 good for starting a business?',
];

const MOCK_ANSWERS = {
  'What does Saturn in 7th house mean?':
    'Saturn in the 7th house represents key karmic growth in relationships. It brings structure, demanding patience, maturity, and deep commitment, which eventually translates to highly stable lifelong bonds after initial cycles of learning.',
  'When is my career peak period?':
    'Your professional peak is triggered when your 10th lord is activated by transits. The transit of Jupiter through Gemini in late 2025 launches a highly positive career expansion phase for you.',
  'Which planets affect my finances?':
    'Wealth is governed by the 2nd house of assets (Dhana Bhava) and the 11th house of gains (Labha Bhava). In your chart, Mercury and Venus form a strong conjunction, highlighting analytic and creative income channels.',
  'Is 2025 good for starting a business?':
    'Yes. Saturn transit into Aries in early 2025 activates your solar 11th house, bringing entrepreneurial structure. The optimal launch window opens post-October 2025 during the Jupiter sub-period.',
};

export default function AIAssistantSection() {
  const [messages, setMessages] = useState(INITIAL_CONVERSATION);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const text = textToSend.trim();
    if (!text) return;

    // Append user message
    const userMsg = { role: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulated response
    setTimeout(() => {
      let aiText =
        MOCK_ANSWERS[text] ||
        `I have checked your planetary alignments for "${text}". Your 9th house of fortune is currently active under transit Jupiter, indicating growth and learning. I recommend taking structured actions in this area over the next 3 months.`;

      setMessages((prev) => [...prev, { role: 'ai', text: aiText }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isTyping) return;
    handleSend(inputValue);
  };

  return (
    <section
      id="ai-assistant"
      className="section-padding bg-white border-y border-border"
      aria-labelledby="ai-assistant-heading"
    >
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Chat UI */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-gray-50 border border-border rounded-3xl overflow-hidden shadow-card">
              {/* Chat Header */}
              <div className="flex items-center gap-3 px-5 py-4 bg-white border-b border-border">
                <Image
                  src="/icons/logo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="rounded-full object-contain flex-none"
                  style={{ width: 'auto', height: 'auto' }}
                />
                <div>
                  <p className="font-heading font-semibold text-sm text-ink">Ask Guruji</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot flex-none" aria-hidden="true" />
                    <span className="text-xs text-emerald-600 font-medium">Online · Powered by your chart</span>
                  </div>
                </div>
              </div>

              {/* Messages viewport */}
              <div
                ref={scrollContainerRef}
                className="p-5 space-y-4 max-h-[360px] overflow-y-auto scrollbar-thin"
                role="log"
                aria-label="Chat conversation"
                aria-live="polite"
              >
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    {msg.role === 'ai' && (
                      <Image
                        src="/icons/logo.png"
                        alt=""
                        width={28}
                        height={28}
                        className="rounded-full object-contain flex-none mt-0.5"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    )}
                    {msg.role === 'user' && (
                      <div className="w-7 h-7 rounded-full bg-primary-800 flex items-center justify-center flex-none mt-0.5 text-white" aria-hidden="true">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <div
                      className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-primary-800 text-white rounded-tr-sm'
                          : 'bg-white border border-border text-ink rounded-tl-sm shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Typing state */}
                {isTyping && (
                  <div className="flex gap-3">
                    <Image
                      src="/icons/logo.png"
                      alt=""
                      width={28}
                      height={28}
                      className="rounded-full object-contain flex-none mt-0.5"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                    <div className="bg-white border border-border text-ink rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm text-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-ink-light animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-ink-light animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-ink-light animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
              </div>

              {/* Input Form */}
              <form onSubmit={handleFormSubmit} className="px-4 py-3 bg-white border-t border-border">
                <div className="flex items-center gap-2 bg-gray-50 rounded-xl border border-border px-4 py-2.5">
                  <input
                    id="ai-question"
                    name="question"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isTyping}
                    placeholder={isTyping ? "Guruji is contemplating..." : "Ask about your chart…"}
                    className="flex-1 bg-transparent text-sm text-ink placeholder:text-ink-light focus:outline-none disabled:text-ink-muted"
                    aria-label="Ask Guruji a question"
                    autoComplete="off"
                    suppressHydrationWarning
                  />
                  <button
                    type="submit"
                    disabled={isTyping || !inputValue.trim()}
                    className="w-7 h-7 rounded-lg bg-primary-800 flex items-center justify-center flex-none hover:bg-primary-700 transition-colors disabled:opacity-40 disabled:hover:bg-primary-800 active:scale-95 disabled:active:scale-100"
                    aria-label="Send message"
                    suppressHydrationWarning
                  >
                    <Send className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                  </button>
                </div>

                {/* Prompt chips */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {PROMPT_SUGGESTIONS.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      disabled={isTyping}
                      onClick={() => handleSend(prompt)}
                      className="text-xs text-primary-700 bg-primary-50 border border-primary-100 px-2.5 py-1 rounded-full hover:bg-primary-100 transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100 disabled:cursor-not-allowed"
                      suppressHydrationWarning
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full lg:w-1/2"
          >
            <SectionLabel className="mb-4">AI Assistant</SectionLabel>
            <Heading level="h2" id="ai-assistant-heading" className="mb-4">
              Ask Guruji anything about your chart
            </Heading>
            <p className="text-body text-ink-muted leading-relaxed mb-6">
              Ask Guruji is not a generic chatbot — it reads your specific
              chart and answers in the context of your planetary positions,
              current dasha period, and active transits.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                {
                  title: 'Chart-aware answers',
                  desc: 'Every response is grounded in your actual planetary positions — not generic astrology.',
                },
                {
                  title: 'Classical citations',
                  desc: 'Interpretations trace back to Parashari rules. You can verify the logic yourself.',
                },
                {
                  title: 'Timing guidance',
                  desc: 'Not just "what" but "when" — specific windows, muhurtas, and dasha transitions.',
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span
                    className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-none mt-0.5 text-xs font-bold text-primary-700"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink mb-0.5">{item.title}</p>
                    <p className="text-sm text-ink-muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Button
              variant="primary"
              size="md"
              onClick={() => {
                const input = document.getElementById('ai-question');
                if (input) {
                  input.focus();
                }
              }}
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              Try Ask Guruji
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
