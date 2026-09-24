import React, { useEffect } from 'react';

const DISQUS_SHORTNAME = 'snuffers';
const PAGE_URL = 'https://mgmt6110.vercel.app';
const PAGE_IDENTIFIER = 'home';
const SCRIPT_ID = 'disqus-embed-script';

declare global {
  interface Window {
    DISQUS?: {
      reset: (options: { reload: boolean; config?: () => void }) => void;
    };
    disqus_config?: () => void;
  }
}

export const DisqusComments: React.FC = () => {
  useEffect(() => {
    // Fixed thread: every visitor's comment lands in the same conversation.
    window.disqus_config = function (this: any) {
      this.page.url = PAGE_URL;
      this.page.identifier = PAGE_IDENTIFIER;
    };

    // The single-page app swaps views without reloading, so on a remount we ask
    // the already-loaded embed to redraw rather than injecting the script twice.
    if (window.DISQUS) {
      window.DISQUS.reset({ reload: true, config: window.disqus_config });
      return;
    }

    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = `https://${DISQUS_SHORTNAME}.disqus.com/embed.js`;
    script.setAttribute('data-timestamp', String(+new Date()));
    script.async = true;
    (document.head || document.body).appendChild(script);
  }, []);

  return (
    <section id="community-feedback" className="py-10 lg:py-14">
      <div className="max-w-[88rem] mx-auto px-4 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#5a5c58] leading-relaxed mb-6">
            Tell us what worked for you and your companion, and what did not.
          </p>

          <div id="disqus_thread" />

          <noscript>
            Please enable JavaScript to view the{' '}
            <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
          </noscript>
        </div>
      </div>
    </section>
  );
};
